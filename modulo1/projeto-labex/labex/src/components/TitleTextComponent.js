import React from "react";
import styled from "styled-components"

const Text = styled.h4`
  font-size: 3rem;
  font-weight: 400;
  color: grey;
  margin: 2rem 0;
`
const CenteredDiv = styled.div`
  display: flex;
  justify-content: center;
`

export const TitleText = (props) => {
  return (
    <CenteredDiv>
      <Text>{props.text}</Text>
    </CenteredDiv>
  );
}
