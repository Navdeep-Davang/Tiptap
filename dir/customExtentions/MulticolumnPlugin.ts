import { Extension, Node } from '@tiptap/core';

// MulticolumnExtension creates a custom multi-column node
export const MulticolumnExtension = Extension.create({
  name: 'multicolumnExtension',

  // Define a new node for multi-column layout
  addNode() {
    return {
      name: 'multicolumn', // Custom name for the node

      group: 'block',
      content: 'paragraph+', // The multi-column node will contain paragraphs
      defining: true, // Defining node type

      addAttributes() {
        return {
          class: {
            default: 'multicolumn', // CSS class for the multi-column node
          },
        };
      },

      // Parsing the HTML structure for the multi-column node
      parseHTML() {
        return [{ tag: 'div.multicolumn' }];
      },

      // Rendering the multi-column node as HTML
      renderHTML({ node: }) {
        return [
          'div',
          { class: 'multicolumn' },
          ...node.content.map((child) => child.toHTML()), // Render content inside the columns
        ];
      },
    };
  },
});
