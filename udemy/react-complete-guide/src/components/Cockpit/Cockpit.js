import React, {useEffect} from 'react';

import styles from './Cockpit.modules.css';

const cockpit = (props) => {

  useEffect(() => {
    console.log('[Cockpit.js] useEffect');
    // Http request...
  setTimeout(() => {
      alert('Saved date to cloud!');
    }, 1000);

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
    

    if (props.persons.length <= 2) {
      assignedClasses.push(styles.red);
    }
    if (props.persons.length <= 1) {
      assignedClasses.push(styles.bold);
    }

    return (
        <div className ={styles.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')} >This is really working!</p>
            <button
                className={btnClass}
                onClick={props.clicked}>Toggle persons</button>
        </div>
    );
};

export default cockpit;