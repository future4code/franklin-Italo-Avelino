import React from "react";
import styled from "styled-components"

const WrapperButton = styled.button`
    color: grey;
    background-color: white;
    border: 1px solid black;
    width: 10rem;
    height: 4rem;
    font-size: 1.2rem;
    cursor: pointer;
`

export const Button = (props) => {
  return (
    <WrapperButton onClick={props.onClick}>{props.text}</WrapperButton>
  );
}
