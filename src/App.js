import React from "react";

// JS imports
import Editor from "./Editor";
import Preview from "./Preview";

// CSS Imports
import "./Editor.css";
import "./Preview.css";

const App = () => {
  return (
    <div className="App">
      <Editor />
      <Preview />
    </div>
  );
};

export default App;
