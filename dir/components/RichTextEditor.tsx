'use client'; 


import { Tiptap } from './Tiptap';

// import { EditorContent } from '@tiptap/react';
// import StarterKit from '@tiptap/starter-kit';
// import { DragDropPlugin } from '../customExtentions/DragDropPlugin';
// import { MulticolumnPlugin } from '../customExtentions/MulticolumnPlugin';

const RichTextEditor = () => {
  // const editor = useEditor({
  //   extensions: [
  //     StarterKit,
  //     DragDropPlugin.configure({
  //       onDrop: (draggedNode, targetNode) => {
  //         console.log('Dragged:', draggedNode);
  //         console.log('Dropped on:', targetNode);
  //       },
  //     }),
  //     MulticolumnPlugin.configure({
  //       onCombine: (node1, node2) => {
  //         console.log('Combined:', node1, node2);
  //       },
  //     }),
  //   ],
  //   content: '<p>Hello, start editing...</p>',
  // });

  return (
    <div style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '16px' }}>
      <Tiptap />
    </div>
  );
};

export default RichTextEditor;
