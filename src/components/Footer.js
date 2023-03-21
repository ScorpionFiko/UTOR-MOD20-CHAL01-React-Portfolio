import React from "react";
import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';

export default function Footer() {
  return (
    <section className="footer">

      <ul class="nav flex-row">
        <li class="nav-item m-2">
          <a class="nav-link" href="https://github.com/ScorpionFiko"><FaGithub size={70} /></a>
        </li>
        <li class="nav-item m-2">
          <a class="nav-link" href="https://www.linkedin.com/in/stefan-marinov-csm-020006267/"><FaLinkedin size={70} /></a>
        </li>
        <li class="nav-item m-2">
          <a class="nav-link" href="https://www.facebook.com/stefan.marinov.359/"><FaFacebook size={70} /></a>
        </li>

      </ul>
    </section>
  );
}