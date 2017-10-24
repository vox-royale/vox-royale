import React from 'react';
import Link from './Link';
import './navbar.css';

class Navbar extends React.Component {

  render() {

      return (
        <nav className="navbar navbar-default">
          <div className="container-fluid" id="navBarColor">
            
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
              </button>
              <a className="navbar-brand" href="" id="brandName" >VOX Royale</a>
            </div>

            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav">
                <li className="first" ><Link url="http://www.google.com" name="Home" /></li>
          
              
              </ul>
              <ul className="nav navbar-nav navbar-right">
                <li><Link url="http://www.bbc.com" name="Login"/></li>
              </ul>
            </div> 
          </div> 
        </nav>
    )
  }


}

export default Navbar;