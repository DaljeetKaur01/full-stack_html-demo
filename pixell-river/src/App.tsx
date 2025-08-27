import React from "react";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import EmployeeList from "./components/EmployeeList";
import Footer from "./components/Footer";
import "./App.css";

const App: React.FC = () => {
  return (
    <>
      <NavBar />
      <Header />
      <EmployeeList />
      <Footer />
    </>
  );
};

export default App;
