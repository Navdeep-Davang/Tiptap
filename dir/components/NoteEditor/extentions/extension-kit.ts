'use client'


import { createLowlight } from 'lowlight'; 

const lowlight = createLowlight();



// import { HocuspocusProvider } from '@hocuspocus/provider'
import {
  BlockquoteFigure,
  BulletList,
  Columns, 
  Column,
  CodeBlock,
  CodeBlockLowlight,
  Document,
  Heading,
  HorizontalRule,
  ImageBlock,
  Mention,
  OrderedList,
  Paragraph,
  Table,
  TableCell,
  TableHeader,
  TableRow,
  TaskItem,
  TaskList,
  Youtube,
  Highlight,
  Link,
  Subscript,
  Superscript,
  TextStyle,
  Underline,
  BubbleMenu,
  CharacterCount,
  // Collaboration,
  // CollaborationCursor,
  Color,
  Dropcursor,
  FloatingMenu,
  Focus,
  FontFamily,
  ListKeymap,
  Placeholder,
  StarterKit,
  TextAlign,
  Typography,
} from '.'

import {  } from 'lowlight';
// interface ExtensionKitProps {
//   provider?: HocuspocusProvider | null
// }

const ExtensionKit = () => [
  // Nodes
  Document,
  BlockquoteFigure,
  BulletList,
  CodeBlock,
  CodeBlockLowlight.configure({ lowlight }),
  Heading.configure({
    levels: [1, 2, 3, 4, 5, 6],
  }),
  HorizontalRule,
  ImageBlock,
  Mention,
  OrderedList,
  Paragraph,
  Table,
  TableCell,
  TableHeader,
  TableRow,
  TaskItem.configure({
    nested: true,
  }),
  TaskList,
  Youtube,
  Columns, 
  Column,

  // Marks
  Highlight.configure({ multicolor: true }),
  Link.configure({
    openOnClick: false,
  }),
  Subscript,
  Superscript,
  TextStyle,
  Underline,

  // Functionalities
  BubbleMenu,
  CharacterCount.configure({ limit: 50000 }),
  // Collaboration,
  // CollaborationCursor,
  Color,
  Dropcursor.configure({
    width: 2,
    class: 'ProseMirror-dropcursor border-black',
  }),
  FloatingMenu,
  Focus,
  FontFamily,
  ListKeymap,
  Placeholder.configure({
    includeChildren: true,
    showOnlyCurrent: false,
    placeholder: () => '',
  }),
  StarterKit.configure({
    document: false,
    dropcursor: false,
    heading: false,
    horizontalRule: false,
    blockquote: false,
    history: false,
    codeBlock: false,
  }),
  TextAlign.configure({
    types: ['heading', 'paragraph'],
  }),
  Typography,
]

export default ExtensionKit
