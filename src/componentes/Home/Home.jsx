import React, { useEffect } from 'react';
import './Home.css'; // Supondo que o CSS seja colocado em um arquivo separado.
import CV from '../Home/Guilherme-cv.pdf'

const Home = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('showSocial'); // Adiciona a classe 'show' quando visível
        } else {
          entry.target.classList.remove('showSocial'); // Remove a classe 'show' quando não visível
        }
      });
    });

    const hiddenElements = document.querySelectorAll('.hiddenSocial');
    hiddenElements.forEach((el) => observer.observe(el));
  }, []);

  return (
    <div>
      <section id='home'>
        <div className="title  ">
          <span>Guilherme Oliveira</span>
          <span>
            Desenvolvedor de sistemas
            <a target="_blank" href="#">Web Developer</a>
          </span>

        </div>
        <ul className="social-icons hiddenSocial">
          <li>
            <a href="https://www.linkedin.com/in/guilherme-rocha-oliveira-3942481a2/">
              <i className="fab fa-linkedin-in social-icon"></i>
            </a>
          </li>
          <li>
            <a href="https://github.com/yorkt1">
              <i className="fa-brands fa-github social-icon"></i>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/guiyorkt/">
              <i className="fa-brands fa-instagram social-icon"></i>
            </a>
          </li>
        

          <a href={CV} download>
            <button className="botao-transparente"><i className="fa-solid fa-download"></i>  Baixar Currículo</button>
          </a>
        </ul>


      </section>
    </div>
  );
};

export default Home;
