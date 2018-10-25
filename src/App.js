import React from "react";

// JS imports
import Editor from "./Editor";
import Preview from "./Preview";

// CSS Imports
import "./App.scss";
import "./Editor.scss";
import "./Preview.scss";

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
## Below is some cool stuff you can do!
      
To write inline code you type between two backticks, like this: \`<div></div>\`

If you want to display more than one line of code you can use a type between two sets of three backticks, like this:
\`\`\`
// example of a code block:
    
function (firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also style you text in a few cool ways. For **bold** text, type between two pairs of asterisks. If a word has had a _bit too much to drink_, you can make it italic by typing between underscores. If your text **_gets loud when it drinks_**, you can combine them. ~~Your text can even try to forget those drunken embarrassing moments by typing between two pairs of tilde.~~

## But wait, there's [more](https://media1.tenor.com/images/cbf642d6a9033e5953037624dd7882f0/tenor.gif?itemid=9592017)!

> What's greater than block quotes? Apparently nothing. To make your own just add a greater-than symbol in front of your text.
    
1. First things first
1. You can make 
1. ordered lists
1. by typing them each line with
1. the number one and a period at the beginning.


- For those that run in the same circles
- as that styled text we talked about earlier
- you can make unordered lists
- by starting each line with dash
* or asterisk
  - did I mention you can indent them?
    
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
      <div className="app-comp">
        <Editor
          className="editor-comp"
          input={this.state.input}
          handleChange={this.handleChange}
        />
        <Preview className="preview-comp" output={this.state.input} />
      </div>
    );
  }
}

export default App;
