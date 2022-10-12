import React from "react";
import MenuCard from "./MenuCard";

const Menu = () => {
  return (
    <section id="menu">
      <h2 className="menuHeader">Our Menu</h2>
      <div>
        <MenuCard/>
      </div>
    </section>
  );
};

export default Menu;
