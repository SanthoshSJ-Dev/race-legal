import React from "react";

const ContactUs = () => {
  return (
    <>
      <div className="contact_us section" id="contact">
        <h1>Contact Us</h1>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7774.67769008817!2d80.199655!3d13.014081!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526739cb1e0481%3A0xfd5bc7307cf14b7e!2sOlympia%20Platina!5e0!3m2!1sen!2sin!4v1690384480059!5m2!1sen!2sin"
          width="100%"
          height="300"
          style={{ border: "0" }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Map"
        ></iframe>

        <div className="address_full">
          <p className="address">
            <span>Address</span>
            <br />
            9th Floor, Olympia platina, Guindy Industrial Estate,
            <br /> Guindy, Chennai 600032
          </p>

          <div className="contact">
            <p>info@raceinnovations.in, legal@raceinnovations.in</p>
            <p>
              <a href="tel:+91 8072098352">+91 8072098352</a>, 
              <a href="tel: +91 9003031527"> +91 9003031527</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
