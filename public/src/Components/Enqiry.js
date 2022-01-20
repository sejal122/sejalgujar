import React from 'react'
import { Container , row , col , Card } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import './Enqiry.css'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Enqiry() {
    return (

        <div id="form">
           
           <Form  action="https://getform.io/f/c11f7f0a-129b-42f6-be0e-99f8eb491ec5" method='POST' reset>
           <h3 id="enq">Make an Enquiry!</h3>
           <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label id="name">Name</Form.Label>
    <Form.Control type="text" name="name" placeholder="Enter name" />
  </Form.Group>
  <Form.Group  className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control name="email" type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Type a message!</Form.Label>
    <textarea name="textarea" class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </Form.Group>
  
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>

        </div>
    )
}
