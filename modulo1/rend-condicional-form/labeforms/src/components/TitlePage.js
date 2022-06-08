import React from "react";
import styled from "styled-components";

const Title = styled.h4`
    font-size: 1.17em;
`

const TitlePage = (props) => {
    return(
        <Title>{props.title}</Title>
    )
}

export default TitlePage;