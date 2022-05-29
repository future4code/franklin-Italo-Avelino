import styled from 'styled-components';
import React from 'react';

const BigCardContainer = styled.div`
display: flex;
align-items: center;
border: 1px solid black;
padding: 20px 10px;
margin-bottom: 10px;
height: 200px;
`

const BigCardImg = styled.img`
width: 70px;
margin-right: 10px;
border-radius: 50%;
`

const BigCardNome = styled.h4`
margin-bottom: 15px;
`

const BigCardConteudo = styled.div`
display: flex;
flex-direction: column;
justify-items: flex-start;
`

function CardGrande(props) {
    return (
        <BigCardContainer>
            <BigCardImg src={ props.imagem } />
            <BigCardConteudo>
                <BigCardNome>{ props.nome }</BigCardNome>
                <p>{ props.descricao }</p>
            </BigCardConteudo>
        </BigCardContainer>
    )
}

export default CardGrande;