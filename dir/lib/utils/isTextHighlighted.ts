import { isTextSelection } from '@tiptap/core'
import { Editor } from '@tiptap/react'

export const isTextHighlighted = ({ editor }: { editor: Editor }) => {
  const {
    state: {
      doc,
      selection,
      selection: {
        empty,
        from,
        to,
      },
    },
  } = editor

  // Check if the text block is empty. Double-clicking an empty paragraph can return a node size of 2.
  // So we also verify the length of the text between the selection.
  const isTextBlockEmpty = !doc.textBetween(from, to).length && isTextSelection(selection)

  // If the selection is empty or the editor is not editable, return false.
  if (empty || isTextBlockEmpty || !editor.isEditable) {
    return false
  }

  return true
}

export default isTextHighlighted
