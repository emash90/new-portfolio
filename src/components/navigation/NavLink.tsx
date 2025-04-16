
import React from 'react';
import { NavLinkProps } from '../../types';

const NavLink: React.FC<NavLinkProps> = ({ href, children }) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth'
      });
    }
  };
  return (
  <a href={href} className="text-gray-300 hover:text-white transition-colors"
  onClick={handleClick}>
    {children}
  </a>
  );
};


export default NavLink;
