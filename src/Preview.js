import React from "react";
import marked from "marked";

class Preview extends React.Component {
  componentDidUpdate(prevProps) {
    // set breaks to true so carriage returns are rendered as <br> (line breaks)
    marked.setOptions({
      breaks: true
    });

    if (this.props.output !== prevProps.output) {
      this.refs.preview.innerHTML = marked(this.props.output);
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
