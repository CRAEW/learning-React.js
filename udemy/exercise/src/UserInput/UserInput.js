import React from 'react';

const userInput = (props) => {
    const userInputStyle = {
        borderRadius: "5px",
        width: "200px",
        background: "#eee",
        boxShadow: "1px 3px 10px 0 lightgray",
        padding: "5px",
        color: 'gray',
        textAlign: 'center',
        marginTop: '50px',
        marginBottom: '50px',
        borderStyle:'none',
        border:'none',
        border: '1px solid lightgray'
    };

    return <input 
                type='text' 
                style={userInputStyle}
                onChange={props.changed} 
                value={props.currentName}
            />;
};

export default userInput;