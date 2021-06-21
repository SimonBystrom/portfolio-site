import React from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_n3bvy9e', 'template_hv581ua', e.target, 'user_lUNHW9Mc1Nq8t3yMnorGA')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  }

  return(
    <div className="d-flex justify-content-center align-items-center contact">
      <div className="contact-container">
        <i class="fas fa-paper-plane"></i>
        <span className="anchor" id="contact"></span>
        <form className="contact-form" onSubmit={sendEmail}>
          <input type="hidden" name="contact_number" />
          <div className="form-group">
            <label htmlFor="sender-name">Name</label>
            <input className="form-control" id="sender-name" type="text" name="name" />
          </div>
          <div className="form-group">
            <label htmlFor="sender-email">Email</label>
            <input className="form-control" id="sender-email" type="email" name="email" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea className="form-control" id="message" name="message" />
          </div>
          <input class="button button-send" type="submit" value="Send" />
        </form>
      </div>
    </div>
  )
}

export default Contact