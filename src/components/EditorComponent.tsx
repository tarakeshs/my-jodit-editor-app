import React, { useRef, useState } from "react";
import JoditEditor from "jodit-react";

const EditorComponent: React.FC = () => {
  const editor = useRef(null);
  const [content, setContent] = useState<string>("");

  const config = {
    readonly: false, // All options from https://xdsoft.net/jodit/doc/
    height: 400,
    toolbarButtonSize: "middle",
    buttons: ["bold", "italic", "underline", "link", "unlink", "source"],
    uploader: {
      insertImageAsBase64URI: true,
    },
  };

  return (
    <div>
      <JoditEditor
        ref={editor}
        value={content}
        config={config}
        tabIndex={1} // tabIndex of textarea
        onBlur={(newContent: string) => setContent(newContent)}
        onChange={(newContent: string) => {}}
      />
      <div style={{ marginTop: "20px" }}>
        <h3>Content:</h3>
        <pre>{content}</pre>
      </div>
    </div>
  );
};

export default EditorComponent;
