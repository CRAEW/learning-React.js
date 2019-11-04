import React, {Component, Fragment} from "react";
import PropTypes from 'prop-types';

// import Radium from 'radium'; // use radium styling tools
// import "./Person.css"; // import a regular stylesheet
import Aux from "../../../hoc/Aux";
import withClass from "../../../hoc/withClass";
import classes from "./Person.modules.css"; //Import css modules stylesheet as styles
import AuthContext from '../../../context/auth-context';

class Person  extends Component {
	constructor(props) {
		super(props);
		this.inputelementRef = React.createRef();
	}

	componentDidMount() {
		// this.inputElement.focus();
		this.inputelementRef.current.focus();
	}

	render () {
		console.log('[Person.js] rendering...');
			return (
				// <React.Fragment> does the same as the <Aux> component
				<Aux>
					<AuthContext.Consumer>
						{(context) => context.authenticated ? <p>Authenticated!</p> : <p>Please log in</p>}
					</AuthContext.Consumer>
					
					<p key="i1" onClick={this.props.click}>I"m {this.props.name} and I am {this.props.age} years old!</p>
					<p key="i2" >{this.props.children}</p>
					<input 
						key="i3"
						//ref={(inputEl) => {this.inputElement = inputEl}}
						ref={this.inputelementRef}
						type="text" 
						onChange={this.props.changed} 
						value={this.props.name}
					/>
				</Aux>
			);
	}
	
};

Person.propTypes = {
	click: PropTypes.func,
	name: PropTypes.string,
	age: PropTypes.number,
	changes: PropTypes.func
};

// export default Radium(person);
export default withClass(Person, classes.Person);