import { IpcChannel } from '@obsidians/ipc'

class DockerChannel extends IpcChannel {
  constructor() {
    super('docker')
  }

  async check () {
   
    return await this.invoke('check')
  }

  async version () {
    console.log('channel:version')
    console.log(111, await this.invoke('version'))
    return await this.invoke('version')
  }

  async launch () {
    return await this.invoke('launch')
  }
}


export default new DockerChannel()
