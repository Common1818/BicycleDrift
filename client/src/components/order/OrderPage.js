import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import DetailsForm from './DetailsForm';
import { fetchOrder, deleteOrder } from '../../actions/order';
import { redirectToPaytm } from '../../actions/payment';
import './css/OrderPage.css';
import Loader from '../layout/Loader';

const OrderPage = ({
   fetchOrder,
   deleteOrder,
   order,
   order: { products, total },
   match,
   user,
   redirectToPaytm,
}) => {
   const [details, setDetails] = useState({
      firstName: '',
      lastName: '',
      email: '',
      address: '',
      city: '',
      pincode: '',
      mobileNumber: '',
   });

   details.firstName = user && user.firstName;
   details.lastName = user && user.lastName;
   details.email = user && user.email;

   const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'INR',
   });

   useEffect(() => {
      fetchOrder(match.params.orderId);
   }, []);

   const payment = async (e) => {
      e.preventDefault();
      try {
         const orderId = match.params.orderId;
         const params = {
            amount: `${total}.00`,
            mobile: details.mobileNumber,
            email: details.email,
         };

         redirectToPaytm(params, orderId, user._id);
      } catch (err) {
         console.log(err);
      }
   };

   return (
      <div className="order-page-container container-lg">
         {products ? (
            <>
               {' '}
               <div className="row">
                  <div className="col-sm-8">
                     <div className="products">
                        {products &&
                           products.map((prod) => {
                              return (
                                 <div className="product">
                                    <img src={prod.image} alt="" />
                                    <div className="desc">
                                       <h3>{prod.name}</h3>
                                       <h3>{prod.price}</h3>
                                       <h6>{prod.color}</h6>
                                       <h6>X {prod.quantity}</h6>
                                    </div>
                                 </div>
                              );
                           })}

                        <h2>SubTotal: {formatter.format(total)}</h2>
                     </div>
                  </div>
                  <DetailsForm details={details} setDetails={setDetails} />
               </div>
               <div className="transac-buttons">
                  <button
                     onClick={(e) => {
                        e.preventDefault();
                        deleteOrder(order._id);
                     }}
                  >
                     Cancel
                  </button>
                  <button onClick={payment}>Pay</button>
               </div>
            </>
         ) : (
            <Loader />
         )}
      </div>
   );
};

const mapStateToProps = (state) => ({
   order: state.order.order,
   user: state.auth.user,
});

export default connect(mapStateToProps, {
   fetchOrder,
   deleteOrder,
   redirectToPaytm,
})(OrderPage);
