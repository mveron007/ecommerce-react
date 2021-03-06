import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { addDoc, getFirestore, collection, Timestamp} from 'firebase/firestore/lite';
import { Row, Col, Button} from 'react-bootstrap';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content'
import { useCartContext } from '../../context/CartContext';
import ItemCart from '../ItemCart/ItemCart';
import CheckoutForm from '../CheckoutForm/CheckoutForm';
import {productos} from '../../helpers/productos';

const Cart = () => {
  const {productList, totalBill, clear} = useCartContext();
  const [prods, setProds] = useState([]);
  const [mainId, setId] = useState('');

  useEffect(() => {
    function loadProds(){
      if (productList.length === 0) {
        setProds(productos);
      }
    }

    loadProds();
  })

  const MySwal = withReactContent(Swal);

  async function checkOutForm(){
    await MySwal.fire({
      title: 'Datos del comprador',
      showConfirmButton: false,
      html:<CheckoutForm paymentOrder={paymentOrder}/>
    });
  }


  const paymentOrder= async (dataForm)=>{
      // Nuevo objeto de orders
      let order = {};

      order.buyer = dataForm;
      order.total = totalBill();
      order.date = Timestamp.fromDate(new Date());

      order.items = productList.map(item => {
          const id = item.id;
          const name = item.title;
          const price = item.price * item.quantity;

          return {id, name, price}
      })
      console.log(order)

      const db = getFirestore()
      const queryCollectionSet = collection(db, 'orders')
      addDoc(queryCollectionSet, order)
      .then(resp =>{
        setId(resp.id)
        buildBrief(resp.id);
      })
      .catch(err => console.error(err))
    }

    const buildBrief= (id)=>{
      MySwal.fire(
        'Resumen',
        `La factura ${id} ha sido emitida`,
        'success'
      );
      clear();
    }

  return (
    <div className='mt-3'>
      {
      (productList.length === 0)
      ?
      <div className='shadow-sm p-3 mb-5 bg-body rounded'>
        <h1 className='fw-lighter'>
          Tu carrito est?? vac??o
        </h1>

        <h5 className='fw-lighter'>
          ??No sab??s qu?? necesita tu mascota?
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
              {/* { prods.map(item => <ItemCart key={item.id} item={item}></ItemCart>) } */}

              <Button onClick={() =>clear()}>Vaciar Carrito</Button>

            </div>
          </div>
        </Col>

        <Col md={3}>
          <div className='shadow-sm p-3 mb-5 bg-body rounded'>
            <span>Env??o a </span>
            <h3>Total: $ {totalBill()}</h3>
            <Button onClick={() => checkOutForm()}>Finalizar Compra</Button>
          </div>
        </Col>


      </Row>
      }

    </div>
  )
}

export default Cart