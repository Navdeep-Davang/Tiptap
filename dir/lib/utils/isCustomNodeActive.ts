import { Editor } from '@tiptap/react'

import { Figcaption, HorizontalRule, ImageBlock, Link, CodeBlock } from '@/dir/components/NoteEditor/extentions'
// import { TableOfContentsNode } from '@/dir/extensions/TableOfContentsNode'

export const isTableGripSelected = (node: HTMLElement) => {
  let currentElement = node

  while (currentElement && !['TD', 'TH'].includes(currentElement.tagName)) {
    currentElement = currentElement.parentElement!
  }

  const hasGripColumn = currentElement?.querySelector('a.grip-column.selected')
  const hasGripRow = currentElement?.querySelector('a.grip-row.selected')

  return hasGripColumn || hasGripRow
}

export const isCustomNodeActive = (editor: Editor, node: HTMLElement) => {
  const activeCustomNodes = [
    HorizontalRule.name,
    ImageBlock.name,
    // ImageUpload.name,
    CodeBlock.name,
    ImageBlock.name,
    Link.name,
    // AiWriter.name,
    // AiImage.name,
    Figcaption.name,
    // TableOfContentsNode.name,
  ]

  const isActiveCustomNode = activeCustomNodes.some(nodeType => editor.isActive(nodeType))
  return isActiveCustomNode || isTableGripSelected(node)
}

export default isCustomNodeActive
