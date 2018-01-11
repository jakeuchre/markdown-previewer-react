import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import FormControl from 'react-bootstrap/lib/FormControl';
const marked = require('marked');


class App extends Component {

  state = {

    markdown: 'Heading\n=======\n\nSub-heading\n-----------\n \n### Another deeper heading\n \nParagraphs are separated\nby a blank line.\n\nLeave 2 spaces at the end of a line to do a  \nline break\n\nText attributes *italic*, **bold**, \n`monospace`, ~~strikethrough~~ .\n\nShopping list:\n\n  * apples\n  * oranges\n  * pears\n\nNumbered list:\n\n  1. apples\n  2. oranges\n  3. pears\n\nThe rain---not the reign---in\nSpain.\n\n *[Herman Fassett](https://freecodecamp.com/hermanfassett)*'

  }

    updateMarkdown = function(markdown) {
          this.setState({markdown});
    }

  render() {

    let {markdown} = this.state;

    return (
      <div className="App container">
        <div>
          <FormGroup controlId="formControlsTextarea">
            <ControlLabel><h1>Markdown Input</h1></ControlLabel>
            <FormControl componentClass="textarea" placeholder="Enter Markdown" value={markdown} onChange={(event)=>this.updateMarkdown(event.target.value)}></FormControl>
          </FormGroup>
        </div>
        <div>
          <h1>Markdown Result</h1>
          <div dangerouslySetInnerHTML = {{__html: marked(markdown)}}>
          </div>
        
        </div>
      </div>
    );
  }
}

export default App;
