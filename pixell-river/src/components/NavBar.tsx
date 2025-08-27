import React from "react";

const NavBar: React.FC = () => {
  return (
    <nav className="nav">
      <div className="logo">
        
        <img src="/vite.svg" alt="Pixell River Logo" width={48} />
      </div>
      <div className="links">
        <a href="#">Employees</a>
        <a href="#">Organization</a>
      </div>
    </nav>
  );
};

export default NavBar;
