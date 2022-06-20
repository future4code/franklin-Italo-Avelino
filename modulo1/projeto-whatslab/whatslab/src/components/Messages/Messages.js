import Rect, {useState} from 'react';

const Messages = () => {
    const [listMessage, setListMessage] = useState([{}]);

    const addMessage = () =>{
        const newMessage = {
            name: inputNameValue,
            message: inputMessageValue
        }

        setListMessage([...listMessage, newMessage])
    }

    return(
        
    );
}