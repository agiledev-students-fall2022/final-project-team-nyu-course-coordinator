import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { addToSchedule } from '../../../api';
import ToggleButton from 'react-bootstrap/ToggleButton';

function AddClassPopup(section) {
  const [show, setShow] = useState(false);
  const [checked, setChecked] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleAdd= (section) =>{
    // const userid ="636ed77cfe63d7bf6b544a93"
    console.log(section.id)
    addToSchedule(section.id)

    // setVisible((prev) => !prev)
  }

  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>
        Add
      </Button> */}

      <ToggleButton
          className="mb-2"
          id="toggle-check"
          type="checkbox"
          variant="outline-primary"
          checked={checked}
          value="1"
          onClick = {(e) => [setChecked(e.currentTarget.checked), handleAdd(section), handleShow()]}>
          Add to Schedule
      </ToggleButton>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Class Added Successfully</Modal.Title>
        </Modal.Header>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddClassPopup;