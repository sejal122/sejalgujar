import React from 'react'
import './Grid.css'
import { Container , Row , Col , Card } from 'react-bootstrap'
export default function Grid() {
    return (
        <div>
           <Container id="container">
  <Row xs={2} md={4} lg={6} >
    <Col id="card1"><Card style={{ width: '20rem' }}>
  <Card.Body>
    <Card.Title>SSC X</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">MAHARASHTRA , [ 85% ]</Card.Subtitle>
    <Card.Text>
      Mona school , satara. <br></br>06/2013 - 04/2014
    </Card.Text>
    
  </Card.Body>
</Card></Col>
    <Col id="card2"><Card style={{ width: '20rem' }}>
  <Card.Body>
    <Card.Title>HSC XII</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">MAHARASHTRA  [ 64% ]</Card.Subtitle>
    <Card.Text>
    Chhatrapati Shahu Academy<br/> 06/2014 - 04/2016 
    </Card.Text>
    
  </Card.Body>
</Card></Col>
  </Row>

  <Row xs={2} md={4} lg={6} >
    <Col id="card3"><Card style={{ width: '20rem' }}>
  <Card.Body>
    <Card.Title>Bachelor of Engineering</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">Computer Science [ 85% ]</Card.Subtitle>
    <Card.Text>
    karmaveer bhaurao patil college of engineering and polytechnic,satara<br/>06/2016 - 11/2020
    </Card.Text>
    
  </Card.Body>
</Card></Col>
    <Col id="card4"><Card style={{ width: '20rem' }}>
  <Card.Body>
    <Card.Title>MBA</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">Human Resources</Card.Subtitle>
    <Card.Text>
    D.Y.PATIL , PUNE <br></br>2/2020 - 4/2022
    </Card.Text>
    
  </Card.Body>
</Card></Col>
  </Row>
    
  </Container>
        </div>
    )
}


