import React from "react";
// import marked from "marked";

class Preview extends React.Component {
  componentDidUpdate(prevProps) {
    const myMarked = require("marked");
    // set breaks to true so carriage returns are rendered as <br> (line breaks)
    myMarked.setOptions({
      breaks: true
    });

    if (this.props.output !== prevProps.output) {
      this.refs.preview.innerHTML = myMarked(this.props.output);
    }
  }

  render() {
    return (
      <div>
        <h2>Preview</h2>
        <div className="preview-output-div" id="preview" ref="preview" />
      </div>
    );
  }
}

export default Preview;
