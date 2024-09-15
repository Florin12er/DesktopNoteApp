import { ElectronAPI } from '@electron-toolkit/preload'
import { CreateNote, DeleteNote, GetNotes, ReadNote, WriteNote } from '@shared/types'

declare global {
  interface Window {
    // electron: ElectronAPI
    constext: {
      locale: string
      getNotes: GetNotes
      readNotes: ReadNote
      writeNote: WriteNote
      createNote: CreateNote
      deleteNote: DeleteNote
    }
  }
}
