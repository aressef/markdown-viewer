import React from "react";
import marked from "marked";

class Preview extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h2>Preview</h2>
        <div className="preview-output-div" id="preview">
          {marked(this.props.input)}
        </div>
      </div>
    );
  }
}

export default Preview;
