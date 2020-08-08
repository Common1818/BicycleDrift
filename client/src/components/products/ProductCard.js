import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import './css/ProductCard.css';

const ProductCard = ({
   product: {
      _id,
      name,
      brand,
      price,
      images,
      description,
      modelyear,
      gender,
      category,
      color,
   },
}) => {
   const handleHover = (id) => {
      $(`.hover${id}`).addClass('animate');
   };

   const handleLeave = (id) => {
      $(`.hover${id}`).removeClass('animate');
   };

   return (
      <Fragment>
         <div id='make-3D-space'>
            <div
               id='product-card'
               className={'hover' + _id}
               onMouseOver={() => handleHover(_id)}
               onMouseLeave={() => handleLeave(_id)}
            >
               <div id='product-front'>
                  <div className='shadow'></div>
                  <img src={images[0]} alt={description && description} />
                  <div className='image_overlay'></div>
                  <div id='view_details'>View details</div>
                  <div className='stats'>
                     <div className='stats-container'>
                        <span className='product_price'>&#8377; {price}</span>
                        <span className='product_name'>
                           {' '}
                           {name} {modelyear && modelyear}
                        </span>
                        <p>
                           <strong>{color && color}</strong>{' '}
                           <strong>{gender && gender}</strong>
                        </p>

                        <div className='product-options'>
                           <ul>
                              {brand && <li>Brand: {brand.brandname}</li>}
                              {category && <li>Category: {category.name}</li>}
                              {/* stars */}
                           </ul>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div id='product-bottom'>
               <div id='product-bottom-card'>
                  <Link className='btn btn--primary'>Buy Now</Link>
                  <Link className='btn btn--primary float-right'>
                     Add to Cart
                  </Link>
               </div>
            </div>
         </div>
      </Fragment>
   );
};

export default ProductCard;
