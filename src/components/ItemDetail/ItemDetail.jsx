import React, {useState} from 'react'
import {Link} from 'react-router-dom';
import { Row, Col, Button} from 'react-bootstrap';
import { useCartContext } from '../../context/CartContext';
import StarRating from '../StarRating/StarRating';
import {FaTruck} from 'react-icons/fa';
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({item}) => {
    const [isCount, setIsCount] = useState(false);
    const { addToCart } = useCartContext();

    const log = (value)=>{
        console.log(value);
    }

    const onAdd = (count)=>{
        const qty = count;
        addToCart(item, qty)
        setIsCount(true);
    }

  return (
    <div className='m-3'>
        <Row>
            <Col md={4}>
                <img src={item.image} alt={item.title} className="w-75 p-3" />
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


                {isCount ?
                    <div className='d-flex flex-column justify-content-center'>  
                        <Link className='mt-3' to='/' >
                            <Button>
                                Continuar Compra
                            </Button>
                        </Link>
                        <Link className='mt-3' to='/cart'>
                            <Button >
                                Terminar Compra
                            </Button>
                        </Link>
                    </div>
                    :
                    <div>
                        <ItemCount stock={3} initial={1} onAdd={onAdd}/>
                    </div>
                    
                }

            </Col>
        </Row>
    </div>
  )
}

export default ItemDetail