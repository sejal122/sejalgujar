import React ,{useState} from 'react'
import Modal from 'react-bootstrap/Modal'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { Container , Row , Col , Card } from 'react-bootstrap'
import './Sdmodal.css'

export default function Frontendmodal() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>
            <Button id="sdbtn"  onClick={handleShow}>
            Frontend Developer
      </Button>

      <Modal   show={show} onHide={handleClose} size="lg" className='modalbody'>
        <Modal.Header closeButton>
          <Modal.Title>Skill set and Experience</Modal.Title>
        </Modal.Header>
        <Modal.Body><Container>
        <Row id="skills">
    <Col>• Vuejs<br/>
• Bootstrap/Reactstrap<br/>
• React js<br/>• Figma
 <br/></Col>
    <Col>• UX/UI designer<br/>
• HTML/CSS/JS<br/>
• Coraldraw
<br/>
</Col>
  </Row><br/><h3>Projects</h3><br></br>
  <Row id="exp">
  
    <Col> <h6>• Portfolio website :</h6>
    This Website is to be considered as one of my frontend development projects. <br/>Technologies used : ReactJS , Bootstrap , Reactstrap , HTML/CSS </Col>

    <Col> <h6>• Tree donation UX website :</h6>
    
    A website with good user experience and design to donate a tree to registered
organizations/NGOs.

.</Col><br/>
    
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
