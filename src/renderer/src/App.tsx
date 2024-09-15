import { useRef } from 'react'
import {
  DraggableTopBar,
  RootLayout,
  Sidebar,
  Content,
  ActionButtonsRow,
  NotePreviewList,
  MarkdownEditor,
  FloatingNoteTitle
} from './components'
const App = () => {
  const contentContainerRef = useRef<HTMLDivElement>(null)

  const resetScroll = () => {
    contentContainerRef.current?.scrollTo(0, 0)
  }

  return (
    <>
      <DraggableTopBar />
      <RootLayout>
        <Sidebar className="p-2">
          <ActionButtonsRow className="flex justify-between mt-4" />
          <NotePreviewList className="mt-3 space-y-1" onSelect={resetScroll} />
        </Sidebar>
        <Content ref={contentContainerRef} className="border-l bg-zinc-900/50 border-l-white/20">
          <FloatingNoteTitle />
          <MarkdownEditor />
        </Content>
      </RootLayout>
    </>
  )
}

export default App
