import React, { useEffect } from 'react';
import './Sobrenos.css';
import imgprofile from './imgprofile.jpg';  // Ajuste o caminho para a pasta correta

function Sobrenos() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show');
        }
      });
    });

    const hiddenElements = document.querySelectorAll('.hidden ');
    hiddenElements.forEach((el) => observer.observe(el));
    

  }, []);

  return (
    <div id='sobre' className="conteiner-geral">
      <div className="imgProfilePerfil">
        <img className="Imgprofile hidden" src={imgprofile} alt="Profile" />
      </div>
      <div className="sobremim">
        <div className="DivText hidden"><h1>Sobre mim</h1></div>
        <div className="DivText hidden">
        Sou um programador apaixonado por tecnologia, inovação e empreendedorismo, com experiência prática em desenvolvimento de sistemas e criação de produtos digitais. Nos últimos anos, venho expandindo meu conhecimento e habilidades, trabalhando em projetos que envolvem tanto o desenvolvimento web quanto mobile. Minha jornada começou com o aprendizado profundo de tecnologias como React, Node.js, React Native, MySQL e Spring Boot, que se tornaram minha especialidade.
        </div>
        <div className="DivText hidden">
        Tenho uma abordagem focada na entrega de soluções eficazes e inovadoras, sempre buscando otimizar processos e melhorar a experiência do usuário. Além disso, tenho experiência na implementação de boas práticas de desenvolvimento, como testes automatizados, integração contínua e design de arquitetura escalável, sempre visando a eficiência e a qualidade no desenvolvimento de sistemas.
        </div>
      </div>
    </div>
  );
}

export default Sobrenos;
