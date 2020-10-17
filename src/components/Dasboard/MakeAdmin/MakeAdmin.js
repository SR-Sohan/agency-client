import React from 'react';
import { useForm } from "react-hook-form";
import './MakeAdmin.css'
const MakeAdmin = () => {

    //React Hook Use Form
    const { register, handleSubmit, errors } = useForm();

    //Handle submit form
    const onSubmit = data => {
        fetch('https://damp-cliffs-08620.herokuapp.com/addAdmin',{
            method: 'POST',
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(data)
        })
        .then( result => {
            if(result){
                alert('Email update success')
            }
        })
    };
    
    return (
        <div className="make-admin">
            <form onSubmit={handleSubmit(onSubmit)}> 
                <label htmlFor="email">Email</label><br/>
                <input type="email" name="email" id="email" ref={register({ required: true })} placeholder=" email..."/>
                <input className="brand-submit" type="submit" value="Submit"/>
                <br/>
                {errors.email && <span className="text-danger">write email</span>}
            </form>
        </div>
    );
};

export default MakeAdmin;