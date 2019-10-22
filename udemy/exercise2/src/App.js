import React, { Component } from 'react';
import './App.css';

import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';

class App extends Component {
  state = {
    text: ''
  }

  changeListenerHandler = (event) => {
    this.setState({text: event.target.value });
  }

  deleteCharHandler = (index) => {
    const textArray = this.state.text.split('');
    textArray.splice(index, 1);
    const newText = textArray.join('');
    this.setState({text: newText});
  }


  render() {
    const charArray = this.state.text.split('');
    const textLength = charArray.length;
    const charList = charArray.map((char, index) => {
      return <CharComponent 
        character={char}
        key={index}
        clicked={() => this.deleteCharHandler(index)}
        />
    });


    return (
      <div className="App">
        <input 
          type='text'
          onChange={this.changeListenerHandler}
          value={this.state.text}
        />
        <p>{this.state.text}</p>
        <ValidationComponent textLength={textLength} />
        {charList}



        <div className="Assignment">
          <ol>
            <li className="done">Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
            <li className="done">Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
            <li className="done">Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
            <li className="done">Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
            <li className="done">Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
            <li className="done">When you click a CharComponent, it should be removed from the entered text.</li>
          </ol>
        </div>
      </div>
    );
  }
}

export default App;
