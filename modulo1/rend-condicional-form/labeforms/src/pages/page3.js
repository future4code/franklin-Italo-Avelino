import React from "react";
import InputWithLabel from "../components/InputWithLabel";
import TitlePage from "../components/TitlePage";
import SelectWithLabel from "../components/SelectWithLabel";
import Button from "../components/Button";

const Page3 = () => {
    return(
        <div>
            <TitlePage title="ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO"/>
            <InputWithLabel question="5. Por que você não terminou um curso de graduação?"/>
            <SelectWithLabel
                question="6. Você fez algum curso complementar?"
                value1="Nenhum"
                value2="Curso tecnico"
                value3="Curso de ingles"
            />
        </div>
    )
}

export default Page3;