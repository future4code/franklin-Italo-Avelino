import styled from 'styled-components';
import React, {useState} from 'react';
import InputText from '../InputText/InputText';
import Button from '../Button/Button';

const Tela = styled.div`
    display: flex;
    justify-content: center;
`

const Chat = styled.div`
    width: 600px;
    height: 100vh;
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    justify-content: end;
`

const Messages = styled.div`
    padding: 20px
`

function BodyChat() {
    const [listMessage, setListMessage] = useState([{}]);

    const sendMessage = () =>{
        const newMessage = {
            name: inputNameValue,
            content: inputContentValue
        }

        setListMessage([...listMessage, newMessage])
    }

    const [inputNameValue, setInputNameValue] = useState("")
    const [inputContentValue, setInputContentValue] = useState("")

    const inputNameOnChange = (event) => {
        setInputNameValue(event.target.value)
    }

    const inputContentOnChange = (event) => {
        setInputContentValue(event.target.value)
    }

    const displayMessage = listMessage.map((message) => {
        if(message.name !== undefined)
            return <p><b>{message.name}</b>: {message.content}</p>;
    })

    return (
        <Tela>
            <Chat>
                <Messages>
                    {displayMessage}
                </Messages>
                <div>
                    <InputText
                        value={inputNameValue}
                        onchange={inputNameOnChange}
                        placeholder="Usuário"
                    />
                    <InputText
                        value={inputContentValue}
                        onchange={inputContentOnChange}
                        placeholder="Mensagem"
                    />
                    <Button
                        onclick={sendMessage}
                        message="Enviar"
                    />
                </div>
            </Chat>
        </Tela>
    );
}

export default BodyChat;