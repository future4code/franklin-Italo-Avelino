import React from "react";
import styled from "styled-components"

const Wrapper = styled.div`
    display: block;
    text-align: center;
`
const Select = styled.select`
    margin: 20px 0;
`

const SelectWithLabel = (props) => {
    return(
        <Wrapper>
            <label>{props.question}</label>
            <br/>
            <Select>
                <option value={props.value1}>{props.value1}</option>
                <option value={props.value2}>{props.value2}</option>
                <option value={props.value3}>{props.value3}</option>
                <option value={props.value4}>{props.value4}</option>
            </Select> 
        </Wrapper>
    )
}

export default SelectWithLabel;