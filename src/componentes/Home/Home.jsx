import React, { useState } from 'react';
import './Home.css'; // Supondo que o CSS seja colocado em um arquivo separado.

const Home = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div>
      <nav>
        <ul>
          <li 
            className={activeIndex === 0 ? 'active' : ''}
            onClick={() => handleClick(0)}
          >
            <a href="Salfia.co">Home</a>
          </li>
          <li 
            className={activeIndex === 1 ? 'active' : ''}
            onClick={() => handleClick(1)}
          >
            About me
          </li>
          <li 
            className={activeIndex === 2 ? 'active' : ''}
            onClick={() => handleClick(2)}
          >
            Portfolio
          </li>
          <li 
            className={activeIndex === 3 ? 'active' : ''}
            onClick={() => handleClick(3)}
          >
            Blog
          </li>
          <li 
            className={activeIndex === 4 ? 'active' : ''}
            onClick={() => handleClick(4)}
          >
            Contact me
          </li>
          <li className="slide"></li>
        </ul>
      </nav>

      <section>
        <div className="title">
          <span>Jack Salfia</span>
          <span>
            Graphic Designer and 
            <a target="_blank" href="salfia.com">Web Developer</a>
          </span>
        </div>
      </section>
    </div>
  );
};

export default Home;
