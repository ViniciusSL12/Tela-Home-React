import React from 'react';
import './HomePage.css';

const App = () => {
  return (
    <div className="container">
      <header className="header">
        <div className="logo">
          <img 
            src="https://yata-apix-a72da87a-7d6e-4d6a-b431-451af7303de8.s3-object.locaweb.com.br/a7a3506ea16c44d69698506c7901f10f.png" // Substitua pela imagem do logo
            alt="Logo"
          />
        </div>
        <nav className="navLinks">
          <a href="#sobre" className="navItem">Sobre nós</a>
          <a href="#empresas" className="navItem">Empresas</a>
          <a href="#candidatos" className="navItem">Candidatos</a>
        </nav>
      </header>

      <main className="mainContent">
        <div className="leftSide">
          <div className="imageContainer">
            <img
              src="https://th.bing.com/th?id=OIP.xUKJndFsl340vS4AJmMaEQAAAA&w=306&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2" 
              alt="imagem de negocios"
              className="image"
            />
          </div>
        </div>
        <div className="rightSide">
          <p className="quote">
            "O prazer no trabalho aperfeiçoa a obra."
          </p>
          <span className="author">Aristóteles</span>
          <div className="searchBox">
            <input
              type="text"
              placeholder="Digite uma palavra chave"
              className="input"
            />
            <button className="searchButton">
              🔍
            </button>
          </div>
        </div>
      </main>

      <footer className="footer">
        <p>&copy; 2024 Meu App. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

export default App;
