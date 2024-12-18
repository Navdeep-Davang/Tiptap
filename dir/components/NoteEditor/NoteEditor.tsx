import { EditorContent } from '@tiptap/react'
import React, { useRef } from 'react'

import { EditorToolbar } from './components/EditorToolbar'
import { TextFormattingMenu } from '../menus/TextFormattingMenu'
import { ContentBlockMenu } from '../menus/ContentBlockMenu'
import { useEditorContext } from '@/hooks/useEditorContext'
import { HyperlinkMenu } from '../menus'

import * as Y from 'yjs'
import { LayoutMenu } from '@/extensions/Layout/menus'
import { TableCellMenu, TableHeaderMenu } from '@/extensions/Table/menus'
import ImageBlockOptions from '@/extensions/ImageBlock/components/ImageBlockOptions'

export const NoteEditor = ({
  authToken,
  documentInstance,
  ,
}: {
  authToken?: string
  documentInstance: Y.Doc | null
}) => {
  const menuAreaRef = useRef(null)

  const { editorInstance, activeUsers, collaborationState } = useEditorContext({ authToken, documentInstance})

  if (!editorInstance || !activeUsers) {
    return null
  }

  return (
    <div className="flex h-full" ref={menuAreaRef}>
      <div className="relative flex flex-col flex-1 h-full overflow-hidden">
        <EditorToolbar
          editor={editorInstance}
          collaborationState={collaborationState}
          activeUsers={activeUsers}
        />
        <EditorContent editor={editorInstance} className="flex-1 overflow-y-auto" />
        <ContentBlockMenu editor={editorInstance} />
        <HyperlinkMenu editor={editorInstance} appendTo={menuAreaRef} />
        <TextFormattingMenu editor={editorInstance} />
        <LayoutMenu editor={editorInstance} appendTo={menuAreaRef} />
        <TableHeaderMenu editor={editorInstance} appendTo={menuAreaRef} />
        <TableCellMenu editor={editorInstance} appendTo={menuAreaRef} />
        <ImageBlockOptions editor={editorInstance} appendTo={menuAreaRef} />
      </div>
    </div>
  )
}

export default NoteEditor
