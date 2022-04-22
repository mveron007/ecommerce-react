import React from 'react'
import { Spinner} from 'react-bootstrap';

const Loading = () => {
  return (
    <div className='d-flex justify-content-center'>
        <Spinner animation="border" variant="info" />
        <h5>Cargando...</h5>
    </div>
  )
}

export default Loading