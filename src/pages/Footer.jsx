import '../styles/Footer.css';
import React from 'react';
import resume from '../assets/Lako.pdf';
import { SocialIcon } from 'react-social-icons'

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer mt-10">
      <div className="social-links ">
      <SocialIcon target = "_blank" network="github" url="https://github.com/jameswani" />
      <SocialIcon target = "_blank" network="linkedin" url="https://www.linkedin.com/in/jameslako/" />
     
      </div>

      <div className="text">
        &copy; {currentYear} James Lako
      </div>
    </footer>
  );
}
