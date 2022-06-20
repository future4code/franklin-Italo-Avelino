import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [inputName, setInputName] = useState("")
  const [inputEmail, setInputEmail] = useState("")
  const [users, setUsers] = useState([])
  const [pages, setPages] = useState(true)

  const onChangeName = (event) => {
    setInputName(event.target.value)
  }

  const onChangeEmail = (event) => {
    setInputEmail(event.target.value)
  }

  const createUser = () => {
    const body = {
      name: inputName,
      email: inputEmail
    }
    
    axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users', body, {
      headers: {
        Authorization: "italo-avelino-franklin"
      }
    }).then(() => {
      alert("Usuario criado com sucesso")
    }).catch(() => {
      alert("Erro ao criar um usuario")
    })
  }
  
  const getAllUsers = () => {
    axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users', {
      headers: {
        Authorization: "italo-avelino-franklin"
      }
    }).then((response) => {
      setUsers(response.data)
    }).catch((error) => {
      console.log(error)
    })
  }

  const deleteUser = (id) => {
    axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`, {
      headers: {
        Authorization: "italo-avelino-franklin"
      }
    }).then(() => {
      alert("Usuario removido com sucesso")
    }).catch(() => {
      alert("Erro ao remover um usuario")
    })
  }

  useEffect(getAllUsers, [users])

  const displayUsers = users.map((user) => {
    return (
      <div>
        <li key={user.id}>{user.name} <button onClick={() => deleteUser(user.id)}>X</button></li>
      </div>
    )
  })

  let screen;

  if(pages) {
    screen = 
      <div>
        <input value={inputName} onChange={onChangeName} placeholder="Nome"></input>
        <input value={inputEmail} onChange={onChangeEmail} placeholder="E-mail"></input>
        <button onClick={createUser}>Criar usuario</button>
      </div>
  } else {
    screen = 
      <div>
        {displayUsers}
      </div>
  }

  const changeScreen = () => {
    setPages(!pages)
  }
  
  return (
    <div className="App">
      <button onClick={changeScreen}>Trocar de tela</button>
      {screen}
    </div>
  );
}
export default App;