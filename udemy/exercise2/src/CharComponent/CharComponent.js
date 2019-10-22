import React from 'react';

import './CharComponent.css';


const charComponent = (props) => {
   
    return (
        <div className="CharComponent" >
            {props.character}
        </div>
    )

    


}

export default charComponent;