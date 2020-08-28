import React from 'react';
import { withRouter } from 'react-router-dom';
import './css/Products.css';

const Filter = ({ categories, searchResult, history }) => {
   console.log('history', history);
   const handleClick = (category) => {
      //
      searchResult(category, history);
   };
   return (
      <>
         {categories &&
            categories.map((category) => (
               <button
                  className="filter-options"
                  key={category._id}
                  onClick={() => handleClick(category.name)}
               >
                  {category.name}
               </button>
            ))}
      </>
   );
};

export default withRouter(Filter);
