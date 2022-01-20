import React ,{useState} from 'react'
import Modal from 'react-bootstrap/Modal'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { Container , Row , Col , Card } from 'react-bootstrap'
import './Sdmodal.css'

export default function Sdmodal(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
        
        <div>
        
        <Button id="sdbtn"  onClick={handleShow}>
        Software Developer
      </Button>

      <Modal   show={show} onHide={handleClose} size="lg" className='modalbody'>
        <Modal.Header closeButton>
          <Modal.Title>Skill set and Experience</Modal.Title>
        </Modal.Header>
        <Modal.Body><Container>
        <Row id="skills">
    <Col>• Vuejs<br/>
• Postgre SQL<br/>
• React js<br/>
• Tkinter<br/>
• Bootstrap <br/></Col>
    <Col>• Image processing with opencv<br/>
• Machine learning<br/>
• Javascrpit<br/>
• SQL<br/>
• Data science</Col>
  </Row><br/><h3>Experience</h3><br></br>
  <Row id="exp">
  
    <Col> <h6>• Software developer Internship(python) :</h6>
    <span className='titles'>Dezignolics pvt ltd , Thane.</span><br></br>
    Developed a desktop application using tkinter <br/>06/2020 - 07/2020,</Col>

    <Col> <h6>• Jr.developer :</h6>
    <span className='titles'>Codify Apps pvt ltd.</span><br></br>
    Developing / designing frontend for websites/webapps using ReactJS.</Col><br/>
    
    </Row>
    <Row id="projects"><br/><br/>
    <h3>Projects</h3><br></br>
    <h6>• Kitchen ticket display system</h6>
Designed fully responsive frontend for kds system and owner app in react js. <br/><br/>
<h6>• Traffic sign recognition system</h6>
A system that recognises traffic signs/boards beforehand and informs the driver to avoid any sort of accidents.<br/>Technologies used: Image processing using OpenCV , Training and testing of dataset , Python .
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
