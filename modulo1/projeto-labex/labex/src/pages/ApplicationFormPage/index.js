import React from "react";
import { TitleText } from "../../components/TitleTextComponent";
import styled from "styled-components"
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

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
  return (
    <Flex>
      <TitleText text={"Inscreva-se em uma viagem"} />
      <SelectTrip as="select">
        <option>valor 1</option>
        <option>valor 2</option>
        <option>valor 3</option>
      </SelectTrip>
      <Input placeholder={"Nome"}/>
      <Input placeholder={"Idade"}/>
      <Input placeholder={"Texto de candidatura"}/>
      <Input placeholder={"Profissão"}/>
      <Input placeholder={"País"}/>
      <WrapperButtons>
        <Button
          text={"Voltar"}
          rota={-1}
        />
        <Button text={"Enviar"} />
      </WrapperButtons>
    </Flex>
  );
}
