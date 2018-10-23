import React from "react";
import marked from "marked";

class Preview extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate() {
    this.refs.preview.innerHTML = marked(this.props.input);
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
