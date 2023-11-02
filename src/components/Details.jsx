import React from 'react';
import d from '../images/lg.png'

const Details = () => {
    return (
        <section className="py-5">
  <div className="container">
    <div className="row">
      <div className="col-md-6">
        <h1>Product Title</h1>
        <h3>Product Category</h3>
        <h3>Product Price</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto magnam eligendi qui officia, sapiente illo quas incidunt, ipsum tempora voluptatibus in ratione possimus sint aperiam quod rerum nostrum accusamus laborum minus earum. Reiciendis nam quae asperiores eos architecto accusantium aperiam. Sequi temporibus veritatis accusantium amet? Neque, est. Praesentium, in itaque!</p>
      </div> {/* left text */}
      <div className="col-md-6 text-center">
        <img src={d} className="w-75" alt />
      </div> {/* right image */}
    </div> {/* row  */}
  </div> {/* container */}
</section>

    );
}

export default Details;
