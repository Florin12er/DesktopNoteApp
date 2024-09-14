import { ComponentProps } from 'react'
import { NotePreview } from '@/components'
import { isEmpty } from 'lodash'
import { twMerge } from 'tailwind-merge'
import { useNotesList } from '@renderer/hooks/useNotesList'

export type NotePreviewListProps = ComponentProps<'ul'> & {
  onSelect?: () => void
}

export const NotePreviewList = ({ onSelect, className, ...props }: NotePreviewListProps) => {
  const { notes, selectedNoteIndex, handleNoteSelect } = useNotesList({ onSelect })

  if (!notes) return null

  if (isEmpty(notes))
    return (
      <ul className={twMerge('text-center pt-4', className)} {...props}>
        <span>No notes created 😫</span>
      </ul>
    )

  return (
    <ul className={className} {...props}>
      {notes.map((note, index) => (
        <NotePreview
          isActive={selectedNoteIndex === index}
          onClick={handleNoteSelect(index)}
          key={note.title}
          {...note}
        />
      ))}
    </ul>
  )
}
