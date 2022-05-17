const { IpcChannel } = require('@obsidians/ipc')

class DockerImageChannel extends IpcChannel {
  constructor (imageName) {
    super('docker-image', imageName)
  }

  get imageName () {
    return this.uid
  }

  async versions () {
    const { logs } = await this.exec(`docker images ${this.imageName} --format "{{json . }}"`)
    console.log(logs, 'logs')
    let versions = logs.split('\n')
      .filter(Boolean)
      .map(JSON.parse)
    console.log('versions:log', versions)
    return versions
  }

  async deleteVersion (version) {
    await this.exec(`docker rmi ${this.imageName}:${version}`)
  }

  async remoteVersions () {
    const res = await this.fetch(`http://registry.hub.docker.com/v1/repositories/${this.imageName}/tags`)
    console.log('remote:version', res)
    return JSON.parse(res)
  }

  async any () {
    const versions = await this.versions()
    return !!(versions && versions.length)
  }
}

module.exports = DockerImageChannel
