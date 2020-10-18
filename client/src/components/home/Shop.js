import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { searchResult } from '../../actions/products';
import './css/Shop.css';
import ForKids from './Images/ForKids.webp';
import ForAdults from './Images/ForAdults.webp';
import Accessories from './Images/Accessories.webp';

const Shop = ({ searchResult, history }) => {
   return (
      <div className="shop-now ">
         <div className="row">
            <div className="col-sm-5">
               <img
                  src={ForKids}
                  alt=""
                  onClick={() => searchResult('kids', history)}
               />
            </div>
            <div className="col-sm-7">
               <img
                  src={ForAdults}
                  alt=""
                  onClick={() => searchResult('male female unisex', history)}
               />
               <img
                  src={Accessories}
                  className="mobile-hide"
                  alt=""
                  onClick={() => searchResult('Accessory', history)}
               />
            </div>
         </div>

         <img
            src={Accessories}
            alt=""
            className="mobile-visible"
            onClick={() => searchResult('Accessory', history)}
         />
      </div>
   );
};

export default connect(null, { searchResult })(withRouter(Shop));
