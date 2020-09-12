import React from "react";
import "./css/AboutChawla.css";

const AboutChawla = () => {
  return (
    <div className="about-container">
      <main className="about">
        <div className="">
          <section className="grid info">
            <div className="column-xs-12 column-md-1">
              <div className="about">
                <h1 className="section-heading">About Us</h1>
              </div>
            </div>
            <div className="column-xs-12 column-md-4 about-image">
              <img
                title="View Our image gallery"
                alt=" "
                onClick={() => {
                  window.open(
                    "https://www.google.com/maps/uv?pb=!1s0x390cdc23ac9b011f:0x18128ca1fa136374!3m1!7e115!4shttps://lh5.googleusercontent.com/p/AF1QipPPxkrYI3VX-AOBlVRzXJwip5-4jtzpfRcX3PLA%3Dw568-h320-k-no!5svdchawla+cycle+store+-+Google+Search!15zQ2dJZ0FRPT0&imagekey=!1e10!2sAF1QipPPxkrYI3VX-AOBlVRzXJwip5-4jtzpfRcX3PLA&hl=en&sa=X&ved=2ahUKEwjfptP9j-TrAhXJXCsKHVMgCqoQoiowFHoECBwQBg",
                    "_blank",
                    "toolbar=yes,scrollbars=yes,resizable=yes,top=200,left=400,width=600,height=600"
                  );
                }}
                src="http://drive.google.com/uc?export=view&id=17ewdYfIHUDDCxNjHL8q-bjhfPH-Kd2Ns"
              ></img>
            </div>
            <div className="column-xs-12 column-md-7">
              <div className="intro">
                <h2>BicycleDrift by VdChawlaCycleStore</h2>
                <p>
                  V D Chawla Cycle Store in Faridabad, Delhi is one of the
                  leading businesses in the Bicycle Dealers. Exciting people of
                  all ages with its collection of bicycles is V D Chawla Cycle
                  Store in Faridabad, Delhi. The store introduced itself to the
                  city in the year 1980. Bicycles are not merely ideal gifting
                  options for children but the perfect purchase for those who
                  prefer using more eco friendly modes of transport as well as
                  for those who enjoy cycling as a fitness regime. This store
                  caters exactly to the needs of these customers. In a country
                  like India, cycles are still considered to be one of the more
                  affordable means of transport for those on a budget. While
                  they are greatly used in smaller cities and townships, metro
                  cities too see an impressive number of people using cycles for
                  their respective needs. The store aims to offer its customers
                  not just an elaborate choice but a cycle that fits their body
                  type and personality best. Owning a location in the city at
                  Main Road, Near India College the place takes great pride in
                  holding favourable proximity to the surrounding areas. The
                  establishment is known among the locals. This makes it easier
                  for customers to navigate their way to this bicycle dealer.
                </p>
                <p>
                  BicycleDrift is the online extension of VdChawla cycle Store,
                  Here at BicycleDrift we follow the same ethics and customer
                  policies to ensure that the customer is Satisfied.
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default AboutChawla;
