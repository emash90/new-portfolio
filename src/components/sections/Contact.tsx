
import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';
import ContactLink from '../ui/ContactLink';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-gray-800/50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Get In Touch</h2>
        <div className="max-w-2xl mx-auto flex flex-col gap-6">
          <ContactLink
            icon={<Mail className="w-6 h-6" />}
            href="mailto:emash90@gmail.com"
            text="Gmail"
          />
          <ContactLink
            icon={<Github className="w-6 h-6" />}
            href="https://github.com/emash90"
            text="github.com/emash90"
          />
          <ContactLink
            icon={<Linkedin className="w-6 h-6" />}
            href="https://www.linkedin.com/in/edwin-macharia-20aa6450/"
            text="linkedin.com"
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
