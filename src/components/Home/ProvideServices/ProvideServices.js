import React from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { Col, Container, Row, Spinner } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../../App';
import './ProvideServices.css';


const ProvideServices = () => {
    // Services ,setItemId and spiner state
    const [services ,setSevices] = useState([]);
    const {setItemId} = useContext(UserContext);
    const [loading,setLoading] = useState(true);

    //Use History method
    const history = useHistory();

    //Handle Click and move to dasboar method
    const handleServicesclick = (id) => {
        history.push('/dasboard')
        setItemId(id);
    }

    //Load servicesList data
    useEffect(()=>{
        fetch('https://damp-cliffs-08620.herokuapp.com/sevicesList')
        .then( res => res.json())
        .then(data => {
            if(data){
                setSevices(data)
                setLoading(false)
            }
        })
    },[])

    return (
        <div className="mb-5 provid-container">
            <Container>
                <h1 className="text-center brand-text">Provide awesome <span style={{color: '#7AB259'}}>services</span></h1>
                 <Row>
                    { 
                      loading ? <div style={{width: '100%'}} className="d-flex algin-items-center justify-content-center">
                      <Spinner  animation="border" variant="warning" /> 
                     </div> :  services.map( service =>  <Col key={service._id} md={4} sm={6} xs={12}> 
                            <div onClick={()=>handleServicesclick(service._id)} className="proivde-card text-center"> 
                                <img className="img-fluid" src={`data:image/jpeg;base64,${service.image.img}`} alt="" />
                                <h3>{service.title}</h3>
                                <p>{service.description}</p>
                            </div>
                         </Col>)
                    }
                 </Row>
            </Container>
        </div>
    );
};

export default ProvideServices;