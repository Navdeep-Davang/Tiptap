'use client';

import { EditorContent } from '@tiptap/react';
import React, { useRef } from 'react';
import { TextMenu } from '@/dir/components/menus';
import { ContentItemMenu } from '@/dir/components/menus';
import { LinkMenu } from '@/dir/components/menus';
import { useEditorContext } from '@/dir/hooks/useEditorContext';
import { ColumnsMenu } from '@/dir/extentions/MultiColumn/menus';
import { TableColumnMenu, TableRowMenu } from '@/dir/extentions/Table/menus';
import ImageBlockMenu from '@/dir/extentions/ImageBlock/components/ImageBlockMenu';
import { EditorHeader } from '@/dir/components/NoteEditor/components/EditorHeader';

export const NoteEditor = ({ aiToken }: { aiToken?: string }) => {
  const menuAreaRef = useRef(null);
  const { editor, users } = useEditorContext({ aiToken });

  if (!editor || !users) {
    return null;
  }

  return (
    <div className="flex h-full" ref={menuAreaRef}>
      <div className="relative flex flex-col flex-1 h-full overflow-hidden">
        <EditorHeader editor={editor} users={users} />
        <EditorContent editor={editor} className="flex-1 overflow-y-auto" />
        <ContentItemMenu editor={editor} />
        <LinkMenu editor={editor} appendTo={menuAreaRef} />
        <TextMenu editor={editor} />
        <ColumnsMenu editor={editor} appendTo={menuAreaRef} />
        <TableRowMenu editor={editor} appendTo={menuAreaRef} />
        <TableColumnMenu editor={editor} appendTo={menuAreaRef} />
        <ImageBlockMenu editor={editor} appendTo={menuAreaRef} />
      </div>
    </div>
  );
};

export default NoteEditor;
