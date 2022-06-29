import React, { useState } from "react";
import { TitleText } from "../../components/TitleTextComponent";
import styled from "styled-components"
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { ButtonNavegation } from "../../components/ButtonNavegation";
import { useRequestData } from "../../hooks/useRequestData";
import { useResponseData } from "../../hooks/useResponseData";

const Select = styled.select`
    color: grey;
    background-color: white;
    border: 1px solid black;
    width: 40rem;
    height: 3rem;
    font-size: 1.2rem;
    cursor: pointer;
    padding-left: 1rem;
`

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
  justify-content: center;
  height: calc(100vh - 100px);
`

export const ApplicationFormPage = () => {
  const [inputName, setInputName] = useState("")
  const [inputAge, setInputAge] = useState("")
  const [inputApplicationText, setInputApplicationText] = useState("")
  const [inputProfession, setInputProfession] = useState("")
  const [inputCountry, setInputCountry] = useState("")
  const [selectTrip, setSelectTrip] = useState("")
  const [tripsData, tripIsLoading, tripError] = useRequestData("https://us-central1-labenu-apis.cloudfunctions.net/labeX/italo-avelino-franklin/trips")

  const tripList = tripsData && tripsData.trips.map((trip) => {
    return <option key={trip.id} value={trip.id}>{trip.name}</option>
  })

  const CreateCandidate = () => {
    const body = {
      name: inputName,
      age: inputAge,
      applicationText: inputApplicationText,
      profession: inputProfession,
      country: inputCountry
    }

    useResponseData(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/italo-avelino-franklin/trips/${selectTrip}/apply`,
    body,
    "Candidato cadastrado com sucesso :)",
    "Erro ao candidatar candidato :(")
  }

  const onChangeInputName = (event) => setInputName(event.target.value)

  const onChangeInputAge = (event) => setInputAge(event.target.value)

  const onChageInputApplicationText = (event) => setInputApplicationText(event.target.value)

  const onChangeInputProfession = (event) => setInputProfession(event.target.value)

  const onChangeInputCountry = (event) => setInputCountry(event.target.value)

  const onChangeSelectTrip = (event) => setSelectTrip(event.target.value)

  return (
    <Flex>
      <TitleText text={"Inscreva-se em uma viagem"} />
      <Select value={selectTrip} onChange={onChangeSelectTrip}>
        {tripIsLoading && <option>Carregando...</option>}
        {!tripIsLoading && tripList}
      </Select>
      <Input placeholder={"Nome"} value={inputName} onchange={onChangeInputName}/>
      <Input placeholder={"Idade"} value ={inputAge} onchange={onChangeInputAge}/>
      <Input placeholder={"Texto de candidatura"} value={inputApplicationText} onchange={onChageInputApplicationText}/>
      <Input placeholder={"Profissão"} value={inputProfession} onchange={onChangeInputProfession}/>
      <Input placeholder={"País"} value={inputCountry} onchange={onChangeInputCountry}/>
      <WrapperButtons>
        <ButtonNavegation
          text={"Voltar"}
          rota={-1}
        />
        <Button
          text={"Enviar"}
          onclick={() => CreateCandidate()}
        />
      </WrapperButtons>
    </Flex>
  );
}
