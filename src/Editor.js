import React from "react";

class Editor extends React.Component {
  render() {
    return (
      <div className="editor-div">
        <h2>Editor</h2>
        <textarea
          id="editor"
          onChange={this.props.handleChange}
          value={this.props.input}
        />
      </div>
    );
  }
}

export default Editor;
