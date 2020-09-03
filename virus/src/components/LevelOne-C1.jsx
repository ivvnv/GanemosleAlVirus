import React from "react";
import "../styles/levelOne.css";
import personajehootie from '../img/GAV_Personaje21.png';


const levelOneContenido1 = (props) => {
  return (
    <div className="row">
              <div className="col-md-4">
                <img
                  src={personajehootie}
                  className="img-fluid hootieC1"
                  alt="hootie"
                />
              </div>
              <div className="col-md-6 w-3 mt-5 contTextC1">
                <h1 className="contenido-titulo">Bienvenid@ al Módulo 1</h1>
                <p className="contenido-texto">Hola, soy Hootie y junto a Puma Espuma y el Escuadrón Prevención conocerás sobre el COVID-19 y cómo juntos podemos cuidarnos de él.</p>
                <p className="contenido-texto">Pon mucha atención a cada una de las siguientes etapas para quitarle la corona al COVID y así obtener una gran sorpresa al final.</p>
                <p className="contenido-texto"><h3>{props.name}</h3> ¡Vamos a ganar!</p>
              </div>
            </div>
  )
}

export default levelOneContenido1
