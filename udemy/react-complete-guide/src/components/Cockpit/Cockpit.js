import React, {useEffect, useRef, useContext} from 'react';

import styles from './Cockpit.modules.css';
import AuthContext from '../../context/auth-context';

const cockpit = (props) => {
  const toggleBtnRef = useRef(null);
  const authContext = useContext(AuthContext);

  console.log(authContext.authenticated);
  

  // useEffect gets executed after render()
  useEffect(() => {
    console.log('[Cockpit.js] useEffect');
    // Http request...
  // setTimeout(() => {
  //     alert('Saved date to cloud!');
  //   }, 1000);

    toggleBtnRef.current.click();

    return () => {
      console.log('[Cockpit.js] cleanup work in useEffect')
    }; // runs BEFORE maine useEffect function, but AFTER first render cycle
  }, []); 
  // empty array = code will only run when component is mounted and rendered for the first time and when it is unmounted (return)
  // you can also enter a specific component to watch for changes

  useEffect(() => {
    console.log('[Cockpit.js] 2nd useEffect');
    return () => {
      console.log('[Cockpit.js] cleanup work in useEffect')
    };
  }); // this runs every time, becaue no 2nd param was given

  // useEffect()


    const assignedClasses = [];
    let btnClass = '';

    if (props.showPersons) {
        btnClass = styles.Red;
    }
    

    if (props.personsLength <= 2) {
      assignedClasses.push(styles.red);
    }
    if (props.personsLength <= 1) {
      assignedClasses.push(styles.bold);
    }

    return (
        <div className ={styles.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')} >This is really working!</p>
            <button
              ref={toggleBtnRef}
              className={btnClass}
              onClick={props.clicked}>Toggle persons
            </button>
            <button onClick={authContext.login}>Log in</button>
            
        </div>
    );
};

export default React.memo(cockpit);