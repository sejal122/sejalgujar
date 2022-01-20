import React ,{useState} from 'react'
import Modal from 'react-bootstrap/Modal'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { Container , Row , Col , Card } from 'react-bootstrap'
import './Sdmodal.css'

export default function Hrmodal(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
        <div>
            <Button id="sdbtn"  onClick={handleShow}>
        HR
      </Button>

      <Modal   show={show} onHide={handleClose} size="lg" className='modalbody'>
        <Modal.Header closeButton>
          <Modal.Title>Skill set and Experience </Modal.Title>
        </Modal.Header>
        <Modal.Body><Container>
        <Row id="skills">
    <Col>• Professional interpersonal skills<br/>
• English proficiency<br/>
• Management skills<br/>
• Active linkedIn account<br/>
 <br/></Col>
    <Col>• Outstanding Leadership and Conflict Management Skills<br/>
• Multitasker<br/>
• Team player<br/>
</Col>
  </Row><br/><h3>Experience</h3><br></br>
  <Row id="exp">
  
    <Col> <h6>• HR intern :</h6>
    <span className='titles'>IFORTIS WORLDWIDE</span><br></br>
    Conducting end to end recruitment process (Talent acquisition , Extending internship offer , Conducting Iductions , Managing interns.</Col>

    <Col> <h6>• Jr.HR intern :</h6>
    <span className='titles'>Codify Apps pvt ltd.</span><br></br>
    Co-ordinating meetings,tasks/assignments distribution between interns,stragetic 
plannings for better reach of the organization and hunting for suitable interns.
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
