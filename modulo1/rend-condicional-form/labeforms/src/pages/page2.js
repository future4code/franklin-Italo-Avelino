import React from "react";
import InputWithLabel from "../components/InputWithLabel";
import TitlePage from "../components/TitlePage";
import SelectWithLabel from "../components/SelectWithLabel";
import Button from "../components/Button";

const Page2 = () => {
    return(
        <div>
            <TitlePage title="ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR"/>
            <InputWithLabel question="5. Qual curso?"/>
            <InputWithLabel question="6. Qual a unidade de ensino?"/>
            <Button message="Proxima etapa"/>
        </div>
    )
}

export default Page2;