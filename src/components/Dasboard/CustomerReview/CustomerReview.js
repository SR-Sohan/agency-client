import React from 'react';
import { useContext } from 'react';
import { useForm } from "react-hook-form";
import { UserContext } from '../../../App';
import './CustomerReview.css'

const CustomerReview = () => {

  //User context loggedInUser
  const {loggedInUser} = useContext(UserContext);

  //React Hook useform
  const { register, handleSubmit, errors } = useForm();

  //Handle Form Submit
  const onSubmit = data => {
    
    const reviewInfo = {...loggedInUser,data};

    fetch('https://damp-cliffs-08620.herokuapp.com/addReview',{
      method: 'POST',
      headers: {
          "Content-Type" : "application/json"
      },
      body: JSON.stringify(reviewInfo)
  })
    .then( res => res.json())
    .then( result => {
      if(result){
        alert('Review update seccessfully')
      }
    })

    
  };

    return (
        <div className="review-area">
             <form onSubmit={handleSubmit(onSubmit)}>

                <input name="name" ref={register({ required: true })} placeholder="Your name" />
                <br/>
                {errors.name && <span className='text-danger'>Write your name</span>}
                <br/>

                <input name="company" ref={register({ required: true })} placeholder="Your Company name" />
                <br/>
                {errors.company && <span className='text-danger'>Write your company name</span>}
                <br/>
                
                <textarea name="description" cols="30" rows="5" ref={register({ required: true })} placeholder="Description"></textarea>
                <br/>
                {errors.description && <span className='text-danger'>Write your description</span>}
                <br/>
                <button className="brand-btn" type="submit">Submit</button>
             </form>
        </div>
    );
};

export default CustomerReview;