import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import slack from '../../../images/logos/slack.png';
import google from '../../../images/logos/google.png';
import uber from '../../../images/logos/uber.png';
import netflix from '../../../images/logos/netflix.png';
import airbnb from '../../../images/logos/airbnb.png';
import './Client.css';

//Fake Image
const clientImg = [
    {
        id: 1,
        img: slack
    },
    {
        id: 2,
        img: google
    },
    {
        id: 3,
        img: uber
    },
    {
        id: 4,
        img: netflix
    },
    {
        id: 5,
        img: airbnb
    },
]
const Client = () => {
    return (
        <div style={{ marginTop:'100px'}} >
            <Container> 
                <Row  className="d-flex align-items-center justify-content-center">
                    { clientImg.map( client =>  <Col className="client-single" key={client.id} md={2} sm={6} ex={12}>
                        <img style={{height: '50px',width: '150px'}} className="img-fluid" src={client.img} alt=""/>
                    </Col>)}
                </Row>
            </Container>
        </div>
    );
};

export default Client;