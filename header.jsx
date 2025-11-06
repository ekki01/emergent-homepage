import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header-main">
      <div className="header-container">
        <Link to="/" className="header-logo">
          Cloud Consulting - AWS
        </Link>
      </div>
    </header>
  );
};

export default Header;
