import React from "react";
import classes from "./MealsSummary.module.css"

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Your meal summary is here</h2>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur
        cumque incidunt architecto, temporibus doloribus vitae, nam voluptas
        voluptatibus suscipit tenetur ad quod alias aliquid nemo iste tempora
        quos sunt beatae.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        laboriosam dolore maiores ad delectus dolorum provident, cupiditate sit
        facilis, vitae quaerat nisi sapiente soluta quam aspernatur neque
        aliquid reprehenderit iure?
      </p>
    </section>
  );
};

export default MealsSummary;
