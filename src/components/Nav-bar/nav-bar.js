import React from 'react';
import './styles.css';


export default class FormUser extends React.Component {
 
  render() {
    return (
      <div className="nav-bar">
        <nav className="nav">
              <ul>
                  <li><a href="/">Home</a></li>
                  <li><a href="/login">Login</a></li>
                  <li><a href="/registry">Register</a></li>
              </ul>
        </nav>
        
      </div>
    );
  }
}