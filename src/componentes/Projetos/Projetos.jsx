import React, { useEffect,useState } from 'react';

import './Projetos.css'

function Projetos() {

  const [popupVisible, setPopupVisible] = useState(false);

  const [popupDescription, setPopupDescription] = useState('');

  const descricoes = {
    1: 'Este projeto consiste no desenvolvimento de uma landing page simples e funcional para uma farmácia, utilizando React. O objetivo é criar uma página leve, rápida e fácil de navegar, com foco em promover produtos e facilitar o contato com os clientes.',
    2: 'A Flower Experience é um projeto desenvolvido em Spring Boot, com o objetivo de oferecer um catálogo online de plantas. A aplicação permite aos usuários explorar uma ampla variedade de plantas, com informações detalhadas sobre cada uma, como cuidados, tipos e características específicas.',
    3: 'Walphe é uma plataforma desenvolvida para exibir e gerenciar catálogos de produtos online. O objetivo é fornecer uma solução simples e eficiente para empresas e consumidores visualizarem, pesquisarem e explorarem uma variedade de produtos, com foco na experiência do usuário e fácil navegação.',
    4: 'O primeiro protótipo do Flower Experience foi desenvolvido utilizando HTML e CSS para a estrutura e design visual, com funcionalidades de CRUD (Criar, Ler, Atualizar, Deletar) implementadas de forma simples. O protótipo permite aos usuários visualizar e interagir com um catálogo básico de plantas',
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('showCards'); // Adiciona a classe 'show' quando visível
        } else {
          entry.target.classList.remove('showCards'); // Remove a classe 'show' quando não visível
        }
      });
    });

    const hiddenElements = document.querySelectorAll('.hiddenCards');
    hiddenElements.forEach((el) => observer.observe(el));
  }, []);

  const togglePopup = (id) => {
    setPopupDescription(descricoes[id]); // Atribui a descrição do projeto ao estado
    setPopupVisible(!popupVisible); // Alterna a visibilidade do popup
  };

  return (
    <div className="geralProjetos hiddenCards projetos">
      <div className="tituProjetos">

        <h1>Meus <strong>Projetos</strong></h1>
      </div>
      <div className="grid--container hiddenCards">


        <div className="grid--cell">
          <article className="grid--item">

            <div className="preview--container">
              <a href="https://farmacia-atividade.vercel.app/#" className="preview-imageProjetoUm--container">
                <div className="preview-imageProjetoUm efeito"></div>
              </a>

            </div>

            <div className="content--container hiddenCards">
              <div className="title--container">
                <a className="title--text" href="https://farmacia-atividade.vercel.app/#">landing page - Farmácia</a>
              </div>

              <div className="tags--overflow-container" >
                <div className="conteiner-slide">
                  <div className="paginas-slide">

                    <span>React</span>
                    <span>HTML</span>
                    <span>CSS</span>
                    <span>Responsividade</span>
                    <span>React</span>
                    <span>HTML</span>
                    <span>CSS</span>
                    <span>Responsividade</span>
                    <span>React</span>
                    <span>HTML</span>
                  </div>
                </div>
              </div>

              <div className="hover--options">
                <a href="https://github.com/yorkt1/Farmacia-Atividade" className="Repositório button">
                  <span className="icon-title"><i className="fad fa-books"></i> Repositório</span>
                  <span className="new-tab"><i className="fas fa-arrow-circle-right"></i></span>
                </a>

                <a href="https://farmacia-atividade.vercel.app/#" className="Deploy
         button">
                  <span className="icon-title"><i className="far fa-image"></i> Deploy
                  </span>
                  <span className="new-tab"><i className="fas fa-arrow-circle-right"></i></span>
                </a>

                <button className="follow button" onClick={() => togglePopup(1)}>
                  <i className="fa-solid fa-circle-info"></i>
                </button>

              </div>
            </div>

          </article>
        </div>
  {/* Popup - Modal */}
  {popupVisible && (
        <div className="popup-overlay">
          <div className="popup">
            <h2>Informações do Projeto</h2>
            <p>{popupDescription}</p>
            <button className="close-popup" onClick={() => setPopupVisible(false)}>Fechar</button>
          </div>
        </div>
        )}
        <div className="grid--cell">
          <article className="grid--item">

            <div className="preview--container ">
              <a href="https://magoss27.github.io/DeployFlowerExperience/" className="preview-image--container">
                <div className="preview-imageDois efeito"></div>
              </a>


            </div>

            <div className="content--container hiddenCards">
              <div className="title--container">
                <a className="title--text" href="https://magoss27.github.io/DeployFlowerExperience/">Projeto - Flower Experience</a>
              </div>

              <div className="tags--overflow-container">
                <div className="conteiner-slide">
                  <div className="paginas-slide">

                    <span>React</span>
                    <span>HTML</span>
                    <span>CSS</span>
                    <span>Banco De Dados</span>
                    <span>Java</span>
                    <span>Spring Boot</span>
                    <span>My SQL</span>
                    <span>React</span>
                    <span>HTML</span>
                    <span>CSS</span>
                  </div>
                </div>
              </div>

              <div className="hover--options">
                <a href="https://github.com/yorkt1/FlowerExperienceProjectSA" className="Repositório button">
                  <span className="icon-title"><i className="fad fa-books"></i> Repositório</span>
                  <span className="new-tab"><i className="fas fa-arrow-circle-right"></i></span>
                </a>

                <a href="https://magoss27.github.io/DeployFlowerExperience/" className="Deploy
         button">
                  <span className="icon-title"><i className="far fa-image"></i> Deploy
                  </span>
                  <span className="new-tab"><i className="fas fa-arrow-circle-right"></i></span>
                </a>

                <button className="follow button" onClick={() => togglePopup(2)}>
                  <i className="fa-solid fa-circle-info"></i>
                </button>

              </div>
            </div>

          </article>
        </div>


        <div className="grid--cell">
          <article className="grid--item">

            <div className="preview--container">
              <a href="https://multi-norte.netlify.app" className="preview-image--container">
                <div className="preview-imagetres efeito"></div>
              </a>


            </div>

            <div className="content--container hiddenCards">
              <div className="title--container">
                <a className="title--text" href="https://multi-norte.netlify.app">Catalogo - Walphe</a>
              </div>

              <div className="tags--overflow-container">
                <div className="conteiner-slide">
                  <div className="paginas-slide">

                    <span>Produtos</span>
                    <span>HTML</span>
                    <span>CSS</span>
                    <span>Api</span>
                    <span>Produtos</span>
                    <span>HTML</span>
                    <span>CSS</span>
                    <span>Api</span>
                    <span>Produtos</span>
                    <span>HTML</span>
                  </div>
                </div>
              </div>

              <div className="hover--options">
                <a href="https://github.com/yorkt1/Loja-Test-Walphe" className="Repositório button">
                  <span className="icon-title"><i className="fad fa-books"></i> Repositório</span>
                  <span className="new-tab"><i className="fas fa-arrow-circle-right"></i></span>
                </a>

                <a href="https://multi-norte.netlify.app" className="Deploy
         button">
                  <span className="icon-title"><i className="far fa-image"></i> Deploy
                  </span>
                  <span className="new-tab"><i className="fas fa-arrow-circle-right"></i></span>
                </a>

                <button className="follow button" onClick={() => togglePopup(3)}>
                  <i className="fa-solid fa-circle-info"></i>
                </button>
              </div>
            </div>

          </article>
        </div>


        <div className="grid--cell">
          <article className="grid--item">

            <div className="preview--container">
              <a href="https://flowerecommercesa.netlify.app/" className="preview-image--container">
                <div className="preview-imagequatro efeito"></div>
              </a>


            </div>

            <div className="content--container hiddenCards">
              <div className="title--container">
                <a className="title--text" href="https://flowerecommercesa.netlify.app">E-commerce - Flower Experience</a>
              </div>

              <div className="tags--overflow-container">
                <div className="conteiner-slide">
                  <div className="paginas-slide">

                    <span>CRUD</span>
                    <span>HTML</span>
                    <span>CSS</span>
                    <span>Figma</span>
                    <span>Projeto</span>
                    <span>Crud</span>
                    <span>LocalStorage</span>
                    <span>Crud</span>
                    <span>HTML</span>
                    <span>CSS</span>
                  </div>
                </div>
              </div>

              <div className="hover--options">
                <a href="https://github.com/yorkt1/FlowerExperience-E-Commerce" className="Repositório button">
                  <span className="icon-title"><i className="fad fa-books"></i> Repositório</span>
                  <span className="new-tab"><i className="fas fa-arrow-circle-right"></i></span>
                </a>

                <a href="https://flowerecommercesa.netlify.app" className="Deploy
         button">
                  <span className="icon-title"><i className="far fa-image"></i> Deploy
                  </span>
                  <span className="new-tab"><i className="fas fa-arrow-circle-right"></i></span>
                </a>

                <button className="follow button" onClick={() => togglePopup(4)}>
                  <i className="fa-solid fa-circle-info"></i>
                </button>
              </div>
            </div>

          </article>
        </div>


      </div>

    </div>
  )

}


export default Projetos