import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product({ Key, id, title, image, price, rating }) {
  const [, dispatch] = useStateValue();

  const addToBasket = () => {
    //add item to basket
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        Key: Key,
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <span role="img" aria-label="star">
                ⭐
              </span>
            ))}
          {/* i have problem in this concept*/}
        </div>
      </div>
      <img src={image} alt="" />
      <button onClick={addToBasket}>Add to basket</button>
    </div>
  );
}

export default Product;
