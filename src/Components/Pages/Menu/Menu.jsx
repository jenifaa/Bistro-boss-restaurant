import React from "react";
import { Helmet } from "react-helmet-async";

import Cover from "../../Shared/Cover";
import menuImg from "../../../assets/menu/banner3.jpg";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import soupImg from "../../../assets/menu/soup-bg.jpg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import useMenu from "../../../Hooks/useMenu";
import Heading from "../../Shared/Heading";
import MenuCategory from "./MenuCategory";
const Menu = () => {
  const [menu] = useMenu();
  const dessert = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const offered = menu.filter((item) => item.category === "offered");
  return (
    <div>
      <Helmet>
        <title>Bristo | menu</title>
      </Helmet>
      <Cover img={menuImg} title="our menu"></Cover>
      <Heading
        heading={"TODAY'S OFFER"}
        subHeading={"---Don't miss---"}
      ></Heading>
      <MenuCategory items={offered}></MenuCategory>
      <MenuCategory
        items={dessert}
        title={"dessert"}
        coverImg={dessertImg}
      
      ></MenuCategory>
      <MenuCategory
        items={pizza}
        title={"Pizza"}
        coverImg={pizzaImg}
      ></MenuCategory>
       <MenuCategory
        items={salad}
        title={"salad"}
        coverImg={saladImg}
      ></MenuCategory>
      <MenuCategory
        items={soup}
        title={"soup"}
        coverImg={soupImg}
      ></MenuCategory>
     
    </div>
  );
};

export default Menu;
