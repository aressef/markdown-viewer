import React from "react";

// JS imports
import Editor from "./Editor";
import Preview from "./Preview";

// CSS Imports
import "./App.css";
import "./Editor.css";
import "./Preview.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      input: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }

  render() {
    return (
      <div className="App">
        <Editor input={this.state.input} handleChange={this.handleChange} />
        <Preview input={this.state.input} />
      </div>
    );
  }
}

export default App;
