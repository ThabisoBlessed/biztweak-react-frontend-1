import { EditorState } from "draft-js";
import React, { useEffect, useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "./TextEditor.css";

export const TextEditor = (props: any) => {
  const [isInitLoad, setIsInitLoad] = useState(true);

  useEffect(() => {
    // setIsInitLoad(false);
  });

  const onEditorStateChange = (state: EditorState) => {
    if (props.handleEditorStateChange) {
      props.handleEditorStateChange(state.getCurrentContent().getPlainText());
    }
  };

  return (
    <div>
      <Editor
        // editorState={editorState}
        toolbarClassName="toolbarClassName"
        wrapperClassName="wrapperClassName"
        editorClassName="editorClassName"
        onEditorStateChange={onEditorStateChange}
      />
    </div>
  );
};
