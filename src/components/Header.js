import React from "react";
import Search from "./Search";
import Theme from "./Theme";

const Header = ({ name }) => {
  return (
    <>
      <div className="xl:px-32">
        <h1 className="text-5xl">{name}</h1>
        <Search />
      </div>
      <Theme />
    </>
  );
};

export default Header;
