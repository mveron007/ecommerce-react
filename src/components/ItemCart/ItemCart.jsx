import React from 'react'
import { useCartContext } from '../../context/CartContext';
import { Row, Col, Button, Image} from 'react-bootstrap';

const ItemCart = ({item}) => {
    const {remove} = useCartContext();
  return (
    <div className='border-top border-bottom'>

        <Col md={4}>

          <Row>
            <Col md={4}>
              <Image src={item.pictureUrl} className='img-fluid rounded-start'/>    
            </Col>

            <Col md={6}>
              <h5 className='card-title'>{item.title}</h5>

            </Col>

            <Col md={2}>
              <span>Precio</span>
              <span className='fw-bold'>${item.price}</span>
            </Col>
          </Row>
        
          <Button onClick={() => remove(item.id)}>Eliminar</Button>
        </Col>
    </div>
  )
}

export default ItemCart