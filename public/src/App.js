
import './App.css';
import React, {useState} from 'react';
import Tiles from './Components/Tiles';
import Popup from './Components/Popup'
import Contact from './Components/Contact';
import Introcard from './Components/Introcard';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sdmodal from './Components/Sdmodal';
import Grid from './Components/Grid';
import Pdf from './Components/Pdf';
import Modal from 'react-bootstrap/Modal'
import Enqiry from './Components/Enqiry';
import Hrmodal from './Components/Hrmodal';
import Container from 'react-bootstrap/Container'
import Frontendmodal from './Components/Frontendmodal';
import Tutormodal from './Components/Tutormodal';
function App() {
  const [IsOpen, setIsOpen]=useState(false);
  const[SDIsopen , SDsetIsOpen]=useState(false);
  return (
    <div className="App">
    <Container fluid><div  id="upperhalf"><h1 id="myname" style={{color: "white"}}>Sejal Abhay Gujar</h1>
    <p><h5 id="coverline" style={{color: "#4368a3"}}>Experienced trainer with a history of working in E-learning industry with an 
ongoing MBA degree in HR.Creative , hardworking individual serving the IT 
industry with full efficiency.</h5></p>
<h2 id="ques" style={{color: "white"}}>What are you looking for?</h2>
<br></br>
<div id="titleblock" >

<Sdmodal></Sdmodal>
<Hrmodal id="hr"></Hrmodal>
<Frontendmodal></Frontendmodal>
<Tutormodal></Tutormodal>

</div>
<Popup  open={IsOpen} ></Popup>

<Popup open={SDIsopen}><Sdmodal/>hi from sd</Popup>
<div id="intro"><br/>
<div><h3 id="abtme">ACADEMICS</h3>
<Grid></Grid></div><br/>

<Contact></Contact>
<Pdf></Pdf>

<Enqiry></Enqiry>
<div id="footer"></div>
</div>

    </div></Container>

    <script src="https://unpkg.com/react/umd/react.production.min.js" crossorigin></script>

<script
  src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"
  crossorigin></script>

<script
  src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
  crossorigin></script>

<script>var Alert = ReactBootstrap.Alert;</script>
    </div>
  );
}

export default App;

