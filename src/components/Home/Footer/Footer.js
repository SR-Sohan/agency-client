import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Footer.css'

const Footer = () => {
    return (
        <footer>
            <Container>
                <Row> 
                    <Col md={4}> 
                        <div className="footer-left"> 
                            <h1>Let us handle your <br/> project, professionally.</h1>
                            <p>With well written codes, we build amazing apps for all platforms, mobile and web apps in general.</p>
                        </div>
                    </Col>
                    <Col md={{ span: 6, offset: 2}}> 
                        <form action=""> 
                            <input type="email" name="email" placeholder="Your emai address" id=""/>
                            <input type="text" name="name" placeholder="Your name / company’s name" id=""/>
                            <textarea rows = "10" cols = "60" name = "description" placeholder="Your message">
                            </textarea>
                            <button className='brand-btn' type="submit">Send</button>
                        </form>
                    </Col>
                </Row>
                <p className="text-center mt-5 pt-5">copyright Orange labs {new Date().getFullYear()}</p>
            </Container>
        </footer>
    );
};

export default Footer;