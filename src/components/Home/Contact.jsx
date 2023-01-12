import React from 'react'
import Contacts from "../../assets/Contact.png"

const Contact = () => {
  return (
    <div className="Contact__header">
          <div className="Contact__header-container">
            <div className="Contact__header-container-header">
                <h1>Get In Touch</h1>
                <p>We are here for you! How can we help?</p>
            </div>
            <div className="Contact__header-container-form">
                <form className="Contact__header-form">
                    <label htmlFor='Full Name'>Full Name</label>
                    <input type="text" name="fname" id="fname" placeholder="Enter your Fullname" ></input>
                    <label htmlFor='Email'>Email</label>
                    <input type="text" name="Email" id="Email" placeholder="Enter your Email"></input>
                    <label htmlFor='Comments'>Comments</label>
                    <input type="text" name="Comment" id="Comment" placeholder="Enter your Comments"></input>   
                </form>
                <button type='button'>Submit</button>
            </div>
          </div>
          <div className="Contact__header-container-Contacts">
          <div className="Contact__header-container-img">
            <img src={Contacts} alt="contacts"></img>
          </div>
          
          </div>
    </div>
  )
}

export default Contact