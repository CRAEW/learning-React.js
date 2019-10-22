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


  render() {
    const textArray = this.state.text.split('');
    const textLength = textArray.length;

    const charList = textArray.map((char, index) => {
      return <CharComponent 
        character={char}
        key={index}
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
        {/* <p>Lenght of text: {textLength}</p> */}
        <ValidationComponent textLength={textLength} />
        {charList}



        <div className="Assignment">
          <ol>
            <li className="done">Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
            <li className="done">Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
            <li className="done">Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
            <li className="done">Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
            <li className="done">Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
            <li>When you click a CharComponent, it should be removed from the entered text.</li>
          </ol>
        </div>
      </div>
    );
  }
}

export default App;
