import React from 'react'
import { Link } from 'react-router-dom';
import { Row, Col, Button} from 'react-bootstrap';
import { useCartContext } from '../../context/CartContext';
import ItemCart from '../ItemCart/ItemCart';

const Cart = () => {
  const {isEmpty, productList, totalBill, clear} = useCartContext();

  return (
    <div className='mt-3'>
      {
      (productList.length === 0)
      ?
      <div className='shadow-sm p-3 mb-5 bg-body rounded'>
        <h1 className='fw-lighter'>
          Tu carrito está vacío
        </h1>

        <h5 className='fw-lighter'>
          ¿No sabés qué necesita tu mascota?
        </h5>
        <Link className='textD-None' to="/">
          <span>Tenemos muchos productos que te esperan</span>
        </Link>
        
      </div>
      :
      <Row>
        <Col className='m-2' md={8}>
          <div className='shadow-sm p-3 mb-5 bg-body rounded'>
            <h3 className='d-flex justify-content-start'>Carrito</h3>
            <div>
              { productList.map(item => <ItemCart key={item.id} item={item}></ItemCart>) } 
                          
              <Button onClick={() =>clear()}>Vaciar Carrito</Button> 
            
            </div>
          </div>
        </Col>

        <Col md={3}>
          <div className='shadow-sm p-3 mb-5 bg-body rounded'>
            <span>Envío a </span>
            <h3>Total: $ {totalBill()}</h3>
          </div>
        </Col>


      </Row>
      }
      
    </div>
  )
}

export default Cart