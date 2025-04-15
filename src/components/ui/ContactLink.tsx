
import React from 'react';
import { ContactLinkProps } from '../../types';

const ContactLink: React.FC<ContactLinkProps> = ({ icon, href, text }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-4 bg-gray-800 p-4 rounded-lg hover:bg-gray-700 transition-colors"
  >
    {icon}
    <span>{text}</span>
  </a>
);

export default ContactLink;
