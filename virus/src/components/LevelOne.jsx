import React, { Fragment } from "react";
import "../styles/levelOne.css";
import Footer from './Footer'
import adelante from '../img/BotonDerecha.png';
import atras from '../img/BotonIzquierd.png';
import LevelOneC1 from './LevelOne-C1'
import ProgressBar from 'react-bootstrap/ProgressBar';
import covid from '../img/covid.png'
import corona from '../img/corona.png'
import { Modal } from 'react-bootstrap';
import '../styles/progressbar.css';
import logoGAV from '../img/GAV_logo.png';

const LevelOne = () => {
  const [show, setShow] = React.useState(false);
  const [user, setUser] = React.useState('')
  
  const handleClose = () => setShow(false);

  const handleInputChange = (event) => { 
      event.preventDefault()
      setUser(event.target.value)
  }
console.log('nombre',user)
  const now = 25;

  return (
    <Fragment> 
      <div className="d-flex backgroundimg">
        <div className="section-mod1-general">    
          <div className="prog-bar-content d-flex pl-4 flex-wrap">
            <div className="processBar">
              <div >
              <img src={covid} width="50px" alt=""/>
              </div>
              <ProgressBar>
                <ProgressBar animated  striped variant="success" now={now} key={1} />
                <ProgressBar variant="info" now={75} key={2} />
              </ProgressBar>  
              <div>
              <img src={corona} width="50px" alt=""/>
              </div>
          </div>
            <div> <img src={logoGAV} className="logoGame" alt="..." /></div>
          </div>
          <div className="container text-center mt-4 mb-4">
            <div className="p-4 whitebox">
              <LevelOneC1 name={user}/>
            </div>
          </div>
          <div className="containernextButton">
            <div>
            <a href="/"><img src={atras} alt="" className="btnNext" /></a>
            </div>
            <div>
            <a href="/levelOne-1"><img src={adelante} alt="" className="btnNext"/></a>
            </div>
          </div>   
      </div>        
    </div>
    
       
      <Footer />
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton className="modalName">
          <Modal.Title>Holiwis</Modal.Title>
        </Modal.Header >
        <Modal.Body className="modalName">Ingresa tu nombre: 
        <form onSubmit={handleInputChange}>
        <input type="text" placeholder="Nombre" className="form-control" onChange={ e => setUser(e.target.value) } value={user}></input>
        </form>
        </Modal.Body>
        <Modal.Footer className="modalName">
          <button variant="primary" onChange={handleInputChange} onClick={handleClose}>
            Guardar
          </button>
        </Modal.Footer>
      </Modal>
   </Fragment>  
  );
};

export default LevelOne;


