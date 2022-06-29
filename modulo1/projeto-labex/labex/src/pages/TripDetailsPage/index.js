import React from "react";
import styled from "styled-components";
import { ButtonNavegation } from "../../components/ButtonNavegation";
import { Candidate } from "../../components/Candidate";
import { TitleText } from "../../components/TitleTextComponent";
import { TripCard } from "../../components/TripCard";

const WrapperButtons = styled.div`
margin-top: 4rem;
display: flex;
justify-content: center;
`

const Flex = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`

const SelectTrip = styled.select`
    color: grey;
    background-color: white;
    border: 1px solid black;
    width: 40rem;
    height: 3rem;
    font-size: 1.2rem;
    cursor: pointer;
    padding-left: 1rem;
`

export const TripDatailsPage = () => {
  return (
    <div>
      <Flex>
      <WrapperButtons>
        <ButtonNavegation
          text={"Voltar"}
          rota={-1}
        />
      </WrapperButtons>
      <TitleText text={"Detalhes de uma viagem"}/>
      <SelectTrip as="select">
        <option>valor 1</option>
        <option>valor 2</option>
        <option>valor 3</option>
      </SelectTrip>
      <TripCard
        name={"Multi luau em Jupiter"} 
        description={"Noite mágica, com vista para as 69 luas de Jupiter"}
        planet={"Jupiter"}
        duration={540}
        date={"21/12/20"}
        candidates={
          <div>
            <Candidate name={"Teste"}/>
            <Candidate name={"Teste2"}/>
            <Candidate name={"Teste3"}/>
            <Candidate name={"Teste4"}/>
          </div>
        }
      />
      </Flex>
    </div>
  );
}
