import React from 'react'
import { Link } from "react-router-dom";
import { Card } from 'react-bootstrap';

const Item = ({item}) => {
  return (
    <Link to={`/item/${item.id}`} className="text-decoration-none">
      <div>
        <Card style={{ width: '18rem' }} className="text-dark">
          <Card.Img variant="top" src={item.image} />
          <Card.Body>
            <Card.Title>{item.title}</Card.Title>
            <Card.Text>
              <span className='mb-2'> {item.categoryId} </span>
              ${item.price}
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </Link>
  )
}

export default Item