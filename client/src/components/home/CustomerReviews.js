import React from "react";
import "./css/CustomerReviews.css";

const CustomerReviews = () => {
  const reviews = [
    {
      id: 1,
      name: "Keeshav Sharma",
      img:
        "https://lh3.googleusercontent.com/a-/AOh14GjzIvf8K3B0N6Je3aw0ICdh8OONfDmFFds2q6mf=s40-c0x00000000-cc-rp",
      review:
        "The bicycle is really good and comfortable. The bike was delivered by BicycleDrift workers and packing was really good and Received in a good condition and it is really worth buying. Thanks for a great service and a great cycle!",
    },
    {
      id: 2,
      name: "Umang Ahuja",
      img:
        "https://lh3.googleusercontent.com/-s4seeoFjehU/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuckbQTXCmCS1cpjnzu5fbHCSVJfQMA/s40-c0x00000000-cc-rp/photo.jpg",
      review:
        "NICE VARIETY ,INSURANCE FACIALITY ALSO AVAILABLE,NICE AMBIENCE ,THEY ALSO DO PROPER SANITIZATION OF CYCLE,RESPONSIVE TEAM ,OVERALL VERY NICE EXPERIANCE AND BEST PRICE OFFERED.",
    },
    {
      id: 3,
      name: "Peddle Yatri",
      img:
        "https://lh3.googleusercontent.com/a-/AOh14GixP3yETqHs78zmFWMPWZhcC1nFlZZAyxPO5gpJI6s=s40-c0x00000000-cc-rp",
      review: `One of the best store in Faridabad. You can get any type of cycle in the store. They will explain you everything in detail and suggest you the best cycle as per your need. Rates are very amazing. Best price guaranteed.
Thye have all type of varieties of cycle. From kids to Racing cycles.
Really had a good experience at the store .
Trusted people. Trusted store.`,
    },
    {
      id: 4,
      name: "Mohit Gulati",
      img:
        "https://lh5.googleusercontent.com/-TDEo0DR3os0/AAAAAAAAAAI/AAAAAAAAAAA/AMZuucme8-REix-ylDZgR1G0uIE4CBxz4Q/s40-c0x00000000-cc-rp/photo.jpg",
      review: ` I purchased Kross xplore bicycle of Kross. I had great experience and owner Mr. Dev is so friendly and showed a right product they treat me very well in rush time . I specially go there from delhi To faridabad for bicycle they have finance options also. Best bicycle store in faridabad. You Will get Variety of bicycles At the best prices guaranteed customer support is also very good highly recommend 👍`,
    },
    {
      id: 5,
      name: "Mahesh Dixit",
      img:
        "https://lh3.googleusercontent.com/a-/AOh14GjXkytGCECYpKHkOS7WS13OBhb6wsnA_e5Fr2ms2A=s40-c0x00000000-cc-rp",
      review: `Very reliable cycle store I am very appreciate with the behaviour of owner and the staff also .This store has best variety of latest cycle.thanks vd chawla`,
    },
    {
      id: 6,
      name: "Jyoti Sachdeva",
      img:
        "https://lh3.googleusercontent.com/-Jklkvb0W3Eo/AAAAAAAAAAI/AAAAAAAAAAA/AMZuucnJVHeEicJqlZf2-HZfBlQ5M4eXqg/s40-c0x00000000-cc-rp/photo.jpg",
      review: `A great cycle store of that place having all varieties of cycles with a cost ranging from low to high. The head of the store are very humble and polite with their customers. Must visit the store to know more about it.`,
    },
    {
      id: 7,
      name: "Tarun Narula",
      img:
        "https://lh4.googleusercontent.com/-G6tY1mjqWZ0/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuclUrUTW1Xx9KqUfX-ZZEfnhP6t2FA/s40-c0x00000000-cc-rp-ba3/photo.jpg",
      review: `Very nice experience, variety of cycles available & service with a smile. Mr. Tilak Chawla & his team are highy responsive. Best wishes`,
    },
    {
      id: 8,
      name: "Satyam Choubey",
      img:
        "https://lh3.googleusercontent.com/a-/AOh14GgWPyx6aWi-pzxdKybVYU_mdV954oHlsy57S7ZoYw=s40-c0x00000000-cc-rp",
      review: `Very nice experience, variety of cycles available & service with a smile. The head of the store are very humble and polite with their customers.`,
    },
  ];

  const reviewArray = [];
  for (var i = 0; i < 3; i++) {
    reviewArray.push(reviews[Math.floor(Math.random() * 5)]);
  }
  var j = 0;

  return (
    <>
      <div className="testimonials text-center">
        <div className="test-cont">
          <h3>Customer Testimonials</h3>
          <div className="row">
            {reviewArray &&
              reviewArray.map((review) => {
                j++;
                return (
                  <div key={j} className="col-md-6 col-lg-4">
                    <div className="card border-light bg-light text-center">
                      <i
                        className="fa fa-quote-left fa-3x card-img-top rounded-circle"
                        aria-hidden="true"
                      ></i>
                      <div className="card-body blockquote">
                        <p className="card-text">{review.review}</p>

                        <cite title="Source Title">
                          <b>{review.name}</b>
                        </cite>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomerReviews;
