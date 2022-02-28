import React from 'react'

function Navbar(props) {
    return (
        <nav className={props.navbarStyle.class}>
  <div className="container-fluid">
    <h4>ＴＥＸＴ ＣＯＮＶＥＲＴＥＲ</h4>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">About</a>
        </li>
        <li className="nav-item">
          <button className={props.navbarStyle.btnClass} onClick={props.darkMode}>{props.navbarStyle.text}</button>
        </li>
      </ul>
    </div>
  </div>
</nav>
    )
}

export default Navbar
