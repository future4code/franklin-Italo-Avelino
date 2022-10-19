import { useRequestData } from '../../hooks/useRequestData'
import React from 'react';
import * as S from './style'

export type Loterias = {
    nome: string,
    id: number
}

export const Home = () => {
    const { data: loterias, isLoading: loteriasIsLoading } = useRequestData("/loterias");
    const { data: concursos } = useRequestData("/loterias-concursos");

    console.log("lotera", loterias)
    console.log(concursos);

    const [selectLoteria, setSelectLoteria] = React.useState<string>("mega-sena")
    const onChangeSelectLoteria = (event: any) => setSelectLoteria(event.target.value)

    const listaLoterias =  loterias?.map((loteria: any) =>
        <option
            key={loteria.id}
        >
            {loteria.nome}
        </option>
    )

    return (
        <S.Page>
            <S.Sidebar>
                <S.Select value={selectLoteria} onChange={onChangeSelectLoteria}>
                    { !loteriasIsLoading && listaLoterias}
                </S.Select>
                <S.Logo>
                    <S.ImageLogo src="./loteria.png" alt="logo da loteria" />
                    <S.TextLogo>{selectLoteria}</S.TextLogo>
                </S.Logo>
                <S.Contest>
                    <S.ContestText>
                        concurso
                    </S.ContestText>
                    <S.ContestNumber>
                        4531 - 07/04/2020
                    </S.ContestNumber>
                </S.Contest>
            </S.Sidebar>
            <S.Result>
                <S.ResultNumbers>
                    <S.Number>
                        06
                    </S.Number>
                    <S.Number>
                        06
                    </S.Number>
                    <S.Number>
                        06
                    </S.Number>
                    <S.Number>
                        06
                    </S.Number>
                    <S.Number>
                        06
                    </S.Number>
                    <S.Number>
                        06
                    </S.Number>
                    <S.Number>
                        06
                    </S.Number>
                    <S.Number>
                        06
                    </S.Number>
                </S.ResultNumbers>
                <S.ResultText>
                    Este sorteio é meramente ilustrativo e não possui nenhuma ligação com a CAIXA.
                </S.ResultText>
            </S.Result>
        </S.Page>
    )
}

