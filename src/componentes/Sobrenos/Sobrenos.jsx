import React from 'react';
import './Sobrenos.css';
import imgprofile from './imgprofile.jpg';  // Ajuste o caminho para a pasta correta

function Sobrenos() {
  return (
    <div className="conteiner-geral">
      <div className="imgProfilePerfil">
        <img className="Imgprofile" src={imgprofile} alt="Profile" />
      </div>
      <div className="sobremim">
        <div className="DivText"><h1>Sobre mim</h1></div>
        <div className="DivText">
          Sou um programador apaixonado por tecnologia, inovação e empreendedorismo, com experiência prática em desenvolvimento de sistemas e criação de produtos digitais. Nos últimos anos, venho expandindo meu conhecimento e habilidades, trabalhando em projetos que envolvem tanto o desenvolvimento web quanto mobile. Minha jornada começou com o aprendizado profundo de tecnologias como React, Node.js, React Native, MySQL e Spring Boot, que se tornaram minha especialidade.
        </div>
        <div className="DivText">
          Além de minha paixão por tecnologia e desenvolvimento, sou também um grande amante de games, especialmente de League of Legends. Uma das minhas inspirações para o design do meu portfólio foi na paleta de cores do Yasuo, e mais especificamente a sua "Florecer Espiritual". A paleta de cores do Yasuo, com seus tons profundos e equilibrados, influenciou diretamente a escolha das cores do meu site, trazendo uma estética que mistura tranquilidade e poder — algo que acredito refletir na forma como trabalho: focado, criativo e sempre em busca do meu melhor.
        </div>
      </div>
    </div>
  );
}

export default Sobrenos;
