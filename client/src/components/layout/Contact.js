import React from "react";
import "./css/Contact.css";

const Contact = () => {
  return (
    <div className="whatsapp-icon m-5">
      <a
        onClick={() => {
          window.open(
            "http://wa.me/919034032740?text=I'm%20interested%20in%20purchasing%20a%20bicycle",
            "_blank",
            "toolbar=yes,scrollbars=yes,resizable=yes,top=200,left=400,width=600,height=600"
          );
        }}
        rel="noopener noreferrer"
      >
        <div>
          <img
            className=""
            src="https://www.svgrepo.com/show/303150/whatsapp-symbol-logo.svg"
            alt=""
          />
          <img
            className="message-gif border"
            src="https://media.tenor.com/images/0b9a772a20d400e4181609543b995c5b/tenor.gif"
            alt=""
          />
        </div>
      </a>
    </div>
  );
};

export default Contact;
