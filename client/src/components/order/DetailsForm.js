import React from 'react';

const DetailsForm = ({
   details,
   details: {
      firstName,
      lastName,
      email,
      mobileNumber,
      address,
      city,
      pincode,
   },
   setDetails,
}) => {
   const handleChange = (e) => {
      setDetails({
         ...details,
         [e.target.id]: e.target.value,
      });
   };

   return (
      <div className="col-sm-4">
         <h4 class="my-4">Billing Address</h4>
         <form>
            <div class="form-row">
               <div class="col-md-6 form-group">
                  <label for="firstName">First Name</label>
                  <input
                     type="text"
                     class="form-control"
                     id="firstName"
                     placeholder="First Name"
                     value={firstName}
                     onChange={handleChange}
                  ></input>
                  <div class="invalid-feedback">
                     Valid first name is required.
                  </div>
               </div>

               <div class="col-md-6 form-group">
                  <label for="lastName">Last Name</label>
                  <input
                     type="text"
                     class="form-control"
                     id="lastName"
                     placeholder="Last Name"
                     value={lastName}
                     onChange={handleChange}
                  ></input>
                  <div class="invalid-feedback">
                     Valid last name is required.
                  </div>
               </div>
            </div>
            <div class="form-group">
               <label for="email">Email</label>
               <div class="input-group">
                  <div class="input-group-prepend">
                     <span class="input-group-text">@</span>
                  </div>
                  <input
                     type="email"
                     class="form-control"
                     id="email"
                     placeholder="test@example.com"
                     value={email}
                     onChange={handleChange}
                     required
                  ></input>
                  <div class="invalid-feedback">Your username is required.</div>
               </div>
               <label for="mobileNumber">Mobile Number</label>
               <div class="input-group">
                  <div class="input-group-prepend">
                     <span class="input-group-text">@</span>
                  </div>
                  <input
                     type="number"
                     class="form-control"
                     id="mobileNumber"
                     placeholder="test@example.com"
                     value={mobileNumber}
                     onChange={handleChange}
                     minLength={10}
                     maxLength={10}
                     required
                  ></input>
                  <div class="invalid-feedback">
                     Your Mobile Number is required.
                  </div>
               </div>
            </div>

            <div class="form-group">
               <label for="address">Address</label>
               <textarea
                  type="text"
                  class="form-control"
                  id="address"
                  placeholder="1234 Main Street"
                  value={address}
                  onChange={handleChange}
                  required
               ></textarea>
               <div class="invalid-feedback">
                  Please enter your shipping address.
               </div>
            </div>
            <div class="row">
               <div class="col-md-4 form-group">
                  <label for="city">City</label>
                  <input
                     type="text"
                     class="form-control"
                     id="city"
                     placeholder="Your City Name"
                     value={city}
                     onChange={handleChange}
                     required
                  ></input>
                  <div class="invalid-feedback">
                     Please provide a valid city.
                  </div>
               </div>

               <div class="col-md-4 form-group">
                  <label for="pincode">Postcode</label>
                  <input
                     type="text"
                     class="form-control"
                     id="pincode"
                     placeholder="Pincode Here"
                     value={pincode}
                     onChange={handleChange}
                     required
                  ></input>
                  <div class="invalid-feedback">Postcode required.</div>
               </div>

               <div class="form-check">
                  <input
                     type="checkbox"
                     class="form-check-input"
                     id="shipping-adress"
                  ></input>
                  Shipping address is the same as my billing address
                  <label for="shipping-adress" class="form-check-label"></label>
               </div>

               <div class="form-check">
                  <input
                     type="checkbox"
                     class="form-check-input"
                     id="same-adress"
                  ></input>
                  Save this information for next time
                  <label for="same-adress" class="form-check-label"></label>
               </div>

               <hr></hr>
            </div>
         </form>
      </div>
   );
};

export default DetailsForm;
