import React from "react";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-md bg-body-tertiary">
  <div className="container">
    <a className="navbar-brand" href="#!">Azza Store</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#!">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#!">Features</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#!">Pricing</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#!">Disabled</a>
        </li>
      </ul>
    </div>
  </div>
</nav>



    );
}

export default Navbar;
