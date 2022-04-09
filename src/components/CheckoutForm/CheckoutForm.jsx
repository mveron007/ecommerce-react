import React, {useState} from 'react'
import { Form, Button} from 'react-bootstrap';

const CheckoutForm = ({paymentOrder}) => {
    const [dataForm, setDataForm] = useState({
        email: '', name: '', phone: ''
      })


    const handleChange = (e) => {
        setDataForm({
          ...dataForm,
          [e.target.name]: e.target.value
      })
    }

    const payment = (e) =>{
        e.preventDefault();
        paymentOrder(dataForm);
    }


    console.log(dataForm)

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

            <Button variant="primary" type="submit">
                Submit
            </Button>

        </Form>
    </div>
  )
}

export default CheckoutForm