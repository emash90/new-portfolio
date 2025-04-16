
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 text-center text-gray-400">
      <p>© {new Date().getFullYear()} emash90. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
