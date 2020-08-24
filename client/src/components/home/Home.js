import React from 'react';
import OurPromise from './OurPromise';
import HomeCarousel from './Carousel';
import ShopOnBD from './ShopOnBD';
import CustomerReviews from './CustomerReviews';
import Contact from '../layout/Contact';

const Home = () => {
   return (
      <React.Fragment>
         <HomeCarousel />
         <OurPromise />
         <ShopOnBD />
         <CustomerReviews />
         <Contact />
      </React.Fragment>
   );
};

export default Home;
