import React from "react";
import "./css/FAQ.css";

const FAQ = () => {
  return (
    <section className="faq-section">
      <div className="faq-container">
        <h2>FAQ's</h2>
        <div className="row">
          <div className="col-md-12 ">
            <div className="faq" id="accordion">
              <div className="card">
                <div className="card-header" id="faqHeading-2">
                  <div className="mb-0">
                    <h5
                      className="faq-title"
                      data-toggle="collapse"
                      data-target="#faqCollapse-2"
                      data-aria-expanded="false"
                      data-aria-controls="faqCollapse-2"
                    >
                      <span className="badge">1</span> Is BicycleDrift Safe?
                    </h5>
                  </div>
                </div>
                <div
                  id="faqCollapse-2"
                  className="collapse"
                  aria-labelledby="faqHeading-2"
                  data-parent="#accordion"
                >
                  <div className="card-body">
                    <p>
                      <b> BicycleDrift</b> is committed to respecting your
                      privacy, protection and transactions. We at{" "}
                      <b> BicycleDrift</b> care about your Security and Your
                      personal data is of top priority to us. To ensure high
                      grade security <b>BicycleDrift</b> uses best encryption
                      software in the industry & your information is encrypted
                      an protected with the - Secure Socket Layer
                      <b>(SSL)</b> technology to protect the data you send to us
                      over the internet. All payment transactions you make on
                      this site are processed and handled by <b>Paytm</b> and
                      all transcations happen on their server, making
                      transactions effortless and Safe.
                    </p>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" id="faqHeading-1">
                  <div className="mb-0">
                    <h5
                      className="faq-title"
                      data-toggle="collapse"
                      data-target="#faqCollapse-1"
                      data-aria-expanded="true"
                      data-aria-controls="faqCollapse-1"
                    >
                      <span className="badge">2</span>Can i Cancel my order
                      after Making a Purchase?
                    </h5>
                  </div>
                </div>
                <div
                  id="faqCollapse-1"
                  className="collapse"
                  aria-labelledby="faqHeading-1"
                  data-parent="#accordion"
                >
                  <div className="card-body">
                    <p>
                      You can <b>Cancel</b> your order anytime before it has
                      been <i>Shipped</i>. Once Your Order has been shipped
                      which usually takes 2-4 Working Days, you can not Cancel
                      it. Once you cancel your order amount will be refunded to
                      your bank account within 3-4 working Days.
                    </p>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" id="faqHeading-3">
                  <div className="mb-0">
                    <h5
                      className="faq-title"
                      data-toggle="collapse"
                      data-target="#faqCollapse-3"
                      data-aria-expanded="false"
                      data-aria-controls="faqCollapse-3"
                    >
                      <span className="badge">3</span>Can i return my product if
                      i don't like it ?
                    </h5>
                  </div>
                </div>
                <div
                  id="faqCollapse-3"
                  className="collapse"
                  aria-labelledby="faqHeading-3"
                  data-parent="#accordion"
                >
                  <div className="card-body">
                    <p>
                      You <b>can Return</b> a Product if you receive something
                      other than what you ordered, But you <b>can't</b> return a
                      product if you don't like it, be sure before ordering. You
                      can also take our help before making a purchase of our{" "}
                      <b>WhatsApp</b> based <b>customer service</b>.
                    </p>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" id="faqHeading-4">
                  <div className="mb-0">
                    <h5
                      className="faq-title"
                      data-toggle="collapse"
                      data-target="#faqCollapse-4"
                      data-aria-expanded="false"
                      data-aria-controls="faqCollapse-4"
                    >
                      <span className="badge">4</span>How do we Ship?
                    </h5>
                  </div>
                </div>
                <div
                  id="faqCollapse-4"
                  className="collapse"
                  aria-labelledby="faqHeading-4"
                  data-parent="#accordion"
                >
                  <div className="card-body">
                    <p>
                      We use an outside shipping company to ship orders, and a
                      credit card processing company to validate charges for
                      goods. These companies have agreed with us that they do
                      not retain, share, store or use personally identifiable
                      information for any secondary purposes. These third
                      parties are not allowed to use personally identifiable
                      information except for the purpose of providing these
                      services. we will pass that user's relevant personal
                      information securely over <b>SSL</b>, which may include{" "}
                      <i>name</i>,<i>postal address</i>, and any other{" "}
                      <i>required billing information</i>, to that specific
                      third party.
                    </p>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" id="faqHeading-5">
                  <div className="mb-0">
                    <h5
                      className="faq-title"
                      data-toggle="collapse"
                      data-target="#faqCollapse-5"
                      data-aria-expanded="false"
                      data-aria-controls="faqCollapse-5"
                    >
                      <span className="badge">5</span> Changes to this Privacy
                      Policy?
                    </h5>
                  </div>
                </div>
                <div
                  id="faqCollapse-5"
                  className="collapse"
                  aria-labelledby="faqHeading-5"
                  data-parent="#accordion"
                >
                  <div className="card-body">
                    <p>
                      We reserve the right to modify the Terms of Use, Privacy
                      Policy or other disclaimers or legal terms at any time
                      without giving you prior notice. Your use of The Site
                      following any such modification constitutes your agreement
                      to follow and be bound by such things as modified. For
                      this reason, we encourage you to review the Privacy Policy
                      and other terms whenever you use The Site.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
