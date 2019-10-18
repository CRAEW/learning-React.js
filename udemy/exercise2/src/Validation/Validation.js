import React from "react";

const validation = (props) => {
    let textLength = null;

    if(props.textLength < 6) {
        textLength = (
            <div>
                <p>Text too short.</p>
            </div>
            
        );
    } else {
        textLength = (
            <div>
                <p>Text long enough.</p>
            </div>
        )
    }

    return (
        <div className="Validation">
            <p>The length of the text is: {props.textLength}</p>
            <p>{textLength}</p>
        </div>
    );
}


export default validation;