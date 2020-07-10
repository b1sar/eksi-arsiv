import React from 'react';
import Entry from './Entry';
import './App.css';

import Form from './Form';


const fileReader =new FileReader();

class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      objelist : null,
      nickim     : "",
      isFileLoaded : false
    }
  }

  render() {
    let objects = [];
    let form = "";

    if(this.state.isFileLoaded) {
      this.state.objelist.map((value) => {
        objects.push(<Entry objex={value} nick={this.state.nickim}/>);
      })
    } else {
      form = <Form onChange={(e)=>{this.handleFileChosen(e.target.files[0])}} isFileLoaded={this.state.isFileLoaded}/>
    }


    return (
      <div className="App">
        <header className="App-header">
          {form}
          <div className="topic">
          {objects.map((e)=> {
            return e;
          })}
          </div>
        </header>
      </div>
    );
  }

  //This syntax ensures `this` is bound within handleClick.
  //handleFileRead is a field holding an arrow function, not a class function
  handleFileRead = (event) => {
    //get content from the reader
    const content = fileReader.result;
    console.log(content);

    //extract xml and set to state
    var options = {
      ignoreAttributes : false,
    }
    let parser = require('fast-xml-parser');
    let haytObj = parser.parse(content, options);

    let newObjects = Object.values(haytObj['backup']['entries']['entry']);
    let newNick    = haytObj['backup']['@_nick'];
    this.setState({
      objelist: newObjects,
      nickim  : newNick,
      isFileLoaded : true
    });
  }

  handleFileChosen(file) {
    fileReader.onloadend = this.handleFileRead;
    fileReader.readAsText(file);
  }  
}

export default App;
