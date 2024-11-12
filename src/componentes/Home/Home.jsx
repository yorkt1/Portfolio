import React, { useState } from 'react';
import './Home.css'; // Supondo que o CSS seja colocado em um arquivo separado.

const Home = () => {


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
      </section>
    </div>
  );
};

export default Home;
