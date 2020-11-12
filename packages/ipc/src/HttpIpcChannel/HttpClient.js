import Auth from '@obsidians/auth'
import BuildService from './BuildService'

const PROJECT = process.env.PROJECT

export default class HttpClient {
  constructor (ipc, serverUrl, specificUrl) {
    this.ipc = ipc
    this.serverUrl = serverUrl
    this.specificUrl = specificUrl
  }

  async invoke (channel, method, ...args) {
    if (channel.startsWith('docker')) {
      const imageName = channel.replace('docker-image-', '')
      switch (method) {
        case 'check':
          return true
        case 'any':
          return true
        case 'version':
          return true
        case 'versions':
          const versions = await this.query(`${this.serverUrl}/docker/${imageName}`, 'GET')
          return versions.map(v => ({ Tag: v.name }))
        case 'remoteVersions':
          return []
      }
    } else if (channel.startsWith('auto-update')) {
      switch (method) {
        case 'check':
          return
      }
    } else if (channel.startsWith('terminal')) {
      if (method === 'run') {
        await this.startBuildTask(args[0], args[1])
      }
      return
    } else if (channel.endsWith('-project')) {
      if (method === 'loadTree') {
        return {}
      }
    } else if (channel === 'user') {
      return this.query(`${this.serverUrl}/user/${method}`, 'GET')
    }

    if (method === 'list') {
      return []
    }

    if (method === 'get') {
      const apiPath = args[0] ? `${channel}/${args[0]}` : channel
      return this.queryApiPath(`${PROJECT}/${apiPath}`, 'GET')
    } else if (method === 'post') {
      const apiPath = args[0] ? `${channel}/${args[0]}` : channel
      return this.queryApiPath(`${PROJECT}/${apiPath}`, 'POST', args[1])
    } else if (method === 'delete') {
      const apiPath = args[0] ? `${channel}/${args[0]}` : channel
      return this.queryApiPath(`${PROJECT}/${apiPath}`, 'DELETE')
    }

    return this.queryApiPath(channel, 'POST', { method, args })
  }

  async startBuildTask (cmd, opt) {
    const build = new BuildService(this, {
      cmd,
      project: opt.cwd,
    })
    const onData = data => this.ipc.trigger('data', data)
    await build.start(onData)
  }

  async queryApiPath (apiPath, method, params) {
    return this.query(`${this.serverUrl}/${apiPath}`, method, params)
  }

  async query (endpoint, method, params) {
    const token = await Auth.getToken()
    if (!token) {
      throw new Error('Not authorized')
    }
    const opts = {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method,
    }
    if (method === 'POST') {
      opts.body = JSON.stringify(params)
    }

    const response = await fetch(endpoint, opts)
    if (response.status === 401) {
      throw new Error('Not authorized')
    }

    let result = await response.text()

    try {
      result = JSON.parse(result)
    } catch (e) {}

    if (response.status >= 400) {
      throw new Error(result.message || result)
    }
    return result
  }

  on (channel, callback) {}
  removeListener (channel, callback) {}
}