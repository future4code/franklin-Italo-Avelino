import React from 'react';

function Button(props) {
    return(
        <button onClick={props.onclick}>{props.message}</button>
    );
}

export default Button;