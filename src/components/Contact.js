import React from 'react'
import './Contact.css'

const Contact = () => {


    const agree = "You agree to providing your data to {name} who may contact you."

  return (
    <div className='contact'>
        <div className="cont-contain">
            <div className="cont-head">
                <h2>Contact Me</h2>
                <p>Hi there, contact me to ask me about anything you have in mind.</p>
            </div>
            <form className="cont-form">
                <div className="form-top">
                    <div className="first-names in-form" >
                        <label htmlFor="first_name">First Name</label>
                        <input type="text" id='first_name'  placeholder='Enter your first name'/>
                    </div>
                    <div className="last-name in-form">
                        <label htmlFor="last_name">Last Name</label>
                        <input type="text" id='last_name' placeholder='Enter your last name' />
                    </div>
                </div>
                <div className="email in-form">
                    <label htmlFor="email">Email</label>
                    <input type="text" id='email' placeholder='yourname@email.com' />
                </div>
                <div className="message in-form">
                    <label htmlFor="message">Message</label>
                    <textarea name="" id="message" cols="30" rows="10" placeholder="Send me a message and i'll replay you as soon as possible..."/>
                </div>
                <div className="checkbox">
                    <input type="checkbox" name="agree" id="agree" />
                    <label htmlFor="agree">{agree}</label>
                </div>
                <button id='btn_submit'>Send message</button>
            </form>
        </div>
    </div>
  )
}

export default Contact