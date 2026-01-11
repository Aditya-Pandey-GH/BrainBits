import Editor from "@monaco-editor/react";

export default function CodeEditor({ code, setCode }) {
  return (
    <Editor
      height="60vh"
      language="javascript"
      theme="vs-dark"
      value={code}
      onChange={setCode}
    />
  );
}
