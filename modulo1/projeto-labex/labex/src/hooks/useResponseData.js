import axios from "axios"
import { useEffect, useState } from "react"

export const useResponseData = (url, body, sucsessMessage, errorMessage) => {

    axios.post(url, body)
    .then(() => {
        alert(sucsessMessage)
    })
    .catch(() => {
        alert(errorMessage)
    })
}

