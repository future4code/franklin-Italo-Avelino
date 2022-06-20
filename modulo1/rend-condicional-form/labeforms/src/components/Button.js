import React from "react";
import styled from "styled-components"

const ButtonCenter = styled.div`
    text-align: center
`

const Button = (props) => {
    return(
        <ButtonCenter>
            <button>{props.message}</button>
        </ButtonCenter>
    )
}

export default Button;