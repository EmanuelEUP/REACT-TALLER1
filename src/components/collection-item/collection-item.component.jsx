import React from "react";
import "./collection-item.style.scss";
import { Card } from "react-bootstrap";

const CollectionItem = ({ id, name, juego, imageUrl }) => (


<Card style={{ width: '13rem'} }>
  <Card.Img variant="top" src={imageUrl} height = "130"  />
  <Card.Body className="bg-dark bg-gradient text-light font-weight-bold">
    <Card.Title className="text-center">{name}</Card.Title>
  </Card.Body>
</Card>
 
);

export default CollectionItem;
