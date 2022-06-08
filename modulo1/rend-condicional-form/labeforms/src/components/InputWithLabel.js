import React from "react";
import styled from "styled-components"

const Wrapper = styled.div`
    display: block;
    text-align: center;
`
const InputText = styled.input`
    margin: 20px 0;
`

const InputWithLabel = (props) => {
    return(
        <Wrapper>
            <label>{props.question}</label>
            <br/>
            <InputText/>
        </Wrapper>
    )
}

export default InputWithLabel;