import React from "react";
import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';

export default function Footer() {
  return (
      <section className="footer">
        <ul className="nav flex-row">
          <li className="nav-item m-2">
            <a className="nav-link" href="https://github.com/ScorpionFiko" target="_blank" rel="noopener noreferrer"><FaGithub size={70} /></a>
          </li>
          <li className="nav-item m-2">
            <a className="nav-link" href="https://www.linkedin.com/in/stefan-marinov-csm-020006267/" target="_blank" rel="noopener noreferrer"><FaLinkedin size={70} /></a>
          </li>
          <li className="nav-item m-2">
            <a className="nav-link" href="https://www.facebook.com/stefan.marinov.359/" target="_blank" rel="noopener noreferrer"><FaFacebook size={70} /></a>
          </li>
        </ul>
    </section>
  );
}