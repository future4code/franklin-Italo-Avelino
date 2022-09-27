import React from "react";
import styled from "styled-components"
import {useNavigate} from "react-router-dom"

const WrapperButton = styled.button`
    color: grey;
    background-color: white;
    border: 1px solid black;
    width: 10rem;
    height: 4rem;
    font-size: 1.2rem;
    cursor: pointer;
`

export const ButtonNavegation = (props) => {
  const navigate = useNavigate()

  return (
    <WrapperButton
      onClick={() => navigate(props.rota)}>{props.text}
    </WrapperButton>
  );
}
