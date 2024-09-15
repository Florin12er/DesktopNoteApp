import {
  MDXEditor,
  headingsPlugin,
  listsPlugin,
  markdownShortcutPlugin,
  quotePlugin,
  codeBlockPlugin,
  codeMirrorPlugin,
  toolbarPlugin,
  UndoRedo,
  BoldItalicUnderlineToggles,
  CreateLink,
  InsertImage,
  InsertTable,
  BlockTypeSelect,
  linkPlugin,
  imagePlugin,
  tablePlugin,
  ListsToggle,
  thematicBreakPlugin,
  frontmatterPlugin,
  StrikeThroughSupSubToggles,
  AdmonitionDirectiveDescriptor,
  directivesPlugin,
  linkDialogPlugin,
  InsertThematicBreak,
  InsertFrontmatter,
  InsertCodeBlock
} from '@mdxeditor/editor'
import { useMarkdownEditor } from '@/hooks/useMarkdownEditor'
import { vscodeDark } from '@uiw/codemirror-theme-vscode'

export const MarkdownEditor = () => {
  const { editorRef, selectedNote, handleAutoSaving, handleBlur } = useMarkdownEditor()

  if (!selectedNote) return null

  return (
    <div className="flex flex-col h-full">
      <MDXEditor
        ref={editorRef}
        key={selectedNote.title}
        onChange={handleAutoSaving}
        onBlur={handleBlur}
        markdown={selectedNote.content}
        plugins={[
          headingsPlugin(),
          listsPlugin(),
          quotePlugin(),
          markdownShortcutPlugin(),
          codeBlockPlugin({ defaultCodeBlockLanguage: 'js' }),
          codeMirrorPlugin({
            codeBlockLanguages: {
              js: 'JavaScript',
              go: 'Go',
              css: 'CSS',
              html: 'HTML',
              python: 'Python',
              rust: 'Rust',
              tsx: 'TypeScript React',
              jsx: 'React'
            },
            codeMirrorExtensions: [vscodeDark]
          }),
          toolbarPlugin({
            toolbarContents: () => (
              <div className="flex gap-1">
                <UndoRedo />
                <BoldItalicUnderlineToggles />
                <StrikeThroughSupSubToggles />
                <ListsToggle />
                <CreateLink />
                <InsertImage />
                <InsertTable />
                <InsertThematicBreak />
                <BlockTypeSelect />
                <InsertFrontmatter />
                <InsertCodeBlock />
              </div>
            )
          }),
          linkPlugin(),
          thematicBreakPlugin(),
          imagePlugin(),
          tablePlugin(),
          linkDialogPlugin(),
          frontmatterPlugin(),
          thematicBreakPlugin(),
          directivesPlugin({ directiveDescriptors: [AdmonitionDirectiveDescriptor] }),
          frontmatterPlugin(),
          directivesPlugin({ directiveDescriptors: [AdmonitionDirectiveDescriptor] })
        ]}
        contentEditableClassName="dark-editor dark-theme outline-none flex-grow overflow-y-auto min-h-[calc(100vh-60px)] max-w-none text-lg px-8 py-5 caret-yellow-500 prose prose-invert prose-p:my-3 prose-p:leading-relaxed prose-headings:my-4 prose-blockquote:my-4 prose-ul:my-2 prose-li:my-0 prose-code:px-1 prose-code:text-red-500 prose-code:before:content-[''] prose-code:after:content-['']"
      />
    </div>
  )
}
