import React from 'react';
import { Navbar, Container, Nav, Button,Row,Col,Card} from 'react-bootstrap';

function Projects() {
    return(
        <Container fluid style={{height: "75vh",backgroundColor: "#343a40" , padding:"3"}} id="projects">
            <h1 style={{textAlign: "center", padding: "5%", color: "#dee2e6"}}>Projects</h1>

            <Row style={{justifyContent: "center", alignItems: "center"}}>
                <Col sm={12} md={6} lg={4}>
                <Card style={{ width: '100%',height:'100%' }}>
                    <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Project1</Card.Subtitle>
                    <Card.Text>
                        Project that I am making right now. Uploaded in Git.
                    </Card.Text>
                    <Card.Link href="https://github.com/lespan14/portfolio-demo">Git</Card.Link>
                    <Card.Link href="#">Leave comment</Card.Link>
                    </Card.Body>
                </Card>                    
                
                
                
                </Col>
                <Col sm={12} md={6} lg={4}>
                <Card style={{ width: '100%' }}>
                    <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Project2</Card.Subtitle>
                    <Card.Text>
                        Project with Valina Js.
                    </Card.Text>
                    <Card.Link href="https://github.com/lespan14/momentum">Git</Card.Link>
                    <Card.Link href="#">Leave comment</Card.Link>
                    </Card.Body>
                </Card> 
                
                </Col>

                <Col sm={12} md={6} lg={4}>
                <Card style={{ width: '100%'}}>
                    <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Project3</Card.Subtitle>
                    <Card.Text>
                        Being prepared.
                    </Card.Text>
                    <Card.Link href="#">Git</Card.Link>
                    <Card.Link href="#">Leave comment</Card.Link>
                    </Card.Body>
                </Card> 
                
                </Col>
            </Row>




        

        </Container>
    );




}
export default Projects;