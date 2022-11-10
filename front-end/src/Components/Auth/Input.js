
import React from 'react';
import Form from 'react-bootstrap/Form';

const Input = ({ name, handleChange, label, type, placeholder }) => (
    <Form>
        <Form.Group>
            <Form.Label label={label}>{label}</Form.Label>
            <Form.Control name={name} type={type} placeholder={placeholder} onChange={handleChange} required/>
        </Form.Group>
    </Form>
);

export default Input;