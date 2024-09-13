import { contextBridge } from 'electron'

if (!process.contextIsolated) {
  throw new Error('preload must be run in a contextIsolated environment')
}

try {
  contextBridge.exposeInMainWorld('context', {
    // TODO:
  })
} catch (e) {
  console.error(e)
}
