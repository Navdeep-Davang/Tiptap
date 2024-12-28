'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'

const Textap = () => {
  const editor = useEditor({
    immediatelyRender: false,
    extensions: [
      StarterKit,
    ],
    content: '<p>Hello World! 🌎️</p>',
  })

  return (
    <EditorContent editor={editor} 
    slotBefore={<div className="flex flex-wrap gap-2">
                    <button
                      onClick={() => editor.chain().focus().toggleBold().run()}
                      disabled={!editor.can().chain().focus().toggleBold().run()}
                      className={editor.isActive("bold") ? "is-active" : ""}
                    >
                      bold
                    </button>
                </div>} />
  )
}

export default Textap