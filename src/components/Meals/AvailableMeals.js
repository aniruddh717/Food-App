import React, { useState, useEffect } from "react";
import Card from "../UI/Card";
import MealItem from "./MealItems/MealItems";
import classes from "./AvailableMeals.module.css";

// const DUMMY_MEALS = [   {no more need of this data as we saved it into thee firebase API to fetch it from there}
//   {
//     id: "m1",
//     name: "Sushi",
//     description: "Finest fish and veggies",
//     price: 22.99,
//   },
//   {
//     id: "m2",
//     name: "Schnitzel",
//     description: "A german specialty!",
//     price: 16.5,
//   },
//   {
//     id: "m3",
//     name: "Barbecue Burger",
//     description: "American, raw, meaty",
//     price: 12.99,
//   },
//   {
//     id: "m4",
//     name: "Green Bowl",
//     description: "Healthy...and green...",
//     price: 18.99,
//   },
// ];
const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // here we set the state to true because everytime we load the page the must be loaded again otherwise we can set it false
  const [httpError, setHttpError] = useState();

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch(
        "https://food-app-727cd-default-rtdb.firebaseio.com/meals.json"
      );
      const responseData = await response.json(); // this responseData is an object because the data in the API is stored as an object
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const loadedMeals = []; // loadedMeals will convert th object into an array

      for (const key in responseData) {
        loadedMeals.push({
          // pushing the object values into loadedMeals
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        });
      }
      setMeals(loadedMeals);
      setIsLoading(false); // when the data is fetched there is no need of loading
    };

    fetchMeals().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  });

  if (isLoading) {
    return (
      <section className={classes.MealsLoading}>
        <p>Loading...</p>
      </section>
    );
  }

  if (httpError) {
    return (
      <section className={classes.MealsError}>
        <p>Error loading data!</p>
      </section>
    );
  }

  const mealsList = meals.map(
    (
      meal // istead of dummy meals we will use the updated meals to showcase the values of loadedmeals
    ) => (
      <MealItem
        id={meal.id}
        key={meal.id}
        name={meal.name}
        description={meal.description}
        price={meal.price}
      />
    )
  );

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
