import React ,{useState} from 'react'
import Modal from 'react-bootstrap/Modal'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { Container , Row , Col , Card } from 'react-bootstrap'
import './Sdmodal.css'

export default function Tutormodal() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
        <div>
            <Button id="sdbtn"  onClick={handleShow}>
        Coding Tutor
      </Button>

      <Modal   show={show} onHide={handleClose} size="lg" className='modalbody'>
        <Modal.Header closeButton>
          <Modal.Title>Skill set and Experience</Modal.Title>
        </Modal.Header>
        <Modal.Body><Container>
        <Row id="skills">
    <Col>• Python<br/>
• C<br/>
• C++<br/>
</Col>
    <Col>
• JavaScrpit<br/>
• java<br/>
•  HTML/CSS</Col>
  </Row><br/><h3>Experience</h3><br></br>
  <Row id="exp">
  
    <Col> <h6>• Online Coding Tutor :</h6>
    <span className='titles'>Cuemath pvt.ltd.</span><br></br>10/2021 - Present<br/>
    Star teacher with national and international tutoring certificate . Tutoring students from class 1 to class 12th.</Col>

    <Col> <h6>• Online Coding Tutor :</h6>
    <span className='titles'>Whitehat Jr.pvt.ltd</span><br></br>10/2020 - 05/2021<br></br>
    Completed more than 600 classes. Certified App development and Advance level
coding tutor.</Col><br/>
    
    </Row>
    
        </Container>
</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          
        </Modal.Footer>
      </Modal>
        </div>
    )
}
