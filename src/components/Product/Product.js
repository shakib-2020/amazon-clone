import React from "react";
import "./Product.css";
import { useStateValue } from "../../Context/StateProvider";
import { useNavigate } from "react-router-dom";

function Product({ id, title, image, price, rating }) {
  const [{ user }, dispatch] = useStateValue();

  const navigate = useNavigate();

  const addToBasket = () => {
    if (!user) {
      navigate("/login");
    } else {
      //add item to basket
      dispatch({
        type: "ADD_TO_BASKET",
        item: {
          id: id,
          title: title,
          image: image,
          price: price,
          rating: rating,
        },
      });
    }
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
