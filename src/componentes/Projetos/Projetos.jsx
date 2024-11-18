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
      <a href="#" className="preview-image--container">
        <div className="preview-image"></div>
      </a>
     
    </div>
    
    <div className="content--container hiddenCards">
      <div className="title--container">
        <a className="title--text" href="#">Projeto 1</a>
      </div>
      
      <div className="tags--overflow-container">
        <ul className="tags--container">
          <li><a href="#" className="tag">Delect a Distinctio</a></li>
          <li><a href="#" className="tag">Facere</a></li>
          <li><a href="#" className="tag">Morbi Leo</a></li>
          <li><a href="#" className="tag">Eris Culpa</a></li>
          <li><a href="#" className="tag">Facere</a></li>
          <li><a href="#" className="tag">auisus</a></li>
          <li><a href="#" className="tag ellipsis"><i className="far fa-ellipsis-h"></i></a></li>
        </ul>
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
        <a className="title--text" href="#">Projeto 2</a>
      </div>
      
      <div className="tags--overflow-container">
        <ul className="tags--container">
          <li><a href="#" className="tag">Volutpat</a></li>
          <li><a href="#" className="tag">Scelerisque</a></li>
          <li><a href="#" className="tag">Turpis Galo</a></li>
          <li><a href="#" className="tag">Quisus</a></li>
          <li><a href="#" className="tag">At Tempo</a></li>
          <li><a href="#" className="tag">Distincto a Tet</a></li>
          <li><a href="#" className="tag ellipsis"><i className="far fa-ellipsis-h"></i></a></li>
        </ul>
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
        <ul className="tags--container">
          <li><a href="#" className="tag">Gravidas</a></li>
          <li><a href="#" className="tag">Dipisci Triste</a></li>
          <li><a href="#" className="tag">Odio Aenean</a></li>
          <li><a href="#" className="tag">Urna</a></li>
          <li><a href="#" className="tag">Lista e Fortna</a></li>
          <li><a href="#" className="tag">Vuisi</a></li>
          <li><a href="#" className="tag ellipsis"><i className="far fa-ellipsis-h"></i></a></li>
        </ul>
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
        <ul className="tags--container">
          <li><a href="#" className="tag">Elementum</a></li>
          <li><a href="#" className="tag">Praesent Semper</a></li>
          <li><a href="#" className="tag">Gravida</a></li>
          <li><a href="#" className="tag">Libero</a></li>
          <li><a href="#" className="tag">Hesus</a></li>
          <li><a href="#" className="tag ellipsis"><i className="fa-solid fa-circle-info"></i></a></li>
        </ul>
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