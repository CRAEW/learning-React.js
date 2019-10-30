import React, {Component} from "react";
// import Radium from 'radium'; // use radium styling tools
// import "./Person.css"; // import a regular stylesheet
import Aux from "../../../hoc/Aux";
import styles from "./Person.modules.css"; //Import css modules stylesheet as styles

class Person  extends Component {
	render () {
		console.log('[Person.js] rendering...');
			return (
				<Aux>
					<p key="i1" onClick={this.props.click}>I"m {this.props.name} and I am {this.props.age} years old!</p>,
					<p key="i2" >{this.props.children}</p>,
					<input 
						key="i3"
						type="text" 
						onChange={this.props.changed} 
						value={this.props.value}/>
				</Aux>
			);
	}
	
};

// export default Radium(person);
export default Person;