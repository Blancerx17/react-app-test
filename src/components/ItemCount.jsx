import React, {Component} from "react";
import {Button,Card} from "react-bootstrap";
import { useEffect, useState } from 'react';

const ItemCount = ({ stock = 0, initial = 1,  onAdd }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        setCount(initial);
    },[]);

    const increment = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    }
    
    const decrement = () => {
        if (count > initial) {
            setCount(count - 1);
        }
    }
    return (
        <div>
            <Card style={{width: '20rem'}}>
                <Card.Body>
            <Button variant="outline-primary" onClick={decrement}>-</Button>   
            <span className="mx-3">{count}</span>        
            <Button variant="outline-primary" onClick={increment}>+</Button> 
            {
                stock
                ? <Button className="mx-3" variant="outline-primary" onClick={() => onAdd(count)}>Add to Cart</Button>
                : <Button variant="outline-primary" disabled>Add to Cart</Button>
            }
            </Card.Body>
            </Card>
            
        </div>
    );
}

export default ItemCount;