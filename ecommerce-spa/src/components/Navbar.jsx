import React from 'react'
import '../style/Navbar.css';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css'
import { Container, Row, Col } from 'react-bootstrap';
import {BsList} from 'react-icons/bs';
import Searchbar from './Searchbar';

const Navbar = (props) => {
  return (
    <div className='navbarContainer'>
        <Row className='p-3'>
            <Col md={2}>
                <div><a className='whiteText textD-None' href="">Brand<img src="" alt="" /></a>
                
                <div>
                    <span className='whiteText textD-None'> Envios a <a href="">{props.country}</a></span></div>
                </div>
            </Col>
            <Col md={6}>
                    <Searchbar></Searchbar>
            </Col>

            <Col md={4} className='d-flex justify-content-between'>
                <div>
                    <a href="" className='boxAccount textD-None whiteText'>
                        <span>Hola, Identificate</span> 
                        <span> <strong>Tu Cuenta</strong> </span>
                    </a>
                </div>

                <div>
                    <a href="" className='boxAccount textD-None whiteText'>
                       <span>Envíos</span> 
                        <span> <strong>y Devoluciones</strong></span></a>
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