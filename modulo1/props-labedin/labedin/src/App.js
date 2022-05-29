import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://ca.slack-edge.com/TLAVDH7C2-U03F5GGUHLG-8d47b709258f-512" 
          nome="Ítalo Fernandes Avelino" 
          descricao="Oi, eu sou o Ítalo Avelino. Sou desenvolvedor no Grupo Boticario. Adoro jogar, assistir filmes e series e praticar musculação."
        />
        
        <ImagemButton 
          imagem="https://i.pinimg.com/originals/09/0a/ea/090aea0be7fa8331086ce7023350ef0a.png" 
          texto="Ver mais"
        />

        <CardPequeno
          imagem="https://media.istockphoto.com/vectors/email-icon-on-black-background-black-flat-style-vector-illustration-vector-id1161114191?k=20&m=1161114191&s=170667a&w=0&h=3Cw90FkEG763h-HuQGlVHoCLpdQuukSFZVaCqWd5Rb8="
          campo="Email"
          dado="italo@gmail.com"
        />

        <CardPequeno
          imagem="https://i.pinimg.com/736x/a7/94/40/a79440a6b5663f44370231c55bffb637.jpg"
          campo="Endereço"
          dado="Rua Brasil"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://agazetaempregos.com.br/images/Grupo_Boticario_2.jpg" 
          nome="Grupo Boticario" 
          descricao="Analista e desenvolvedor de sistemas" 
        />
        
        <CardGrande 
          imagem="https://yt3.ggpht.com/ytc/AKedOLSlVhuG2FJyC5Ykzq-Qa4xH_JHxG7wKuDJTD8ug=s900-c-k-c0x00ffffff-no-rj" 
          nome="ArcelorMittal" 
          descricao="Trainee de manutenção mecanica industrial" 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
