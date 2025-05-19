// components/Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white text-center py-2 text-sm text-gray-600">
      Made with <span className="text-red-500">❤️</span> by{" "}
      <a
        href="https://github.com/epicshivam"
        className="text-blue-500 hover:underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        Shivam Singh
      </a>
    </footer>
  );
};

export default Footer;
