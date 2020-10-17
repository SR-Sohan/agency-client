import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Col, Container, Row, Spinner } from 'react-bootstrap';
import './FeedBack.css'



const FeedBack = () => {

    // Feedbacks and spiner state
    const [feedBacks,setFeedBacks] = useState([]);
    const [loading,setLoading] = useState(true)

    //Load FeedBacks data
    useEffect(()=>{
        fetch('https://damp-cliffs-08620.herokuapp.com/feedBacks')
        .then( res => res.json())
        .then( data => {
           if(data){
            setFeedBacks(data);
            setLoading(false);
           }
        })
    },[])

    return (
        <div>
            <Container>
            <h1 style={{color: '#171B4E'}} className="text-center brand-text">Clients  <span style={{color: '#7AB259'}}>Feedback</span></h1>
                <Row>
                   {
                     loading ? <div style={{width: '100%'}} className="d-flex algin-items-center justify-content-center">
                     <Spinner  animation="border" variant="warning" /> 
                    </div> :  feedBacks.map( feedBack =>  <Col key={feedBack._id} md={4} sm={6} xs={12}>
                           <div className="single-feedBack"> 
                                <div className="top-part d-flex align-items-center"> 
                                    <img style={{width: '64px',height: '64px'}} src={feedBack.imgUrl} alt=""/>
                                    <div className="name-title ml-3"> 
                                        <p>{feedBack.name}</p>
                                        <small>{feedBack.data.company}</small>
                                    </div>
                                </div>
                                <p>{feedBack.data.description}</p>
                           </div>
                        </Col>)
                   }
                </Row>
            </Container>
        </div>
    );
};

export default FeedBack;