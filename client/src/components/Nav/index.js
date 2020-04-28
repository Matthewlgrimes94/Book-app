import React from "react";

function Nav(props) {

  return (
    <nav className="navbar navbar-light bg-light justify-content-start">
      <div className="navbar-brand">Book finder</div>
      <a className={props.page === "books" ? "nav-item nav-link active" : "nav-item nav-link "} href="/">Home</a>
      <a className={props.page === "saved" ? "nav-item nav-link active" : "nav-item nav-link "} href="/saved">Saved Books</a>
    </nav>
  );
}

export default Nav;
