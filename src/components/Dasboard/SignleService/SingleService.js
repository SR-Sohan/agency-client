import React from 'react';
import { Col } from 'react-bootstrap';

const SingleService = ({item}) => {


    return (
        <Col key={item._id} md={6} > 
                <div className="single-services mb-4 bg-white p-4"> 
                    <div className="service-list d-flex align-items-center justify-content-between mb-3"> 
                       
                        <img style={{width: '75px',height: '75px'}} src={`data:image/png;base64,${item.image.img}`} alt=""/>
                        <span style={ item.status === 'Done' ? {backgroundColor: '#C6FFE0',color: '#009444'} :
                            (item.status === 'Pending' ? {backgroundColor: '#FFE3E3',color: 'FF4545'} :
                            {backgroundColor: '#FCEABD',color: '#FFBD3E'})
                            }>{item.status ? item.status : 'Pending'}</span>
                    </div>
                    <h3>{item.project}</h3>
                    <p>{item.projectDetails}</p>
                </div>
        </Col> 
    );
};

export default SingleService;