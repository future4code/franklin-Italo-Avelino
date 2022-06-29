import React from "react";
import { ButtonNavegation } from "../../components/ButtonNavegation";
import styled from "styled-components"
import { TitleText } from "../../components/TitleTextComponent";
import { TripCard } from "../../components/TripCard";
import { useRequestData } from "../../hooks/useRequestData";

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
    const [data, isLoading, error] = useRequestData("https://us-central1-labenu-apis.cloudfunctions.net/labeX/italo-avelino-franklin/trips")

    const tripsList = data && data.trips.map((trip) => {
      return(
        <TripCard
          key={trip.id}
          name={trip.name} 
          description={trip.description}
          planet={trip.planet}
          duration={trip.durationInDays}
          date={trip.date}
        />
      )
    })

  return (
    <Flex>
      <WrapperButtons>
        <ButtonNavegation
          text={"Voltar"}
          rota={-1}
        />
        <ButtonNavegation
          text={"Inscrever-se"}
          rota={"formulario"}
        />
      </WrapperButtons>
      <TitleText text={"Viagens disponiveis"}/>
      {isLoading && <TitleText text={"Carregando..."} />}
      {!isLoading && tripsList}
    </Flex>
  );
}
