import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { removeFromSchedule } from '../../../api';

function RemoveClassPopup(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true)
 
  const handleRemove = (userId, section, setVisible) =>{
    removeFromSchedule(section.id, userId)
    setVisible((prev) => !prev)
    window.location.reload(false);
  }


  return (
    <>
      <Button variant="primary" onClick = {() => handleShow()}>
        Remove from Schedule
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Class Removed from Schedule</Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Button variant="secondary" onClick = {() => [handleRemove(props.userId, props.section, props.setVisible), handleClose()]}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default RemoveClassPopup;