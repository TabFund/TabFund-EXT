import React from 'react'
import { Modal, Button } from 'react-bootstrap';


const DeleteModal = (props) => {
    return (
        <Modal show={props.show} onHide={props.handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Gift</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete the Gift to {props.recipient}?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>
            Fechar
          </Button>
          <Button variant="danger" onClick={props.handleDelete}>
            Cancelar
          </Button>
        </Modal.Footer>
      </Modal>

    )
}

export default DeleteModal;
