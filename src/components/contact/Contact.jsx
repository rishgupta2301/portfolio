import React from 'react';
import './contact.css'
import { BsWhatsapp, BsFillTelephoneFill} from "react-icons/bs"
import {MdOutlineEmail} from "react-icons/md"

const Contact = () => {
    return (
        <section id='contact'>
            <h5>Get in Touch</h5>
            <h2>Contact me</h2>
            <div className="container contact_container">
                <div className="contact_options">
                    <article className='contact_option'>
                        <MdOutlineEmail className='contact_option-icon'/>
                        <h4>Email</h4>
                        <h5>guptarishabh1122@gmail.com</h5>
                        <a href="mailto:guptarishabh1122@gmail.com" target="_blank">Send a message</a>
                    </article>
                    <article className='contact_option'>
                        <BsWhatsapp className='contact_option-icon'/>
                        <h4>WhatsApp</h4>
                        <h5>+91 8077184052</h5>
                        <a href="https://api.whatsapp.com/send?phone=+918077184052" target="_blank">Send a message</a>
                    </article>
                    <article className='contact_option'>
                        <BsFillTelephoneFill className='contact_option-icon'/>
                        <h4>Call</h4>
                        <h5>+91 8077184052</h5>
                        {/*<a href="https://api.whatsapp.com/send?phone=+918077184052" target="_blank">Send a message</a>*/}
                    </article>
                </div>

                {/*<div><form action="">*/}
                {/*    <input type="text" name='name' placeholder='Your Name' required/>*/}
                {/*    <input type="email" name='email' placeholder='Your Email' required/>*/}
                {/*    <textarea name="message"  rows="7" placeholder="Your Message" required />*/}
                {/*    <button type={"submit"} className="btn btn-primary">Send Your Message</button>*/}
                {/*</form></div>*/}



            </div>

        </section>
    );
}

export default Contact
