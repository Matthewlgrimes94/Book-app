import React from "react";

function Nav(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="navbar-brand">Book finder</div>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <a className={props.page === "books" ? "nav-item nav-link active" : "nav-item nav-link "} href="/">Home</a>
          <a className={props.page === "saved" ? "nav-item nav-link active" : "nav-item nav-link "} href="/saved">Saved Books</a>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
