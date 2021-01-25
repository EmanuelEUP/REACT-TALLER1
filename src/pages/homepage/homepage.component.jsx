
import React from 'react';
import { Modal,Button ,ListGroup} from "react-bootstrap";

//import SHOP_DATA from './shop.data.js';
//import CollectionPreview  from '../../components/collection-preview/collection-preview';

class Homepage extends React.Component {
    
    constructor(props) {
        super(props); 
    }

    render() {
        return (    

            <div>

<Modal.Dialog size="lg">
  <Modal.Header  >
    <Modal.Title>Tarea 1: Creación de componentes y uso de Props</Modal.Title>
  </Modal.Header>

  <Modal.Body>

  <ListGroup>
  <ListGroup.Item>1. Crear un archivo .js donde dejen data de prueba para utilizar, como lo hicimos en el primer proyecto.</ListGroup.Item>
  <ListGroup.Item>2. Aplicar el patrón de arquitectura por estados.</ListGroup.Item>
  <ListGroup.Item>3. Aplicar la comunicación de componentes - Props.</ListGroup.Item>
  <ListGroup.Item>4. Definir rutas y navegación.</ListGroup.Item>
  <ListGroup.Item>6. Fecha de inicio: Lunes 25 de Enero</ListGroup.Item>
  <ListGroup.Item>7. Fecha de entrega: Viernes 05 de Febrero hasta las 00:00</ListGroup.Item>
  <ListGroup.Item>8. Modo de entrega: Enviar repositorio git a mi correo mchamorro@escalab.academy</ListGroup.Item>
 
</ListGroup>


  </Modal.Body>

 
</Modal.Dialog>

            </div>
  
        );
    }
};

export default Homepage;