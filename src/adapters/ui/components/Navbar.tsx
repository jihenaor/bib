import React from 'react';

function Navbar() {
  return (
    <nav className="bottom-navbar">
        <a href="#home" className="fas fa-home" />
        <a href="#featured" className="fas fa-list" />
        <a href="#arrivals" className="fas fa-tags" />
        <a href="#reviews" className="fas fa-comments" />
        <a href="#blogs" className="fas fa-blog" />
    </nav>
  );
}

export default Navbar;
