import React from 'react'
import { Container , Row , Col , Card } from 'react-bootstrap'
import './Contact.css'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
export default function Contact() {
    return (
        <div>
        <h3>CONTACT</h3>
            <div class="container">
  <div class="row">
    <div class="col-sm-4 ">
      <p><img id="sejimg" src='sejal edited.jpg'></img></p>
    </div>
    <div class="col-sm-8 ">
      <p id="mail">Email: gujarsejal12@gmail.com</p>

<p>Country/State : India/Maharashtra </p>

<p id="ld">Linkedin profile : <a href='www.linkedin.com/in/sejal-gujar-a559671a1'>www.linkedin.com/in/sejal-gujar-a559671a1</a></p><br/>
<Button id="pdf" variant="outline-secondary"><a href="Sejal's Resume extended-converted (1).pdf" download>Download my CV from here!</a></Button>

    </div>
  </div>
</div>
        </div>
    )
}
