import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useForm } from "react-hook-form";
import { UserContext } from '../../../App';
import './OrderForm.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudUploadAlt} from '@fortawesome/free-solid-svg-icons'

const OrderForm = ({setShow}) => {

    //Item, form value, form file value and set id usercontext
    const [idItem,setIdItem] = useState({});
    const [formInfo,setFormInfo] = useState({});
    const [file,setFile] = useState(null);
    const{itemId} = useContext(UserContext);

    //Load data by id
    useEffect(()=>{
        fetch(`http://localhost:5000/findId`)
        .then( res => res.json())
        .then( data =>{
            const findId = data.find( item => item._id === itemId)
            setIdItem(findId);
        })
    },[])

    //Form input value handler
    const handleBlur = e =>{
        const newInfo = {...formInfo};
        newInfo[e.target.name] = e.target.value;
        setFormInfo(newInfo);
    };

    //Form file value handler
    const handleFileChange = e => {
        const file = e.target.files[0];
        setFile(file);
    };

    //React Hook useForm
    const { register,errors } = useForm();

    //Handle submit a order
    const handleSubmit = (e) =>{
        const formData = new FormData()
        formData.append('file', file);
        formData.append('name', formInfo.name);
        formData.append('email', formInfo.email);
        formData.append('project', formInfo.project);
        formData.append('projectDetails', formInfo.projectDetails);
        formData.append('price', formInfo.price);
        formData.append('projectId', itemId);
        formData.append('status', "Pending");

        fetch('https://damp-cliffs-08620.herokuapp.com/addOrder', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            if(data){
                setShow(false);
            }
        })

        e.preventDefault()
    };
 
    return (
        <div className="form-area" >
            <form  onSubmit={handleSubmit}>

                <input onBlur={handleBlur} name="name"  ref={register({required: true})} placeholder="Your name / company's name"/>
                <br/>
                {errors.name && <span className="text-danger">write your name / company's name</span>}
                <br/>

                <input onBlur={handleBlur} name="email"  ref={register({ required: true })} placeholder="your email address" />
                <br/>
                {errors.email && <span className="text-danger">write your email</span>}
                <br/>

                <input onBlur={handleBlur} name="project" defaultValue={idItem && idItem.title } ref={register({ required: true })} placeholder="your project" />
                <br/>
                {errors.project && <span className="text-danger">write your project</span>}
                <br/>

                <textarea onBlur={handleBlur} name="projectDetails" id="" cols="30" rows="5" placeholder="project details"></textarea>
                <br/>
                {errors.projectDetails && <span className="text-danger">write your project details</span>}
                <br/>

                <div className="upload-info d-flex"> 
                    <div className="upload-price"> 
                        <input onBlur={handleBlur} name="price" ref={register({ required: true })} placeholder="your price" />
                        <br/>
                        {errors.price && <span className="text-danger">write your price</span>}
                    </div>
                    <div className="upload-file"> 
                        <label className="file-upload ml-4 d-flex align-items-center  justify-content-center" htmlFor="icon" style={{ height: '40px',width: '200px',borderRadius: '5px',backgroundColor: "rgb(222, 255, 237)",color: "rgb(0, 148, 68)", border: "1px solid rgb(0, 148, 68)"}}>
                            <FontAwesomeIcon className="mr-2" icon={faCloudUploadAlt} />
                            <input style={{display: 'none'}} onChange={handleFileChange} type="file" name="file" id="icon" ref={register({ required: true })}/> 
                            Upload Project File 
                        </label>
                    </div>
                </div>

                <br/>
                <button className="brand-btn" type="submit">Send</button>
            </form>
        </div>
    );
};

export default OrderForm;