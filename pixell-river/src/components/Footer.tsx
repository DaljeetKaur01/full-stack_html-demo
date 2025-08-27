import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      &copy; Pixell River Financial {new Date().getFullYear()}
    </footer>
  );
};

export default Footer;
