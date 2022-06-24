import React from "react";
import styled from "styled-components";
import { Button } from "../../components/Button";
import { TitleText } from "../../components/TitleTextComponent";

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 100px);
`

const WrapperButtons = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: space-between;
  width: 23rem;
`

export const HomePage = () => {
  return (
    <Flex>
      <TitleText text={"Via Labenu"} />
      <WrapperButtons>
        <Button
          text={"Ver viagens"}
          rota={"lista"}
        />
        <Button
          text={"Aréa admin"}
          rota={"administrador"}
        />
      </WrapperButtons>
    </Flex>
  );
}
