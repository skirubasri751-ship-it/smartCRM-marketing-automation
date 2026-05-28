import React, { useState } from "react";
import axios from "axios";
import Sidebar from "../components/Sidebar";

function Contact() {

  const [message,setMessage] = useState({
    name:"",
    email:"",
    message:""
  });

  const handleSubmit = async(e) => {

    e.preventDefault();

    try{

      await axios.post(
        "https://smart-crm-marketing-automation.vercel.app/api/messages",
        message
      );

      alert("Message Sent Successfully");

      setMessage({
        name:"",
        email:"",
        message:""
      });

    }catch(error){

      alert("Message Not Sent");

    }
  };

  return (

    <div className="app">

      <Sidebar />

      <div className="main-content">

        <h1 className="page-title">
          CONTACT
        </h1>

        <form
          className="form-container"
          onSubmit={handleSubmit}
        >

          <input
            type="text"
            placeholder="Your Name"
            value={message.name}
            onChange={(e)=>
              setMessage({
                ...message,
                name:e.target.value
              })
            }
          />

          <input
            type="email"
            placeholder="Your Email"
            value={message.email}
            onChange={(e)=>
              setMessage({
                ...message,
                email:e.target.value
              })
            }
          />

          <textarea
            rows="5"
            placeholder="Your Message"
            value={message.message}
            onChange={(e)=>
              setMessage({
                ...message,
                message:e.target.value
              })
            }
          />

          <button className="btn">
            Send Message
          </button>

        </form>

      </div>

    </div>
  );
}

export default Contact;