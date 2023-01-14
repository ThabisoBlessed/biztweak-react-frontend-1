import { EditorState } from "draft-js";
import React, { useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "./TextEditor.css";

export const TextEditor = (props: any) => {
    const [text, setText] = useState({} as EditorState);

    const onEditorStateChange = (state: EditorState) => {
      setText(state);
      // console.log(text);textEditorText
      console.log(text.getCurrentContent().getPlainText());
    }

    const editorState = (e: any) => {
      console.log(e);
    }

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
