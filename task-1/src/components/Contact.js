import React from "react";
import './Contact.css';
import { useForm } from "react-hook-form";
const Contact=()=>{

    const {
        register,
        handleSubmit,
        
      } = useForm()
    
      const onSubmit = (data) => console.log(data);
    return(
        <div className="body">
            <h2 style={{color:"white", margin:'60px'}} >Submit the form below to get in touch with me</h2>
            <div class="containercontact">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label for="fname" style={{fontFamily:"sans-serif",fontSize:"1.2rem"}}>Name</label>
                    <input type="text" placeholder="Your name.." {...register("firstName", { required: true })}/>
          
                    <label for="lname" style={{fontFamily:"sans-serif",fontSize:"1.2rem"}}>emailId</label>
                    <input type="text" placeholder="Your last name.." {...register('email', {
        required: 'Email is required',
        pattern: {
            value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            message: 'Please enter a valid email',
        },
    })}/>
          
          
                    <label for="message" style={{fontFamily:"sans-serif",fontSize:"1.2rem"}}>write your message</label>
                    <textarea id="subject" name="subject" {...register("message", { required: true, minLength: 20 })}  style={{height:"200px"}}></textarea>
          
                    <input type="submit" value="Submit"/>
          
                </form>
            </div>
        </div>
    )
}

export default Contact;