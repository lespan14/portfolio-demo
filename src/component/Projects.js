import React from 'react';
import { Navbar, Container, Nav, Button,Row,Col,Card} from 'react-bootstrap';

function Projects() {
    return(
        <Container fluid style={{height: "75vh"}} id="projects">
            <h1 style={{textAlign: "center", marginBottom: "5%"}}>Projects</h1>

            <Row style={{justifyContent: "center", alignItems: "center"}}>
                <Col sm={12} md={6} lg={4}>
                <Card style={{ width: '100%' ,marginLeft:"-10%"}}>
                    <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Project1</Card.Subtitle>
                    <Card.Text>
                        This project is the site that I am making right now, the protfolio-demo projects.
                        Uploaded in Git.
                    </Card.Text>
                    <Card.Link href="https://github.com/lespan14/portfolio-demo">Git</Card.Link>
                    <Card.Link href="#">Leave comment!</Card.Link>
                    </Card.Body>
                </Card>                    
                
                
                
                </Col>
                <Col sm={12} md={6} lg={4}>
                <Card style={{ width: '100%' ,marginLeft:"10%"}}>
                    <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Project2</Card.Subtitle>
                    <Card.Text>
                        Being prepared. A personal project to practice more skills for future.
                    </Card.Text>
                    <Card.Link href="#">Git</Card.Link>
                    <Card.Link href="#">Leave comment!</Card.Link>
                    </Card.Body>
                </Card> 
                
                </Col>
            </Row>






        </Container>
    );




}
export default Projects;