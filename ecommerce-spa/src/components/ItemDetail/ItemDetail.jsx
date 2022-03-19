import React from 'react'
import { Row, Col} from 'react-bootstrap';
import StarRating from '../StarRating/StarRating';
import {FaTruck} from 'react-icons/fa';

const ItemDetail = ({item}) => {
    console.log(item);

    const log = (value)=>{
        console.log(value);
    }
  return (
    <div className='m-3'>
        <Row>
            <Col md={4}>
                <img src={item.pictureUrl} alt={item.title} className="w-75 p-3" />
            </Col>

            <Col md={4}>
                <h3>{item.title}</h3>

                <StarRating onChange={log}/>

                <h5>$ {item.price}</h5>
            </Col>

            <Col md={4} className="border border-1 rounded mb-2">

                <span>
                    <FaTruck/> Enviar a 
                </span>



            </Col>
        </Row>

    </div>
  )
}

export default ItemDetail