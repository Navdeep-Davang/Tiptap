/* eslint-disable */
import { Editor } from "@tiptap/core";
import { EditorContent, useEditor } from "@tiptap/react";
import { debounce } from 'lodash';
import { useCallback, useState } from "react";
import "tippy.js/animations/shift-toward-subtle.css";
// import applyDevTools from "prosemirror-dev-tools";

import { getExtensions } from "./extensions";
import { CustomBubbleMenu, LinkBubbleMenu } from "./menus";
import { content } from "./mocks";
import { notitapEditorClass } from './proseClassString'

import "./styles/tiptap.scss";


const Notitap = () => {
  const logContent = useCallback(
    (e: Editor) => console.log(e.getJSON()),
    []
  );

  const unsplashUrl = `https://source.unsplash.com/photos/random?client_id=${process.env.UNSPLASH_KEY}&w=800&h=400`;

  const [isAddingNewLink, setIsAddingNewLink] = useState(false);

  const openLinkModal = () => setIsAddingNewLink(true);

  const closeLinkModal = () => setIsAddingNewLink(false);

  const addImage = () =>
    editor?.commands.setMedia({
      src: unsplashUrl,
      "media-type": "img",
      alt: "Something else",
      title: "Something",
      width: "800",
      height: "400",
    });

  const videoUrl =
    "https://user-images.githubusercontent.com/45892659/178123048-0257e732-8cc2-466b-8447-1e2b7cd1b5d9.mov";

  const addVideo = () =>
    editor?.commands.setMedia({
      src: videoUrl,
      "media-type": "video",
      alt: "Some Video",
      title: "Some Title Video",
      width: "400",
      height: "400",
    });

  const editor = useEditor({
    immediatelyRender: false,
    extensions: getExtensions({ openLinkModal }),
    content,
    editorProps: {
      attributes: {
        class: `${notitapEditorClass} focus:outline-none w-full`,
        spellcheck: "false",
        suppressContentEditableWarning: "true",
      },
    },
    onUpdate: debounce(
      ({
        editor,
        transaction,
      }: {
        editor: Editor;
        transaction: { selection?: unknown; getMeta?: (key: string) => any };
      }) => {
        // Example: Use editor
        logContent(editor);
    
        // Example: Use transaction fields if needed
        if (transaction.selection) {
          console.log('Selection updated:', transaction.selection);
        }
    
        if (transaction.getMeta) {
          const metaValue = transaction.getMeta('contentChanged');
          console.log('Content changed meta:', metaValue);
        }
      },
      500
    ),
  });

  const addTable = () => editor?.commands.insertTable({ rows: 3, cols: 3, withHeaderRow: true })


  return (
    editor && (
      <section className="flex flex-col gap-2 w-full justify-center">
        <span className="flex gap-2">
          <button
            className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            type="button"
            onClick={() => addImage()}
          >
            Add Image
          </button>
          <button
            className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            type="button"
            onClick={() => addVideo()}
          >
            Add Video
          </button>
          <button
            className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            type="button"
            onClick={() => addTable()}
          >
            Add table
          </button>
        </span>

        <EditorContent className="w-full flex justify-center" editor={editor} />

        <CustomBubbleMenu editor={editor} />

        <LinkBubbleMenu editor={editor} />
      </section>
    )
  );
};


export default Notitap;