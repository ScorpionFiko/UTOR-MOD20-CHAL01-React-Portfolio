import React from 'react';

// TODO: Add a comment explaining how we are able to extract the key value pairs from props
// destructuring of the props 
function NavTabs({ currentPage, handlePageChange }) {
  return (
    <nav><ul className="nav nav-pills justify-content-end ">
      <li className="nav-item m-2">
        <a
          href="#about"
          onClick={() => handlePageChange('About')}
          //*  TODO: BONUS: Add a comment explaining what kind of operator this is and what it is checking for
          // ternary and checkging for home page and "activating" the link
          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
        >
          About
        </a>
      </li>
      <li className="nav-item m-2">
        <a
          href="#portfolio"
          onClick={() => handlePageChange('Portfolio')}
          //  TODO: Add a comment explaining what this logic is doing
          // checks if the current page is the "about" and "activates" the link
          className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
        >
          Portfolio
        </a>
      </li>
      <li className="nav-item m-2">
        <a
          href="#contact"
          onClick={() => handlePageChange('Contact')}
          //  TODO: Add a comment explaining what this logic is doing
          //  checks if the current page is the "blog" and "activates" the link
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </a>
      </li>
      <li className="nav-item m-2">
        <a
          href="#resume"
          //  TODO: Add a comment explaining what this logic is doing
          //  checks if the current page is the "contact" and "activates" the link
          onClick={() => handlePageChange('Resume')}
          className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
        >
          Resume
        </a>
      </li>
    </ul>
    </nav>
  );
}

export default NavTabs;
