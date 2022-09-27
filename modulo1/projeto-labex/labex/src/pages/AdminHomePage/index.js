import React from "react";
import styled from "styled-components";
import { ButtonNavegation } from "../../components/ButtonNavegation";
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

export const AdminHomePage = () => {
  return (
    <Flex>
      <TitleText text={"Aréa do administrador"} />
      <WrapperButtons>
        <ButtonNavegation
          text={"Criar uma viagem"}
          rota={"criar"}
        />
        <ButtonNavegation
          text={"Detalhes de uma viagem"}
          rota={"detalhes"}
        />
      </WrapperButtons>
    </Flex>
  );
}
