import React from 'react';
import { Container ,Col,Row} from 'react-bootstrap';
import {
    Peng1,
    Peng2,
    Peng3,
    Peng4,
    Peng5,
    Git
} from '../Assets/images/photoindex'

function About() {
    return(
        <Container fluid style={{height: "75vh"}} id="about">
            <h1 style={{width: "100%", textAlign: "center", margin: "40px 0"}}>About me</h1>
            <Row style={{justifyContent: "center", alignItems: "center", height: "80%"}}>
                <Col sm={6} md={5} lg={{span: 4, offset: 1}}>
                    <img 
                        src={Peng1} 
                        alt="Penguin1" 
                        style={{
                            width: "30%", 
                            boxShadow: "2px 2px 5px #001",
                            borderRadius: "20px",
                            marginBottom: "10%"
                        }}
                    />
                    
                    <img
                        src={Peng5} 
                        alt="Penguin5" 
                        style={{
                            width: "30%",
                            boxShadow: "2px 2px 5px #001",
                            borderRadius: "20px",
                            marginLeft: "10%",
                            marginBottom: "10%"
                        }}
                    />
                    <br></br>
                    <img 
                        src={Peng3} 
                        alt="Penguin3" 
                        style={{
                            width: "30%", 
                            boxShadow: "2px 2px 5px #001",
                            borderRadius: "20px"
                            
                        }}
                    />
                    <img 
                        src={Peng4} 
                        alt="Penguin4" 
                        style={{
                            width: "30%", 
                            boxShadow: "2px 2px 5px #001",
                            borderRadius: "20px",
                            marginLeft: "10%"
                        }}
                    />

                </Col>
                
                
                <Col sm={9} md={10} lg={{ span: 5, offset: 1}}>
                    <h1>Hello!</h1>
                    <h4 style={{fontWeight: "300"}}>
                        I am a student at The Hong Kong Polytechnic Uuniversity, studying in Fintech & Artificial Intellignece.
                        I am trying to learn html and js with this personal site. My first goal is to be a Dev ops and also work
                        in part of Cyber Security.
                    </h4>
                </Col>
            </Row>
        </Container>
    );



}

export default About;