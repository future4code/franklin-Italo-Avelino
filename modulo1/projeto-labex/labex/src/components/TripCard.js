import React from "react";
import styled from "styled-components"

const WrapperCard = styled.div`
    border: 1px solid black;
    width: 36rem;
    padding: 1rem;
    margin-top: 2rem;
`
const TextBold = styled.b`
    font-weight: bold;
`

const TripInfo = styled.p`
    color: grey;
`

export const TripCard = (props) => {
  return (
    <WrapperCard key={props.id}>
        <TripInfo>
            <TextBold>Nome:</TextBold> {props.name}
        </TripInfo>
        <TripInfo>
            <TextBold>Descrição:</TextBold> {props.description}
        </TripInfo>
        <TripInfo>
            <TextBold>Planeta:</TextBold> {props.planet}
        </TripInfo>
        <TripInfo>
            <TextBold>Duração:</TextBold> {props.duration} dias
        </TripInfo>
        <TripInfo>
            <TextBold>Data:</TextBold> {props.date}
        </TripInfo>
        {props.candidates}
    </WrapperCard>
  );
}
