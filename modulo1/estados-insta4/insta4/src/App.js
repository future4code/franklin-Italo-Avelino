import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
function App() {
return(
  <MainContainer>
    <Post
      nomeUsuario={'paulinha'}
      fotoUsuario={'https://picsum.photos/50/50'}
      fotoPost={'https://picsum.photos/200/150'}
    />
    <Post
      nomeUsuario={'pedro'}
      fotoUsuario={'https://picsum.photos/50/60'}
      fotoPost={'https://picsum.photos/200/160'}
    />
    <Post
      nomeUsuario={'carlos'}
      fotoUsuario={'https://picsum.photos/50/70'}
      fotoPost={'https://picsum.photos/200/170'}
    />
  </MainContainer>
)

}


export default App;
