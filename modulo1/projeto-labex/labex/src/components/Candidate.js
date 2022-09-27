import React from "react";
import styled from "styled-components"

const WrapperCard = styled.div`
    border: 1px solid black;
    width: 34rem;
    padding: 1rem;
    margin-top: 2rem;
`
const TextBold = styled.b`
    font-weight: bold;
`

const TripInfo = styled.p`
    color: grey;
`

export const Candidate = (props) => {
  return (
    <WrapperCard>
        <TripInfo>
            <TextBold>Nome:</TextBold> {props.name}
        </TripInfo>
        <TripInfo>
            <TextBold>Idade:</TextBold> {props.age}
        </TripInfo>
        <TripInfo>
            <TextBold>Profissão:</TextBold> {props.profession}
        </TripInfo>
        <TripInfo>
            <TextBold>Texto de candidatura:</TextBold> {props.applicationText} dias
        </TripInfo>
        <TripInfo>
            <TextBold>País:</TextBold> {props.country}
        </TripInfo>
    </WrapperCard>
  );
}
