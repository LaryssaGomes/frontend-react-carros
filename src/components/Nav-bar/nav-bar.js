import React from 'react';
import './styles.css';


export default class FormUser extends React.Component {
 
  render() {
    return (
      <>
        <nav className="nav">
              <ul>
                  <li><a href="/">Home</a></li>
                  <li><a href="/login">Login</a></li>
                  <li><a href="/registry">Register</a></li>
                  <li><a href="/contato">Contato</a></li>
                  <li><input type="search"/></li>
                 
              </ul>
        </nav>
        
        
      </>
    );
  }
}