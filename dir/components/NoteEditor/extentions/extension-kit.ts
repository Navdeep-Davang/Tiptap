'use client'

import { HocuspocusProvider } from '@hocuspocus/provider'
import {
  BlockquoteFigure,
  BulletList,
  CodeBlock,
  CodeBlockLowlight,
  Document,
  HardBreak,
  Heading,
  HorizontalRule,
  ImageBlock,
  ListItem,
  Mention,
  OrderedList,
  Paragraph,
  Table,
  TableCell,
  TableHeader,
  TableRow,
  TaskItem,
  TaskList,
  Text,
  Youtube,
  Bold,
  Code,
  Highlight,
  Italic,
  Link,
  Strike,
  Subscript,
  Superscript,
  TextStyle,
  Underline,
  BubbleMenu,
  CharacterCount,
  Collaboration,
  CollaborationCursor,
  Color,
  Dropcursor,
  FloatingMenu,
  Focus,
  FontFamily,
  Gapcursor,
  ListKeymap,
  Placeholder,
  StarterKit,
  TextAlign,
  Typography,
  UndoRedo,
} from '.'

interface ExtensionKitProps {
  provider?: HocuspocusProvider | null
}

export const ExtensionKit = ({ provider }: ExtensionKitProps) => [
  // Nodes
  Document,
  BlockquoteFigure,
  BulletList,
  CodeBlock,
  CodeBlockLowlight,
  HardBreak,
  Heading.configure({
    levels: [1, 2, 3, 4, 5, 6],
  }),
  HorizontalRule,
  ImageBlock,
  ListItem,
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
  Text,
  Youtube,

  // Marks
  Bold,
  Code,
  Highlight.configure({ multicolor: true }),
  Italic,
  Link.configure({
    openOnClick: false,
  }),
  Strike,
  Subscript,
  Superscript,
  TextStyle,
  Underline,

  // Functionalities
  BubbleMenu,
  CharacterCount.configure({ limit: 50000 }),
  Collaboration,
  CollaborationCursor,
  Color,
  Dropcursor.configure({
    width: 2,
    class: 'ProseMirror-dropcursor border-black',
  }),
  FloatingMenu,
  Focus,
  FontFamily,
  Gapcursor,
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
  UndoRedo,
]

export default ExtensionKit
