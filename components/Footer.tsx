import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-slate-600 dark:text-slate-400">
          © {new Date().getFullYear()} Vijayagiri Muralidhar. All rights reserved.
        </p>
        <p className="text-sm text-slate-500 mt-2">
          Built with React, Tailwind CSS & ❤️
        </p>
      </div>
    </footer>
  );
};

export default Footer;