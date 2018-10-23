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

  componentDidMount() {
    const initialMarkdown = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:
      
Heres some code, \`<div></div>\`, between 2 backticks.
    
\`\`\`
// example of a code block:
    
function (firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`
      
You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.
    
There's also [links](https://www.freecodecamp.com), and
> Block Quotes!
   
- And of course there are lists.
  - Some are bulleted.
    - With different indentation levels.
      - That look like this.
    
    
1. And there are numbererd lists too.
1. Use just 1s if you want! 
1. But the list goes on...
  - Even if you use dashes or asterisks.
    * And last but not least, let's not forget embedded images:
    
![React Logo w/ Text](https://goo.gl/Umyytc)
`;

    this.setState({
      input: initialMarkdown
    });
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
        <Preview output={this.state.input} />
      </div>
    );
  }
}

export default App;
