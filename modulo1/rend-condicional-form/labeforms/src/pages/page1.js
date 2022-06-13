import React from "react";
import InputWithLabel from "../components/InputWithLabel";
import TitlePage from "../components/TitlePage";
import SelectWithLabel from "../components/SelectWithLabel";
import Button from "../components/Button";

const Page1 = () => {
    return(
        <div>
            <TitlePage title="ETAPA 1 - DADOS GERAIS"/>
            <InputWithLabel question="1. Qual o seu nome?"/>
            <InputWithLabel question="2. Qual sua idade?"/>
            <InputWithLabel question="3. Qual seu email?"/>
            <SelectWithLabel
                question="4. Qual a sua escolaridade?"
                value1="Ensino médio incompleto"
                value2="Ensino médio completo"
                value3="Ensino superior incompleto"
                value4="Ensino superior completo"
            />
            <Button message="Proxima etapa"/>
        </div>
    )
}

export default Page1;