import { Node, mergeAttributes } from '@tiptap/core';

const LineNode = Node.create({
  name: 'line', // Name of the node, representing each line

  // Define the content structure of the node
  content: 'text*', // A line consists of text

  // Define the draggable attributes
  addAttributes() {
    return {
      draggable: {
        default: true,
      },
    };
  },

  // Parsing the HTML structure
  parseHTML() {
    return [
      {
        tag: 'div.line', // Custom tag to represent each line
      },
    ];
  },

  // Rendering the node as HTML
  renderHTML({ node }) {
    const contentHtml: string[] = []; // Explicitly define type as string array

    // Use Fragment.forEach to loop through child nodes
    node.content.forEach((child) => {
      // Push each child node's HTML representation into the contentHtml array
      contentHtml.push(child.textBetween(0, child.content.size));
    });

    // Return the full HTML for this node with the drag icon and content
    return [
      'div',
      mergeAttributes(this.options.HTMLAttributes),
      { class: 'line' },
      // Add drag icon and content
      `<div class="drag-icon">≡</div>`,
      contentHtml.join(''),
    ];
  },
});

export default LineNode;
