'use client';


import { useEffect, useState } from 'react';
import { useEditor, useEditorState } from '@tiptap/react';
import type { AnyExtension, Editor } from '@tiptap/core';
import ExtensionKit from '../extentions/extension-kit';

declare global {
  interface Window {
    editor: Editor | null;
  }
}

export const useEditorContext = ({
  aiToken,
  userId,
  userName = 'Maxi',
}: {
  aiToken?: string;
  userId?: string;
  userName?: string;
}) => {
  // const [collabState, setCollabState] = useState('Disconnected'); // No WebSocket connection
  const [isClient, setIsClient] = useState(false);


  useEffect(() => {
    // Set isClient to true once the component is mounted on the client side
    setIsClient(true);
  }, []);


  const editor = useEditor({
    immediatelyRender: false,
    shouldRerenderOnTransaction: false,
    autofocus: true,
    onCreate: (ctx) => {
      if (ctx.editor.isEmpty) {
        ctx.editor.commands.setContent('<p>Start typing...</p>');
        ctx.editor.commands.focus('start', { scrollIntoView: true });
      }
    },
    extensions: [
      ...ExtensionKit(),
      // Include AI-related extensions if needed
      // aiToken ? AiWriter.configure({ authorId: userId, authorName: userName }) : undefined,
      // aiToken ? AiImage.configure({ authorId: userId, authorName: userName }) : undefined,
      // aiToken ? Ai.configure({ token: aiToken }) : undefined,
    ].filter((e): e is AnyExtension => e !== undefined),
    editorProps: {
      attributes: {
        autocomplete: 'off',
        autocorrect: 'off',
        autocapitalize: 'off',
        class: 'min-h-full',
      },
    },
  });

  const users = useEditorState({
    editor,
    selector: (ctx) => {
      return []; // Since collaboration is removed, no user data is required
    },
  });

  useEffect(() => {
    if (isClient && editor) {
      // Now that we're sure it's running on the client, access `window`
      window.editor = editor;
    }
  }, [isClient, editor]);


  return { editor, users };
};
