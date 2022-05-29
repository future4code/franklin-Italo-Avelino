import React from 'react';
import styled from 'styled-components';

const SmallCardContainer = styled.div`
display: flex;
align-items: center;
border: 1px solid black;
padding: 20px 10px;
margin-bottom: 10px;
`

const SmallCardContainerImg = styled.img`
width: 30px;
margin-right: 10px;
border-radius: 50%;
`

function CardPequeno(props) {
    return (
        <SmallCardContainer>
            <SmallCardContainerImg src={props.imagem} />
            <h4>{props.campo}</h4>
            <p>: {props.dado}</p>
        </SmallCardContainer>
    )
}

export default CardPequeno;