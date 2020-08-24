import React from 'react';
import whatsappLogo from './whatsapp.png';

const Contact = () => {
   return (
      <div className="m-5">
         <a
            href="http://wa.me/919034032740?text=I'm%20interested%20in%20purchasing%20a%20bicycle"
            target="_blank"
            rel="noopener noreferrer"
         >
            <img src={whatsappLogo} alt="" />
         </a>
      </div>
   );
};

export default Contact;
