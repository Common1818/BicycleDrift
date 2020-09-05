import React from "react";

const DetailsForm = ({
  details,
  handleBilling,
  details: { firstName, lastName, email, mobileNumber, address, city, pincode },
  setDetails,
  billingDetails,
}) => {
  const handleChange = (e) => {
    setDetails({
      ...details,
      [e.target.id]: e.target.value,
    });
  };

  console.log(billingDetails);

  return (
    <div className="col-sm-4">
      <h4 className="my-4">Billing Address</h4>
      <form>
        <div className="form-row">
          <div className="col-md-6 form-group">
            <label htmlFor="firstName">First Name</label>
            <input
              placeholder={
                billingDetails ? billingDetails.firstName : "firstName"
              }
              required
              type="text"
              className="form-control"
              id="firstName"
              value={firstName}
              onChange={handleChange}
            ></input>
            <div className="invalid-feedback">
              Valid first name is required.
            </div>
          </div>

          <div className="col-md-6 form-group">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              className="form-control"
              id="lastName"
              placeholder={
                billingDetails ? billingDetails.lastName : "lastName"
              }
              value={lastName}
              onChange={handleChange}
            ></input>
            <div className="invalid-feedback">Valid last name is required.</div>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text">@</span>
            </div>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder={billingDetails ? billingDetails.email : "email"}
              value={email}
              onChange={handleChange}
              required
            ></input>
            <div className="invalid-feedback">Your username is required.</div>
          </div>
          <label htmlFor="mobileNumber">Mobile Number</label>
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text">+91</span>
            </div>
            <input
              type="number"
              className="form-control"
              id="mobileNumber"
              placeholder={
                billingDetails ? billingDetails.mobileNumber : "mobileNumber"
              }
              value={mobileNumber}
              onChange={handleChange}
              minLength={10}
              maxLength={10}
              required
            ></input>
            <div className="invalid-feedback">
              Your Mobile Number is required.
            </div>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="address">Address</label>
          <textarea
            type="text"
            className="form-control"
            id="address"
            value={address}
            onChange={handleChange}
            placeholder={billingDetails ? billingDetails.address : "address"}
            required
          ></textarea>
          <div className="invalid-feedback">
            Please enter your shipping address.
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 form-group">
            <label htmlFor="city">City</label>
            <input
              type="text"
              className="form-control"
              id="city"
              placeholder={billingDetails ? billingDetails.city : "city"}
              value={city}
              onChange={handleChange}
              required
            ></input>
            <div className="invalid-feedback">Please provide a valid city.</div>
          </div>

          <div className="col-md-4 form-group">
            <label htmlFor="pincode">Postcode</label>
            <input
              type="text"
              className="form-control"
              id="pincode"
              placeholder={billingDetails ? billingDetails.pincode : "pincode"}
              value={pincode}
              onChange={handleChange}
              required
            ></input>
            <div className="invalid-feedback">Postcode required.</div>
          </div>
          <div className="form-check billingbutton">
            <button className="btn-primary" onClick={handleBilling}>
              Use This Address
            </button>
          </div>

          <hr></hr>
        </div>
      </form>
    </div>
  );
};

export default DetailsForm;
