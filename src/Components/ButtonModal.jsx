import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function MessageButton() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button 
      className = 'form-btn'
      variant="primary" 
      onClick={handleShow}>
    SEND
      </Button>

      <Modal
        show={showForm}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>TSC</Modal.Title>
        </Modal.Header>
        <Modal.Body>
      Thank you for contacting TS Consultancy. Your message has been sent. 
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

