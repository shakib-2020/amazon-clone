import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../../Context/StateProvider";
import { getBasketTotal } from "../../Context/reducer";
import { useNavigate } from "react-router-dom";

function Subtotal() {
  const navigate = useNavigate();
  const [{ basket, user }] = useStateValue();
  return (
    <div className="subtotal">
      {/* price */}
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({!user ? 0 : basket.length} items):
              <strong> {value} </strong>
            </p>
            <small className="subtotal_gift">
              <input type="checkbox" />
              This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={!user ? 0 : getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />

      <button onClick={() => navigate("/payment")}>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
