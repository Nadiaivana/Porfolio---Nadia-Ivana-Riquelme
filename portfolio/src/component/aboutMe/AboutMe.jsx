import React from 'react';
import './aboutMe.css';
import perfilNadia from '../../img/perfilNadia.jpeg';

const AboutMe = () => {
  
  return (
    <div className="AboutMe">
      <div className="titleAboutMe">
        <h1>About Me</h1>
      </div>  
      <div className="contentAboutMe">
        <div className="pAboutMe">
          <p>Apasionada por el desarrollo Web, resido en argentina y estoy en busqueda de nuevos desafios. Continuamente aprendiendo y adquiriendo nuevas habilidades en función a las actuales y futuras demandas y tendencias tecnológicas en el campo del diseño y desarrollo de aplicaciones web en general. Apasionado con el trabajo que realizo, ofreciendo en cada proyecto total atención, dedicación, personalización y calidad al cliente.</p>  
        </div>
        <div className="imgAboutMe">
          <img className="perfilNadia" src={perfilNadia} alt=""/>
        </div>
      </div>  
    </div>
  );
};
export default AboutMe;
