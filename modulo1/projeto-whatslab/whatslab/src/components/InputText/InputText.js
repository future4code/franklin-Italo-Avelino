import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
    width: 265px;
`

function InputText(props) {
    return(
        <Input type='text' placeholder={props.placeholder}/>
    );
};

export default InputText;