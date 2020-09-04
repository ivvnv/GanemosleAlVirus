import React, { Component} from 'react'
import tomask from '../img/tomask.png'
import guantrini from '../img/wantini.png'
import puma from '../img/puma.png'
import jabon from '../img/jabon.png'
import conoce from '../img/conocealep.png'
import '../styles/team.css'
import {MDBBtn, MDBModal, MDBModalBody} from 'mdbreact';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
 
class ModalPage extends Component {
state={
  modal2: false,
  modal3: false,
  modal4: false,
  modal5: false
}

toggle = nr => () => {
  let modalNumber = 'modal' + nr
  this.setState({
    [modalNumber]: !this.state[modalNumber]
  });
}

render() {
  return (
    <div className="sectionTeam" id="team">
        {/* <h1 className="titleTeam">Conoce al Escuadrón Prevención</h1> */}
        <div className="container text-center">
        <img src={conoce} className="img-fluid imgWhat" width="600" alt="...." />
        </div>
        <div className="containerTeam d-flex flex-row justify-content-center align-self-center">
          <div className="d-flex flex-row flex-wrap justify-content-center align-item-center contEscuadron">
            <MDBBtn color="btn-primary-outline" onClick={this.toggle(2)}><img src={tomask} className="team tomask" alt="tomask" width="150" /></MDBBtn>
            <MDBBtn color="btn-primary-outline" onClick={this.toggle(3)}><img src={guantrini} className="team guantrini" alt="guantrini" width="120" /></MDBBtn>
            <MDBBtn color="btn-primary-outline" onClick={this.toggle(4)} /* style={{height: '60vh'}} */ ><img src={puma} className="team puma" alt="puma" width="200"/></MDBBtn>
            <MDBBtn color="btn-primary-outline" onClick={this.toggle(5)}><img src={jabon} className="team jabon" alt="jabon jabier" width="130" /></MDBBtn>   
          </div>
        </div>

        <MDBModal isOpen={this.state.modal2} toggle={this.toggle(2)}>
            <MDBModalBody className="modalHottie" >
            {/* <MDBBtn color="secondary" className="btnModal" onClick={this.toggle(2)}>&times;</MDBBtn> */}
            <span className="btnModal" onClick={this.toggle(2)}>&times;</span>
            <div className="d-flex flex-row contInfo" >
                <div className="imghootie"><img src={tomask} alt="Responsiveimg" width="200"/></div>
                <div className="textarea">
                <h1 className="text-center" style={{fontWeight:'bold'}}>Tomask</h1>
                <p style={{fontWeight:'bold'}}>Personalidad:</p>  
                Gracioso, cercano, amistoso, elocuente. Siempre
                sabe cómo hacer reír y verle el lado positivo a las
                cosas y mantener la calma. Frente a coronavirus,
                busca bajarle la gravedad a la situación y calmar a
                los humanos protegiendo su boca. 
                <br/>
                <p style={{fontWeight:'bold'}}>Frase típica:</p> “Tranquil@s. Todo está bien.”
                </div>
            </div>
            </MDBModalBody >
        </MDBModal >

        <MDBModal isOpen={this.state.modal3} toggle={this.toggle(3)}>
            <MDBModalBody className="modalHottie" >
            {/* <MDBBtn color="secondary" className="btnModal" onClick={this.toggle(2)}>&times;</MDBBtn> */}
            <span className="btnModal" onClick={this.toggle(3)}>&times;</span>
            <div className="d-flex flex-row contInfo" >
                <div className="imghootie"><img src={guantrini} alt="Responsiveimg" className="imgGuantrini" width="200"/></div>
                <div className="textarea">
                <h1 className="text-center" style={{fontWeight:'bold'}}>Guantrini</h1>
                <p style={{fontWeight:'bold'}}>Personalidad:</p>  
                Directa, fuerte y protectora. Es la más temeraria
                del grupo. Se enfrenta directamente al Coronavirus
                sin miedo, ya que sabe que su rol principal es
                proteger la piel de los humanos.
                <br/>
                <p style={{fontWeight:'bold'}}>Frase típica:</p> “No teman, ¡Guantrini ya está aquí!”
                </div>
            </div>
            </MDBModalBody >
        </MDBModal >

        <MDBModal isOpen={this.state.modal4} toggle={this.toggle(4)}>
            <MDBModalBody className="modalHottie" >
            {/* <MDBBtn color="secondary" className="btnModal" onClick={this.toggle(2)}>&times;</MDBBtn> */}
            <span className="btnModal" onClick={this.toggle(4)}>&times;</span>
            <div className="d-flex flex-row contInfo" >
                <div className="imghootie"><img src={puma} alt="Responsiveimg" className="imgPuma"/></div>
                <div className="textarea">
                <h1 className="text-center" style={{fontWeight:'bold'}}>Puma Espuma</h1>
                <p style={{fontWeight:'bold'}}>Personalidad:</p>  
                Líder por naturaleza, valiente y aventurero, intrépido. 
                <br/>
                Le gusta hacer cosas nuevas y creativas.
                Enfrenta con valentía al coronavirus. Sin embargo,
                a veces su intrepidez le juega malas pasadas y se
                transforma en ansiedad.
                <br/>
                <p style={{fontWeight:'bold'}}>Frase típica:</p> “¡Vamos tod@s junt@s ahora!”
                </div>
            </div>
            </MDBModalBody >
       </MDBModal >

       <MDBModal isOpen={this.state.modal5} toggle={this.toggle(5)}>
            <MDBModalBody className="modalHottie" >
            {/* <MDBBtn color="secondary" className="btnModal" onClick={this.toggle(2)}>&times;</MDBBtn> */}
            <span className="btnModal" onClick={this.toggle(5)}>&times;</span>
            <div className="d-flex flex-row contInfo" >
                <div className="imghootie"><img src={jabon} alt="Responsiveimg" className="imgJabon"/></div>
                <div className="textarea">
                <h1 className="text-center" style={{fontWeight:'bold'}}>Jabier Jabón</h1>
                <p style={{fontWeight:'bold'}}>Personalidad:</p>  
                Tímido, sonriente y tranquilo. Le gusta compartir
                con sus amig@s y comer cosas ricas. Jabier Jabón
                es el más asustadizo del grupo frente a
                coronavirus, pero sabe que en el fondo tiene el
                mayor poder de todo el equipo, ya que no sólo
                puede proteger, sino que también destruir al virus.
                Su presencia es indispensable.
                <br/>
                <p style={{fontWeight:'bold'}}>Frase típica:</p>“Estaré ahí cuando me necesiten.”
                </div>
            </div>
            </MDBModalBody >
    </MDBModal >
    </div>    
  );
  }  
}

export default ModalPage;

