import React from "react";
import MenuCard from "./MenuCard";
import Burger1 from "../../assets/burger1.jpg"
import Burger2 from "../../assets/burger2.jpg"
import Burger3 from "../../assets/burger3.jpg"
import Burger4 from "../../assets/burger4.jpg"

const Menu = () => {
  const addToCartHandler = () => {}
  return (
    <section id="menu">
      <h2 className="menuHeader">Our Menu</h2>
      <div className="menuCard">
        <MenuCard
          title={"Sausage, Egg & Cheese Croissan'wich Meal Small"}
          burgerSrc={Burger1}
          price={200}
          itemNum={1}
          handler={addToCartHandler}
        />
         <MenuCard
          title={"Sausage Burger"}
          burgerSrc={Burger2}
          price={200}
          itemNum={1}
          handler={addToCartHandler}
        />
         <MenuCard
          title={"Vegetable Burger"}
          burgerSrc={Burger3}
          price={200}
          itemNum={1}
          handler={addToCartHandler}
        />
         <MenuCard
          title={"Cheese Burger"}
          burgerSrc={Burger4}
          price={200}
          itemNum={1}
          handler={addToCartHandler}
        />
      </div>
    </section>
  );
};

export default Menu;
