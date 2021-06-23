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
      const alert = document.querySelector('.alert-email-success');
      alert.addEventListener('transitionend', (e) => {
        setTimeout(()=> {
          alert.classList.remove('alert-active')
        }, 4000)
      })
      alert.classList.add('alert-active')

  }

  return(
    <div className="d-flex justify-content-center align-items-center contact">
      <div data-aos="fade-up" className="contact-container">
        <i className="fas fa-paper-plane"></i>
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
          <div className="form-button-container">
            <input className="button button-send" type="submit" value="Send" />
            <div className="alert-email-success">
              <i className="fas fa-check-square"></i>
              <p>Thank you for reaching out!</p>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact
