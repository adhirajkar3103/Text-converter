import React from 'react'

function About(props) {
    return (
        <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel" style={props.style}>
  <div className="offcanvas-header">
    <h5>About</h5>
    <button type="button" className={props.btnColor} data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div className="offcanvas-body">
        <p>Easily convert text between different letter cases: lower case, UPPER CASE and remove spaces online !</p>
        <p>Made by Adhiraj Kar</p>
  </div>
  <footer classNameName="text-center mb-2">Copyright &copy; 2021</footer>
</div>
    )
}

export default About
