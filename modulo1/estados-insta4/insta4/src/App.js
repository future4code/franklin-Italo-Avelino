import React, {useState} from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

const Form = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 5px;
  border: 1px solid black;
  margin: 20px 0;
`

const Input = styled.input`
  margin: 5px 0;
`

function App() {

  const [listaDePosts, setListaDePosts] = useState([
    {
      nomeUsuario: 'paulinha',
      fotoUsuario: 'https://picsum.photos/50/50',
      fotoPost: 'https://picsum.photos/200/150'
    },
    {
      nomeUsuario: 'pedro',
      fotoUsuario: 'https://picsum.photos/50/60',
      fotoPost: 'https://picsum.photos/200/160'
    },
    {
      nomeUsuario: 'carlos',
      fotoUsuario: 'https://picsum.photos/50/70',
      fotoPost: 'https://picsum.photos/200/170'
    }
  ])

  const [inputNomeUsuario, setInputNomeUsuario] = useState("")
  const [inputFotoUsuario, setInputFotoUsuario] = useState("")
  const [inputFotoPost, setInputFotoPost] = useState("")

  const adicionarPost = () => {
    const novoPost = {
      nomeUsuario: inputNomeUsuario,
      fotoUsuario: inputFotoUsuario,
      fotoPost: inputFotoPost
    }

    setListaDePosts([novoPost, ...listaDePosts])
  }

  const onChangeInputNomeUsuario = (event) => {
    setInputNomeUsuario(event.target.value)
  }

  const onChangeInputFotoUsuario = (event) => {
    setInputFotoUsuario(event.target.value)
  }

  const onChangeInputFotoPost = (event) => {
    setInputFotoPost(event.target.value)
  }

  const exibirPosts = listaDePosts.map((itemPost) => {
    return (
        <Post
          nomeUsuario={itemPost.nomeUsuario}
          fotoUsuario={itemPost.fotoUsuario}
          fotoPost={itemPost.fotoPost}
        />
    );
  });

return(
  <MainContainer>
    <Form>
      <Input
        value={inputNomeUsuario}
        onChange={onChangeInputNomeUsuario}
        placeholder={"Nome do usuario"}
      />
      <Input
        value={inputFotoUsuario}
        onChange={onChangeInputFotoUsuario}
        placeholder={"Foto do usuario"}
      />
      <Input
        value={inputFotoPost}
        onChange={onChangeInputFotoPost}
        placeholder={"Foto do post"}
      />
      <button onClick={adicionarPost}>Adicionar post</button>
    </Form>
    {exibirPosts}
  </MainContainer>
)}

export default App;
