import { Fragment } from "react";
import classes from "./Header.module.css";
import mealsImage from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactFood App</h1>
        <HeaderCartButton onClick={props.showCart}/>
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="img" />
      </div>
    </Fragment>
  );
};

export default Header;
