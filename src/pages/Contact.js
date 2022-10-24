
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
 
const Contact = () => {
 const form = useRef();
 
//  const promise = new Promise((result) => {
//     result("You did it!");
//  })
 
 const sendEmail = (e) => {
   e.preventDefault(); // prevents the page from reloading when you hit “Send”
 
   emailjs.sendForm('service_z4jyqvl', 'template_cu8b933', form.current, 'BatLNw2N7hOBt9qEQ')
   .then(function(response) {
    console.log('SUCCESS!', response.status, response.text);
 }, function(error) {
    console.log('FAILED...', error);
     });
 };
 
 return (
   <form ref={form} onSubmit={sendEmail}>
     <label>Name</label>
     <input type="text" name="user_name" />
     <label>Email</label>
     <input type="email" name="user_email" />
     <label>Message</label>
     <textarea name="message" />
     <input type="submit" value="Send" />
   </form>
 );
};
 
export default Contact;
