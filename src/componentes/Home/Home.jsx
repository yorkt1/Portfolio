import React, { useEffect } from 'react';
import './Home.css'; // Supondo que o CSS seja colocado em um arquivo separado.

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
      <section>
        <div className="title">
          <span>Guilherme Oliveira</span>
          <span>
            Desenvolvedor de sistemas
            <a target="_blank" href="#">Web Developer</a>
          </span>
        </div>

        <ul className="social-icons hiddenSocial">
          <li>
            <a href="#">
              <i className="fab fa-facebook-f social-icon"></i>    
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fab fa-twitter social-icon"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fab fa-linkedin-in social-icon"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fab fa-google-plus-g social-icon"></i>
            </a>
          </li>
        </ul>

        {/* Botão para baixar o currículo */}
        <a href="/path/to/curriculo.pdf" download className="download-btn">
          Baixar Currículo
        </a>
      </section>
    </div>
  );
};

export default Home;
