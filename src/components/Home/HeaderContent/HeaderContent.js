import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import frame from '../../../images/logos/Frame.png'
import './HeaderContent.css'

const HeaderContent = () => {
    return (
        <div style={{height: '600px'}} className="d-flex align-items-center">
            <Container> 
                <Row > 
                    <Col className="header-content" md={4}>
                        <h1>Let’s Grow Your <br/>
                            Brand To The <br/>
                            Next Level
                        </h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat </p>
                        <button className="brand-btn">Hire us</button>
                    </Col>
                    <Col md={{ span: 5, offset: 2 }}>
                        <img className="img-fluid" src={frame} alt=""/>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default HeaderContent;