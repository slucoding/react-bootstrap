import React from 'react';
import Slider from './Slider';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import one from '../img/one.jpeg';
import two from '../img/two.jpeg';
import three from '../img/three.jpeg';

const Home = () => (
    <>
        <Slider />
        <Container style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
            <Row>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant='top' src={one} />
                        <Card.Body>
                            <Card.Title>WebDev Blog</Card.Title>
                            <Card.Text>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                            </Card.Text>
                            <Button variant='primary'>Learn more</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant='top' src={two} />
                        <Card.Body>
                            <Card.Title>WebDev Blog</Card.Title>
                            <Card.Text>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                            </Card.Text>
                            <Button variant='primary'>Learn more</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant='top' src={three} />
                        <Card.Body>
                            <Card.Title>WebDev Blog</Card.Title>
                            <Card.Text>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                            </Card.Text>
                            <Button variant='primary'>Learn more</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
        <Container style={{ marginBottom: '30px'}}>
            <Row>
                <Col md={7}>
                    <img src={one} height={400} alt="Web Develor Blog" />
                </Col>
                <Col md={5}>
                <h1>Web Develop Blog</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Dolor quibusdam nobis labore molestias atque accusamus officia quis, non ratione. 
                    Libero amet ipsa adipisci iste odio laudantium debitis corrupti autem alias!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Dolor quibusdam nobis labore molestias atque accusamus officia quis, non ratione. 
                    Libero amet ipsa adipisci iste odio laudantium debitis corrupti autem alias!
                </p>
                </Col>
            </Row>
        </Container>
    </>
)

export default Home;