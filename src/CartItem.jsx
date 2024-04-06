import React from "react";
import { incrementQty, decrementQty } from "./reducers/quantitySlice";
import { useDispatch } from "react-redux";

function CartItem({ product, qty }) {
  const dispatch = useDispatch();

  const handleDecrement = () => {
    dispatch(decrementQty({ productId: product.id }));
  };

  const handleIncrement = () => {
    dispatch(incrementQty({ productId: product.id }));
  };

  return (
    <tr className="flex-wrap">
      <td>
        <div className="d-flex align-items-center">
          <img
            src={product.images}
            alt="product-img"
            className="img-fluid rounded"
            style={{ width: 200 }}
          />

          <div>
            <p className="mb-0">{product.title}</p>
            <p className="mb-0">Discount: {product.discountPercentage}%</p>
          </div>
        </div>
      </td>

      <td>
        {product.discountPercentage ? (
          <>
            <p>
              <del>${product.price}</del>
            </p>
            <p>
              $
              {product.price -
                Math.round((product.price * product.discountPercentage) / 100)}
            </p>
          </>
        ) : (
          <p>${product.price}</p>
        )}
      </td>
      <td>
        <div className="qty-btns border">
          <button type="button" className="btn" onClick={handleDecrement}>
            -
          </button>
          <span>{qty}</span>
          <button type="button" className="btn" onClick={handleIncrement}>
            +
          </button>
        </div>
      </td>

      <td>
        {product.discountPercentage && (
          <p>
            $
            {qty *
              (product.price -
                Math.round((product.price * product.discountPercentage) / 100))}
          </p>
        )}
      </td>
    </tr>
  );
}

export default CartItem;
