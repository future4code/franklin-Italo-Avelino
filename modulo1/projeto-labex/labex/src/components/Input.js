import React from "react";
import styled from "styled-components"

const WrapperInput = styled.input`
    color: grey;
    background-color: white;
    border: 1px solid black;
    width: 40rem;
    height: 3rem;
    font-size: 1.2rem;
    padding-left: 1rem;
    margin-top: 1.5em;
`

export const Input = (props) => {
  return (
    <WrapperInput value={props.value} onChange={props.onchange} placeholder={props.placeholder}></WrapperInput>
  );
}
