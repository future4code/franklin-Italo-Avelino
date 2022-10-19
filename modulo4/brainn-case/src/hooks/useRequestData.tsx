import axios from "axios";
import { useEffect, useState } from "react";

type Loterias = {
    id: number,
    nome: string
};

type LoteriasResponse = {
    data: Loterias[],
    isLoading: boolean,
    error: string,
};

export const useRequestData = (path: string) => {
    const [data, setData] = useState<object[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>();
    const url = `https://brainn-api-loterias.herokuapp.com/api/v1${path}`
    
    useEffect(() => {
        setIsLoading(true);
        axios.get(url)
        .then((res) => {
            setIsLoading(false)
            setData(res.data)
        })
        .catch((err) => {
            setIsLoading(false)
            setError(err)
        })
    }, [url])

    return { data, isLoading, error }
}