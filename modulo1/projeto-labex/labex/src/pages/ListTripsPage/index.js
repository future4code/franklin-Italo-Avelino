import React from "react";
import { Button } from "../../components/Button";
import styled from "styled-components"
import { TitleText } from "../../components/TitleTextComponent";
import { TripCard } from "../../components/TripCard";

const WrapperButtons = styled.div`
  margin-top: 4rem;
  display: flex;
  justify-content: space-between;
  width: 23rem;
`
const Flex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: calc(100vh - 100px);
`

export const ListTripsPage = () => {
  return (
    <Flex>
      <WrapperButtons>
        <Button text={"Voltar"} />
        <Button text={"Inscrever-se"} />
      </WrapperButtons>
      <TitleText text={"Viagens disponiveis"}/>
      <TripCard
        name={"Multi luau em Jupiter"} 
        description={"Noite mágica, com vista para as 69 luas de Jupiter"}
        planet={"Jupiter"}
        duration={540}
        date={"21/12/20"}
      />
    </Flex>
  );
}
