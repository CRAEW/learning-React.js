import React, {Component} from "react";
// import Radium from 'radium'; // use radium styling tools
// import "./Person.css"; // import a regular stylesheet
import styles from "./Person.modules.css"; //Import css modules stylesheet as styles

class Person  extends Component {
	render () {
		console.log('[Person.js] rendering...');
			return (
				<div className={styles.Person}>
					<p onClick={this.props.click}>I"m {this.props.name} and I am {this.props.age} years old!</p>
					<p>{this.props.children}</p>
					<input type="text" onChange={this.props.changed} value={this.props.value}/>
				</div>
			);
			}
	
};

// export default Radium(person);
export default Person;