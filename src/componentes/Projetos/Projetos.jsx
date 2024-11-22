import React, { useEffect } from 'react';
import './Projetos.css'

function Projetos(){
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
    

return(

<div className="grid--container hiddenCards">


<div className="grid--cell">
  <article className="grid--item">
    
    <div className="preview--container">
      <a href="https://farmacia-atividade.vercel.app/#" className="preview-imageProjetoUm--container">
        <div className="preview-imageProjetoUm"></div>
      </a>
     
    </div>
    
    <div className="content--container hiddenCards">
      <div className="title--container">
        <a className="title--text" href="https://farmacia-atividade.vercel.app/#">Projeto 1</a>
      </div>
      
      <div className="tags--overflow-container" >
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
        
        <a href="https://farmacia-atividade.vercel.app/#" className="follow button"><i className="fa-solid fa-circle-info"></i></a>
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
        <a className="title--text" href="#">Projeto 2</a>
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

)

}


export default Projetos