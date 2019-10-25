import React from "react";
// import Radium from 'radium'; // use radium styling tools
// import "./Person.css"; // import a regular stylesheet
import styles from "./Person.modules.css"; //Import css modules stylesheet as styles

const person = (props) => {
	return (

		<div className={styles.Person}>
			<p onClick={props.click}>I"m {props.name} and I am {props.age} years old!</p>
			<p>{props.children}</p>
			<input type="text" onChange={props.changed} value={props.value}/>
		</div>
	);
};

// export default Radium(person);
export default person;