import React, {useState} from 'react'
import { Form, Button} from 'react-bootstrap';

const CheckoutForm = ({paymentOrder}) => {
    const [emailCheck, setEmailCheck] = useState("");
    const [dataForm, setDataForm] = useState({
        email: '', name: '', phone: ''
      })


    const handleChange = (e) => {
        setDataForm({
          ...dataForm,
          [e.target.name]: e.target.value
      })
    }

    const compareEmailChange = () =>{
        return emailCheck === dataForm.email ? true : false;
    }

    const payment = (e) =>{
        e.preventDefault();
        paymentOrder(dataForm);
    }

    const validateForm = () =>{
        const regEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
        const testEmail = regEx.test(emailCheck);
        if(dataForm.email.trim().length === 0 || 
        dataForm.name.trim().length === 0 || 
        dataForm.phone.trim().length === 0 || 
        !compareEmailChange() ||
        !testEmail){
            return false;
        }else{
            return true;
        }
    }

  return (
    <div>
        <Form onSubmit={payment}>
            <Form.Group className="mb-3" controlId="nameData">
                <Form.Label>Nombre:</Form.Label>
                <Form.Control type="text" name='name' value={dataForm.name} 
                    onChange={handleChange}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="phoneData">
                <Form.Label>Teléfono:</Form.Label>
                <Form.Control type="text" name='phone' value={dataForm.phone}
                    onChange={handleChange}
            />
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="emailData">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" name='email' placeholder="name@example.com" value={dataForm.email}
                    onChange={handleChange}
            />
                
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Repetir Email</Form.Label>
                <Form.Control type="email" name='emailCheck' placeholder="name@example.com"
                    onChange={(e)=>setEmailCheck(e.target.value)}
            />
                
            </Form.Group>

            <Button id="checkoutBtn" variant="primary" type="submit" className={`${!validateForm() ? 'disabled' : ''}`}>
                Realizar Compra
            </Button>

        </Form>
    </div>
  )
}

export default CheckoutForm