import React from 'react';
import './Header.css';

export default ({black}) => {
  return (
    <header className={black ? 'black' : ''}>
      <div className="header-logo">
        <a href="/">
          <img src="/logo.svg" alt="Netflix"/>
        </a>
      </div>
      <div className="header-user">
        <a href="/">
          <img src="/avatar.png" alt="Avatar"/>
        </a>
      </div>
    </header>
  );
}