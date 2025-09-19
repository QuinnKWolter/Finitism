import React from 'react';

function Footer() {
  return (
    <footer className="bg-base-200 text-base-content py-4">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} MyWebsite. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
