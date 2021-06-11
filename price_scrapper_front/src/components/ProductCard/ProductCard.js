import React from 'react'
import { Card } from 'react-bootstrap'
import { Button } from '@material-ui/core';
import './ProductCard.css'

const ProductCard = () => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body className="cardBody">
                <Card.Title>Product 1</Card.Title>
                <Card.Text>
                    Best price at Ebay for $1
                </Card.Text>
                <Button variant="contained" color="primary">
                    Buy product!
                </Button>
            </Card.Body>
        </Card>
    )
}

export default ProductCard