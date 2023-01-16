import React from 'react';
import Button from '../../UI/Button/Button';

const OrderSummary = ({ingredients, purchaseCanceled, purchaseContinued, price}) => {
  const ingredientSummary = Object.keys(ingredients).map(igKey => {
    return (
      <li key={igKey}>
        <span style={{textTransform: 'capitalize'}}>
          {igKey}: {ingredients[igKey]}
        </span>
      </li>
    );
  });

  return (
    <>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>
        {ingredientSummary}
      </ul>
      <p>Total Price: <strong>{price}</strong></p>
      <p>Continue to Checkout?</p>
      <Button 
        btnType="Danger" 
        clicked={purchaseCanceled}>CANCEL</Button>
      <Button 
        btnType="Success" 
        clicked={purchaseContinued}>CONTINUE</Button>
    </>
  )
}

export default OrderSummary;
