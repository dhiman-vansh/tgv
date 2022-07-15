import React, { useRef } from "react";
import { MDBIcon } from "mdb-react-ui-kit"
import emailjs from "@emailjs/browser";
import "../app.css"

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_uoxwq3t', 'template_m2ozz2j', form.current, 'Ldio3uvOSFXk2He12')
      .then((result) => {
        console.log(result.text);
        console.log("msg sent ");
        window.location.reload(false);
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <>
      <div className="contact">
        <section>
          <h1> OUR LOCATION</h1>
          <h4> Getting here is easy. See our Google Map for detailed driving directions.</h4>
          <a href="#locat">
            <button> Maps</button>
          </a>
        </section>

        <div className="form">
          <section >
            <h3 style={{ fontSize: "40px", fontWeight: "600" }}>Give Us a Call On</h3>
            <div className="call">
              <section>
                <ol>+91-9068025401</ol>
                <ol>+91-9068025301</ol>
                <ol>+91-9411150250</ol>
              </section>
              <section>
                <MDBIcon style={{ fontSize: "100px" }} icon="mobile" />
              </section>
            </div>


          </section>
          <section>
            <form ref={form} onSubmit={sendEmail}>
              <label>Name</label>
              <input type="text" name="user_name" />
              {/* <br></br> */}
              <label>Email</label>
              <input type="email" name="user_email" />
              {/* <br></br> */}
              <label>Message</label>
              <textarea name="message" />
              <br></br>
              <input type="submit" value="Send" />
            </form>
          </section>


        </div>

        <div className="locat" id="locat">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13738.556092853874!2d78.1097161!3d30.5877341!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xeacb7328f10e4206!2sThe%20Goat%20Village%2C%20Nag%20Tibba!5e0!3m2!1sen!2sin!4v1657779909299!5m2!1sen!2sin"
            width={"100%"}
            height={"500px"}
          />
        </div>
      </div>
    </>
  )
}