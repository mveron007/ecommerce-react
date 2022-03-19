import React from 'react'
import './Navbar.css';
import '../../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import logo from '../../images/icon-dogs-brand.png';
import { Row, Col} from 'react-bootstrap';
import {FcGlobe} from 'react-icons/fc';
import Searchbar from '../Searchbar/Searchbar';
import CartWidget from '../CartWidget/CartWidget';

const style = { color: "white", fontSize: "1.5em" };
const Navbar = (props) => {
  return (
    <div className='navbarContainer'>
        <Row className='p-3'>
            <Col sm={2} md={2} >
                <div className='d-flex'>
                    <a className='whiteText textD-None me-3' href=""><img className='mb-2' src={logo} width="60px;" alt="" /></a>
                
                    
                    <div className='rightOption'>
                        <span className='whiteText textD-None'><FcGlobe style={style}></FcGlobe> Enviar a  
                            <a href="" className='textD-None whiteText'>
                                <strong style={{marginLeft:"2em"}}> {props.country} </strong>
                            </a>
                        </span>
                    </div>
                </div>
            </Col>
            <Col md={6}  >
                    <Searchbar></Searchbar>
            </Col>

            <Col sm={4} md={4} className='d-flex justify-content-between'>
                <div className='rightOption'>
                    <a href="" className='boxAccount textD-None whiteText'>
                        <span>Hola, Identificate</span> 
                        <span> <strong>Tu Cuenta</strong> </span>
                    </a>
                </div>

                <div className='rightOption'>
                    <a href="" className='boxAccount textD-None whiteText'>
                       <span>Envíos</span> 
                        <span> <strong>y Devoluciones</strong></span></a>
                </div>

                <div className="rightOption">
                    <CartWidget></CartWidget>
                </div>
            </Col>
        </Row>

        <Row>
            <Col md={8}>
            <nav>
                <ul className='bg-secondGray'>
                    <li><a href="" className='whiteText textD-None'>Todo</a></li>
                    <li><a href="" className='whiteText textD-None'>Ofertas</a></li>
                    <li><a href="" className='whiteText textD-None'>Mas Buscados</a></li>
                    <li><a href="" className='whiteText textD-None'>Servicio al Cliente</a></li>
                </ul>
            </nav>
            </Col>
        </Row>
    </div>
  )
}

export default Navbar