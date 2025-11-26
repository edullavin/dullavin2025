import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="text-primary-100 py-4 text-center">
      <p>&copy; {new Date().getFullYear()} Eric M. Dullavin. All rights reserved.</p>
    </footer>
  );
};

export default Footer;