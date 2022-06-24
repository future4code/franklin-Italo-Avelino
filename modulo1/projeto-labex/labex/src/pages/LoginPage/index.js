import React from "react";
import styled from "styled-components";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { TitleText } from "../../components/TitleTextComponent";

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
  justify-content: center;
`

export const LoginPage = () => {
  return (
    <Flex>
      <TitleText text={"Login"}/>
      <Input placeholder={"E-mail"}/>
      <Input placeholder={"Senha"}/>
      <WrapperButtons>
        <Button text={"Voltar"} />
        <Button text={"Inscrever-se"} />
      </WrapperButtons>
    </Flex>
  );
}
