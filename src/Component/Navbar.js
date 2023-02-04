import React from 'react'
import { Link } from 'react-router-dom';


export default function NavBar(props) {
 
  return (
    
    <>

      <nav className={`navbar navbar-expand-lg bg-${props.mode}`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">{props.title}</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link active" to="/about">About</Link>
              </li>

            </ul>

            
            <div className={`btn-group text-${props.mode === 'light' ? 'dark' : 'light'}`}  role="group" aria-label="Basic mixed styles example">
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable darkMode</label>

              <button type="button" className ="btn btn-danger "   onClick={props.toggelMode}>Red</button>
              <button type="button" className="btn btn-warning " onClick={props.toggelMode}>Yellow</button>
              <button type="button" className="btn btn-success" onClick={props.toggelMode}>Blue</button>
            </div>
           
          </div>
        </div>
      </nav>
    </>
  );
}
