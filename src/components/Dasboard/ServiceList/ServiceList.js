import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Spinner, Table } from 'react-bootstrap';
import './ServiceList.css';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
const options = [
    { value: 'Pending', label: 'Pending' },
    { value: 'On Going', label: 'On Going' },
    { value: 'Done', label: 'Done' }
]

const ServiceList = () => {
    // Order item and Spiner state
    const [orderItem,setOrderItem] = useState([]);
    const [lodding,setLoading] = useState(true);

    //Load order item
    useEffect(()=>{
        fetch('https://damp-cliffs-08620.herokuapp.com/orderItem')
        .then( res => res.json())
        .then( data => {
            if(data){
                setOrderItem(data);
                setLoading(false);
            }
        })
    },[]);

    // Change a order item value
    const change = (e, id) => {
        fetch(`https://damp-cliffs-08620.herokuapp.com/update/${id}`, {
            method: 'PATCH',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({status: e.value})
        })
        .then(res => res.json())
        .then(data => {
            if(data){
                alert('Status updated successfully')
            }
        })
    };


    return (
        <div>
           { lodding ? <div style={{width: '100%'}} className="d-flex algin-items-center justify-content-center">
            <Spinner  animation="border" variant="primary" /> 
           </div>:
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>Name</th>
                    <th>Email Id</th>
                    <th>Service</th>
                    <th>Project Details</th>
                    <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orderItem.map( item => <tr key={item._id}> 
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.project}</td>
                            <td>{item.projectDetails}</td>
                            <td>
                                <Dropdown  options={options} onChange={(e) => {change(e, `${item._id}`)}} value={item.status ? item.status: "pending"} placeholder="Select an option" />
                            </td>
                        </tr>)
                    }
                        
                </tbody>
            </Table>}
        </div>
    );
};

export default ServiceList;