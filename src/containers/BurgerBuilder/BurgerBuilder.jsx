import React from "react";
import Burger from "../../components/Burger/Burger";

class BuilderBurger extends React.Component {
  state = {
    ingredients: {
      salad: 1,
      bacon: 1,
      cheese: 2,
      meat: 2
    }
  };

  render() {
    const {ingredients} = this.state;
    return (
      <>
        <Burger ingredients={ingredients} />
        <div>Build Controls</div>
      </>
    );
  }
}

export default BuilderBurger;
