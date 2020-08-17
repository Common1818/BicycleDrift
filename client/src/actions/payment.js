import axios from 'axios';

export const redirectToPaytm = (details, orderId, userId) => async (
   dispatch
) => {
   const config = {
      headers: {
         'Content-Type': 'application/json',
      },
   };

   const body = { ...details };
   try {
      const res = await axios.post(
         `/api/payment/${userId}/${orderId}`,
         body,
         config
      );
   } catch (err) {
      console.log(err);
   }
};
