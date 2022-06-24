import React from "react";
import styled from "styled-components";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { TitleText } from "../../components/TitleTextComponent";

const WrapperButtons = styled.div`
  margin-top: 2rem;
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

export const CreateTrip = () => {
  return (
    <Flex>
      <TitleText text={"Criar uma viagem"} />
      <Input placeholder={"Nome da viagem"}/>
      <Input placeholder={"Planeta da viagem"}/>
      <Input placeholder={"Data da viagem"}/>
      <Input placeholder={"Descrição da viagem"}/>
      <Input placeholder={"Duração da viagem"}/>
      <WrapperButtons>
        <Button
          text={"Voltar"}
          rota={-1}
        />
        <Button text={"Criar viagem"}/>
      </WrapperButtons>
    </Flex>
  );
}
