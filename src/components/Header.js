import React from 'react';
import Image from '../images/sm-profile.jpg'
import NavTabs from './NavTabs';

export default function Header({currentPage, handlePageChange}) {

  return (
      <section className="header">
        <section id="developer" className="developer">
          <img id="devImg" src={Image} alt="" />
          <h1>Stefan Marinov</h1>
        </section>
        <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      </section>
  );
}


