import React from "react";
import classes from "./Mealitems.module.css";
import MealItemsForm from "./MealItemsForm";

const MealItems = (props) => {
  const price = `$${props.price.toFixed(2)}`;
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <p className={classes.description}>{props.description}</p>
        <p className={classes.price}>{price}</p>
      </div>
      <div>
        <MealItemsForm id={props.id} />
      </div>
    </li>
  );
};

export default MealItems;
