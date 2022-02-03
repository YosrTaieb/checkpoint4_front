import React, { useRef } from "react";
import emailjs from "emailjs-com";

const Form = () => {

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm(
          "service_ahfdi9a",
          "template_7fcrcjh",
          e.target,
          "user_lYYFAWbKHQfpKqlbq1i4j"
        );
        alert("Thank you, for your message ! ");
        e.target.reset();
      };

  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);


  return (
    <div>
      <h1>Contact us</h1>
      <form onSubmit={sendEmail}>
        <div>
          <div>
            <label for="firstName" id="nameLabel">
              First Name : 
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              ref={firstNameRef}
              tabindex="1"
            />
          </div>
          <div>
            <label for="lastName">Last name : </label>
            <input type="text" id="lastName" ref={lastNameRef} tabindex="2" />
          </div>
        </div>
        <div>
          <label for="email">Email : </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="example@corp.com"
            ref={emailRef}
            tabindex="3"
          />
        </div>
        <div>
          <label for="message">Message : </label>
          <textarea
            placeholder="Start typing..."
            name="message"
            ref={messageRef}
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
