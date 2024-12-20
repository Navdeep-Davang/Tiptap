import { Extension } from "@tiptap/core";
import Suggestion from "@tiptap/suggestion";

export const Commands = Extension.create({
  name: "slash-commands",

  addOptions() {
    return {
      suggestions: {
        char: "/",
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        command: ({ editor, range, props }: any) =>
          props.command({ editor, range }),
      },
    };
  },

  addProseMirrorPlugins() {
    return [
      Suggestion({
        editor: this.editor,
        ...this.options.suggestions,
      }),
    ];
  },
});
