import React , {useState , useEffect, useRef} from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
    const form = useRef();
   

    const sendEmail = (e) => {
        alert("SEND Sucessfully")
        e.preventDefault();
    
        emailjs.sendForm('service_vaoklpm', 'template_vvxlmmk', form.current, 'YD_tRlJ6VNLXm4KN7')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
      };
    
  return (
    <section className="contact-section" id='contact'>
    <div className="container">
      <h2>Contact Us</h2>
      <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="name" />
      <label>Email</label>
      <input type="email" name="email" />
      <label>Message</label>
      <textarea name="message" />
  
    <input type="submit" value="Send"  className='submit-hov'/>
 
    
    </form>
    </div>
  </section>

  )
}

export default Contact
