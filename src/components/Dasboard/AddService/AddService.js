import React from 'react';
import { useState } from 'react';
import { useForm } from "react-hook-form";
import './AddService.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudUploadAlt} from '@fortawesome/free-solid-svg-icons'

const AddService = ({setAdminShow}) => {

    // React hook useform
    const { register, errors } = useForm();

    //Form info and file state
    const [info,setInfo] = useState({});
    const [file,setFile] = useState(null);

    // Input value Handle blud
    const handleBlur = e =>{
        const newInfo = {...info};
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    };

    //Input file Value Handle Change
    const handleFileChange = e => {
        const file = e.target.files[0];
        setFile(file);
    };

    //Form Handle Submit
    const handleSubmit = (e) => {

        const formData = new FormData()
        formData.append('file', file);
        formData.append('title', info.title);
        formData.append('description', info.description);

        fetch('https://damp-cliffs-08620.herokuapp.com/addServices', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            if(data){
                setAdminShow(false);
            }
        })
        
        e.preventDefault()
    };

    
    return (
        <div>
            <form  onSubmit={handleSubmit}>

             <div className="form-area d-flex bg-white p-5"> 
                <div className="upload-info"> 

                    <label htmlFor="title">Service title</label> <br/>
                    <input onBlur={handleBlur} id="title" name="title" ref={register({ required: true })} placeholder="Enter title" />
                    <br/>
                    {errors.title && <span className="text-danger">enter the title</span>}
                    <br/>

                    <label htmlFor="desc">Description</label> <br/>
                    <textarea onBlur={handleBlur} name="description" id="desc" cols="30" rows="5" placeholder="Enter description" ref={register({ required: true })}></textarea>
                    <br/>
                    {errors.description && <span className="text-danger">enter the description</span>}

                </div>
                <div className="upload-img ml-5"> 
                <label className="file-upload mt-4 d-flex align-items-center  justify-content-center" htmlFor="icon" style={{ height: '40px',width: '200px',borderRadius: '5px',backgroundColor: "rgb(222, 255, 237)",color: "rgb(0, 148, 68)", border: "1px solid rgb(0, 148, 68)"}}>
                    <FontAwesomeIcon className="mr-2" icon={faCloudUploadAlt} />
                    <input style={{display: 'none'}} onChange={handleFileChange} type="file" name="file" id="icon" ref={register({ required: true })}/> 
                    Upload image 
                </label>
                <br/>
                    {errors.file && <span className="text-danger">Add a file</span>}

                </div>
             </div>
                
                <input className="brand-submit" type="submit" />
            </form>
        </div>
    );
};

export default AddService;