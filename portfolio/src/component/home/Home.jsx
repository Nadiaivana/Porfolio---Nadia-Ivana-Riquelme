import React from 'react';
import './home.css';
import './particles.scss';
import logo from '../../img/logo.svg';

const Home = () => {
  return (
  <>
  {
    <div className= "body">
      <div className= "particle"><img src={logo} alt=""/></div>
      <div className= "particle"><img src={logo} alt=""/></div>
      <div className= "particle"><img src={logo} alt=""/></div>
      <div className= "particle"><img src={logo} alt=""/></div>
      <div className= "particle"><img src={logo} alt=""/></div>
      <div className= "particle"><img src={logo} alt=""/></div>
      <div className= "particle"><img src={logo} alt=""/></div>
      <div className= "particle"><img src={logo} alt=""/></div>
      <div className= "particle"><img src={logo} alt=""/></div>
      <div className= "particle"><img src={logo} alt=""/></div>
      <div className= "particle"><img src={logo} alt=""/></div>
      <div className= "particle"><img src={logo} alt=""/></div>
      <div className= "particle"><img src={logo} alt=""/></div>
      <div className= "particle"><img src={logo} alt=""/></div>
      <div className= "particle"><img src={logo} alt=""/></div>
      <div className= "particle"><img src={logo} alt=""/></div>
      <div className= "particle"><img src={logo} alt=""/></div>
      <div className= "particle"><img src={logo} alt=""/></div>
      <div className= "particle"><img src={logo} alt=""/></div>
      <div className= "particle"><img src={logo} alt=""/></div>
      <div className= "particle"><img src={logo} alt=""/></div>
      <div className= "particle"><img src={logo} alt=""/></div>
      <div className= "particle"><img src={logo} alt=""/></div>
      <div className= "particle"><img src={logo} alt=""/></div>
      <div className= "particle"><img src={logo} alt=""/></div>
      <div className= "particle"><img src={logo} alt=""/></div>
      <div className= "particle"><img src={logo} alt=""/></div>
      <div className= "particle"><img src={logo} alt=""/></div>
      <div className= "particle"><img src={logo} alt=""/></div>
    <div className= "home">  

      <div className= "home-content">
        <label className= "name">NADIA IVANA RIQUELME</label>
        <label className= "title">Programadora Full Stack</label>
      </div>
      <div className= "home-content"> 
        <p>
           Bienvenidos a mi portfolio.<br></br><br></br>
           Soy una desarrolladora web full stack, con ganas 
           de asumir nuevos desafios que potencien mis habilidades.
        </p>
        </div> 
    </div>
    <div className= "triangle">
    <svg height="100" width="100">
    <polygon points="0,5 100,5 50,50"
    stroke="rgb(224, 85, 213)" stroke-width="1" fill="rgb(224, 85, 213)"/> 
  </svg> 
  </div>
  </div>
  }
  </>
  );
};
export default Home;
