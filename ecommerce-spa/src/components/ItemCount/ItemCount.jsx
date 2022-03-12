import React from 'react'
import { useState } from 'react';
import './ItemCount.css';
import 'bootstrap/dist/css/bootstrap.css';
import {InputGroup, Button, FormControl, Row, Col} from 'react-bootstrap';
import {GrFormAdd, GrFormSubtract} from "react-icons/gr";

const ItemCount = ({stock, initial, onAdd}) => {
    const [count, setCount] = useState(initial)

    const addItem = ()=>{
        const aux = stock - count;
        if (aux > 0) {
            document.getElementById('cartBtn').classList.remove("disabled");
            setCount(count + 1);
        }else{
            document.getElementById('cartBtn').classList.add("disabled");
            setCount(count + 1);
        }
    }
    const substractItem = ()=>{
        const aux = stock - count;
        if (count > 0 || stock <= count) {
            document.getElementById('cartBtn').classList.remove("disabled");
            setCount(count - 1);
            if(count === 1){
                document.getElementById('btnSubstract').classList.add("disabled");
                setCount(1);
                document.getElementById('btnSubstract').classList.remove("disabled");
            }
        }else{
            document.getElementById('cartBtn').classList.add("disabled");
            setCount(count - 1);
        }
    }

    const validateStock = ()=>{
        if (stock >= count) {
            document.getElementById('cartBtn').classList.remove("disabled");
            onAdd();    
        }else{
            document.getElementById('cartBtn').classList.add("disabled");
        }
    }
  return (
    <div>
        <InputGroup className="mb-3">
            <Button variant="outline-secondary" id="btnSubstract" onClick={substractItem}>
                <GrFormSubtract></GrFormSubtract>
            </Button>
            <FormControl
            id="countInput"
            value={count}
            />
            <Button variant="outline-secondary" id="button-addon2" onClick={addItem}>
                <GrFormAdd></GrFormAdd>
            </Button>
        </InputGroup>

        <Row>
            <Col>
                <Button id='cartBtn' onClick={validateStock}>
                    Agregar al Carrito
                </Button>
            </Col>
        </Row>
    </div>
  )
}

export default ItemCount