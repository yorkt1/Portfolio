import React, { useEffect,useState } from 'react';

import './Projetos.css'

function Projetos() {

  const [popupVisible, setPopupVisible] = useState(false);

  
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

  const togglePopup = () => {
    setPopupVisible(!popupVisible);  // Alterna a visibilidade do popup
  };

  return (
    <div className="geralProjetos hiddenCards">
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

                <button className="follow button" onClick={togglePopup}>
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
              <p>Detalhes adicionais sobre o projeto...</p>
              <button className="close-popup" onClick={togglePopup}>Fechar</button>
            </div>
          </div>
        )}
        <div className="grid--cell">
          <article className="grid--item">

            <div className="preview--container ">
              <a href="#" className="preview-image--container">
                <div className="preview-imageDois efeito"></div>
              </a>


            </div>

            <div className="content--container hiddenCards">
              <div className="title--container">
                <a className="title--text" href="#">Projeto - Flower Experience</a>
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

                <button className="follow button" onClick={togglePopup}>
                  <i className="fa-solid fa-circle-info"></i>
                </button>

              </div>
            </div>

          </article>
        </div>


        <div className="grid--cell">
          <article className="grid--item">

            <div className="preview--container">
              <a href="#" className="preview-image--container">
                <div className="preview-image"></div>
              </a>


            </div>

            <div className="content--container hiddenCards">
              <div className="title--container">
                <a className="title--text" href="#">Projeto 3</a>
              </div>

              <div className="tags--overflow-container">
                <div className="conteiner-slide">
                  <div className="paginas-slide">

                    <span>React</span>
                    <span>HTML</span>
                    <span>CSS</span>
                    <span>PEROCA</span>
                    <span>SHOTA</span>
                    <span>React</span>
                    <span>HTML</span>
                    <span>CSS</span>
                    <span>PEROCA</span>
                    <span>SHOTA</span>
                  </div>
                </div>
              </div>

              <div className="hover--options">
                <a href="#" className="Repositório button">
                  <span className="icon-title"><i className="fad fa-books"></i> Repositório</span>
                  <span className="new-tab"><i className="fas fa-arrow-circle-right"></i></span>
                </a>

                <a href="#" className="Deploy
         button">
                  <span className="icon-title"><i className="far fa-image"></i> Deploy
                  </span>
                  <span className="new-tab"><i className="fas fa-arrow-circle-right"></i></span>
                </a>

                <a href="#" className="follow button"><i className="fa-solid fa-circle-info"></i></a>
              </div>
            </div>

          </article>
        </div>


        <div className="grid--cell">
          <article className="grid--item">

            <div className="preview--container">
              <a href="#" className="preview-image--container">
                <div className="preview-image"></div>
              </a>


            </div>

            <div className="content--container hiddenCards">
              <div className="title--container">
                <a className="title--text" href="#">Projeto 4</a>
              </div>

              <div className="tags--overflow-container">
                <div className="conteiner-slide">
                  <div className="paginas-slide">

                    <span>React</span>
                    <span>HTML</span>
                    <span>CSS</span>
                    <span>PEROCA</span>
                    <span>SHOTA</span>
                    <span>React</span>
                    <span>HTML</span>
                    <span>CSS</span>
                    <span>PEROCA</span>
                    <span>SHOTA</span>
                  </div>
                </div>
              </div>

              <div className="hover--options">
                <a href="#" className="Repositório button">
                  <span className="icon-title"><i className="fad fa-books"></i> Repositório</span>
                  <span className="new-tab"><i className="fas fa-arrow-circle-right"></i></span>
                </a>

                <a href="#" className="Deploy
         button">
                  <span className="icon-title"><i className="far fa-image"></i> Deploy
                  </span>
                  <span className="new-tab"><i className="fas fa-arrow-circle-right"></i></span>
                </a>

                <a href="#" className="follow button"><i className="fa-solid fa-circle-info"></i></a>
              </div>
            </div>

          </article>
        </div>


      </div>

    </div>
  )

}


export default Projetos