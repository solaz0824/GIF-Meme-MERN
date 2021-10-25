import React from "react";

const Footer = ({ children, ...props }) => {
  return (
    <footer className="Footer bg-dark text-white mt-5" {...props}>
      &copy; {new Date().getFullYear()} Eunyoung Kim
    </footer>
  );
};

export default Footer;
