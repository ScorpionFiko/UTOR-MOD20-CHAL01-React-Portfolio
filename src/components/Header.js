import React, { useState } from 'react';
import Image from '../components/images/sm-profile.jpg'
import NavTabs from './NavTabs';
import Resume from './pages/Resume';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';





export default function Header() {

  const [currentPage, setCurrentPage] = useState('About');

  // TODO: Add a comment describing the functionality of this method
  // calls respective component based on the page
  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    if (currentPage === 'Resume') {

      return <Resume />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <header>
      <section class="header">
        <section id="developer" class="developer">
          <img id="devImg" src={Image} alt="" />
          <h1>Stefan Marinov</h1>
        </section>
        <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      </section>
      {renderPage()}
    </header>
  );
}


