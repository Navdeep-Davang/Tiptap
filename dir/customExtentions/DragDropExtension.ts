import { Extension } from '@tiptap/core'

export const DragAndDrop = Extension.create({
  name: 'dragAndDrop',

  addOptions() {
    return {
      types: [],
      dragThreshold: 10, // Optional, you can set a threshold for drag distance before it activates
    }
  },

  addGlobalAttributes() {
    return [
      {
        types: this.options.types,
        attributes: {
          draggable: {
            default: false,
            parseHTML: element => element.hasAttribute('draggable'),
            renderHTML: attributes => {
              if (attributes.draggable) {
                return { draggable: true }
              }
              return {}
            },
          },
        },
      },
    ]
  },

  addCommands() {
    return {
      enableDrag: () => ({ commands }) => {
        return this.options.types
          .map(type => commands.updateAttributes(type, { draggable: true }))
          .every(response => response)
      },

      disableDrag: () => ({ commands }) => {
        return this.options.types
          .map(type => commands.updateAttributes(type, { draggable: false }))
          .every(response => response)
      },
    }
  },

  addKeyboardShortcuts() {
    return {
      'Mod-Shift-d': () => this.editor.commands.enableDrag(),
      'Mod-Shift-u': () => this.editor.commands.disableDrag(),
    }
  },

  onTransaction({ editor, transaction }) {
    // Check if the transaction involves dragging content
    const { doc, selection } = transaction
    if (transaction.docChanged) {
      // Here, you could update specific editor state related to the drag-and-drop changes
      // For example, applying a style or moving content based on where it's dropped
      editor.setOptions({
        doc: doc,  // Update the document state after drag and drop
        selection: selection,
      })
    }
  },
})
