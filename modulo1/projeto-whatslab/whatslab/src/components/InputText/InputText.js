import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
    width: 265px;
`

function InputText(props) {
    return(
        <Input value={props.value} onChange={props.onchange} placeholder={props.placeholder} style={props.width}/>
    );
};

export default InputText;