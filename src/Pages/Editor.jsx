import React, { useState } from "react";
import { Header } from "../Components";

const Editor = () => {
    const [text, setText] = useState(
        `# Welcome

This is a simple HTML editor.

You can type here freely.`
    );

    const wrapSelection = (startTag, endTag) => {
        const textarea = document.getElementById("editor");

        const start = textarea.selectionStart;
        const end = textarea.selectionEnd;

        const selected = text.substring(start, end);

        const newText =
            text.substring(0, start) +
            startTag +
            selected +
            endTag +
            text.substring(end);

        setText(newText);

        setTimeout(() => {
            textarea.focus();
            textarea.selectionStart = start + startTag.length;
            textarea.selectionEnd = end + startTag.length;
        }, 0);
    };

  return (
        // Fix 1: dir="ltr" on the outermost wrapper resets direction
        // for the entire component, overriding any parent RTL layout.
        <div
            dir="ltr"
            className="m-2 md:m-10 p-6 bg-white rounded-xl shadow"
            style={{ direction: "ltr", unicodeBidi: "bidi-override" }}
        >

            <Header category="App" title="Editor" />

            {/* Toolbar */}
            <div className="flex flex-wrap gap-3 mb-4">

                <button
                    onClick={() => wrapSelection("<b>", "</b>")}
                    className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300"
                >
                    Bold
                </button>

                <button
                    onClick={() => wrapSelection("<i>", "</i>")}
                    className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300"
                >
                    Italic
                </button>

                <button
                    onClick={() => wrapSelection("<u>", "</u>")}
                    className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300"
                >
                    Underline
                </button>

                <button
                    onClick={() => wrapSelection("<h2>", "</h2>")}
                    className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300"
                >
                    H2
                </button>

                <button
                    onClick={() => wrapSelection("<p>", "</p>")}
                    className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300"
                >
                    Paragraph
                </button>

            </div>

            {/* Editor — Fix 2: dir + unicodeBidi on the textarea itself.
          unicodeBidi: "bidi-override" is critical — without it the
          browser's Unicode bidirectional algorithm can still reorder
          characters inside the input even when direction is ltr. */}
            <textarea
                id="editor"
                dir="ltr"
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="w-full h-[400px] border rounded-lg p-5 font-mono resize-none outline-none"
                style={{
                    direction: "ltr",
                    textAlign: "left",
                    unicodeBidi: "bidi-override",
                }}
            />

            {/* Preview */}
            <div className="mt-8">

                <h3 className="text-xl font-semibold mb-4">
                    Preview
                </h3>

                {/* Fix 3: The preview div also needs the same treatment.
            dangerouslySetInnerHTML renders whatever HTML is in the editor,
            and without direction set it inherits RTL from the parent,
            reversing all rendered text as well. */}
                <div
                    dir="ltr"
                    className="border rounded-lg p-5 min-h-[200px]"
                    style={{
                        direction: "ltr",
                        textAlign: "left",
                        unicodeBidi: "bidi-override",
                    }}
                    dangerouslySetInnerHTML={{ __html: text }}
                />

            </div>

        </div>
    );
};

export default Editor;