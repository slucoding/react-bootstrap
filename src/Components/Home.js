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
    </>
)

export default Home;