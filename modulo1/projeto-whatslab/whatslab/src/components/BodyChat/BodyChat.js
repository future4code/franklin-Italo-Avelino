import styled from 'styled-components';
import React from 'react';
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

`

const InputsChat = styled.div`

`

function BodyChat() {
    return (
        <Tela>
            <Chat>
                <Messages/>
                <InputsChat>
                    <InputText
                        placeholder="Usuário"
                    />
                    <InputText
                        placeholder="Mensagem"
                    />
                    <Button
                        message="Enviar"
                    />
                </InputsChat>
            </Chat>
        </Tela>
    );
}

export default BodyChat;