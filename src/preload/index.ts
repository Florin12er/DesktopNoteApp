import { contextBridge } from 'electron'

if (!process.contextIsolated) {
  throw new Error('preload must be run in a contextIsolated environment')
}

try {
  contextBridge.exposeInMainWorld('context', {
    locale: navigator.language
  })
} catch (e) {
  console.error(e)
}
