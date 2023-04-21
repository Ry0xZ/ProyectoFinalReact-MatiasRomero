import React from "react";
import Navbar from "../Navbar/Navbar";
import Brand from "../Brand/Brand";

const Header = ({ showAs }) => {
  return (
    <header
      className={`${showAs === "Shadow" ? "header header--shadow" : "header"}`}
    >
      <Brand/>
      <Navbar />
    </header>
  );
};

export default Header;
