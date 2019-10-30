import React from 'react';

//HOC
// const withClass = (props) => (
//     <div className={props.classes}>{props.children}</div>
// );

// function that returns a function (that is a functional component)
const withClass = (WrappedComponent, className) => {
    return props => (
        <div className={className}>
            <WrappedComponent {...props}/>
        </div>
    );
};


export default withClass;