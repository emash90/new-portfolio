
import React from 'react';
import { MobileNavLinkProps } from '../../types';

const MobileNavLink: React.FC<MobileNavLinkProps> = ({ href, onClick, children }) => (
  <a
    href={href}
    onClick={onClick}
    className="text-gray-300 hover:text-white transition-colors block py-2"
  >
    {children}
  </a>
);

export default MobileNavLink;
