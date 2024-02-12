import styled from "styled-components";
import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";
import { breakpoints, defaultTheme } from "../../styles/themes/default";

const CartTableRowWrapper = styled.tr`
  .cart-tbl {
    &-prod {
      grid-template-columns: 80px auto;
      column-gap: 12px;

      @media (max-width: ${breakpoints.xl}) {
        grid-template-columns: 60px auto;
      }
    }

    &-qty {
      .qty-inc-btn,
      .qty-dec-btn {
        width: 24px;
        height: 24px;
        border: 1px solid ${defaultTheme.color_platinum};
        border-radius: 2px;

        &:hover {
          border-color: ${defaultTheme.color_sea_green};
          background-color: ${defaultTheme.color_sea_green};
          color: ${defaultTheme.color_white};
        }
      }

      .qty-value {
        width: 40px;
        height: 24px;
      }
    }
  }

  .cart-prod-info {
    p {
      margin-right: 8px;
      span {
        margin-right: 4px;
      }
    }
  }

  .cart-prod-img {
    width: 80px;
    height: 80px;
    overflow: hidden;
    border-radius: 8px;

    @media (max-width: ${breakpoints.xl}) {
      width: 60px;
      height: 60px;
    }
  }
`;

const CartItem = ({ cartItem }) => {
  return (
    <CartTableRowWrapper key={cartItem.id}>
      <td>
        <div className="cart-tbl-prod grid">
          <div className="cart-prod-img">
            <img src={cartItem.imgSource} className="object-fit-cover" alt="" />
          </div>
          <div className="cart-prod-info">
            <h4 className="text-base">{cartItem.title}</h4>
            <p className="text-sm text-gray inline-flex">
              <span className="font-semibold">Color: </span> {cartItem.color}
            </p>
            <p className="text-sm text-gray inline-flex">
              <span className="font-semibold">Size:</span>
              {cartItem.size}
            </p>
          </div>
        </div>
      </td>
      <td>
        <span className="text-lg font-bold text-outerspace">
          ${cartItem.price}
        </span>
      </td>
      <td>
        <div className="cart-tbl-qty flex items-center">
          <button className="qty-dec-btn">
            <i className="bi bi-dash-lg"></i>
          </button>
          <span className="qty-value inline-flex items-center justify-center font-medium text-outerspace">
            2
          </span>
          <button className="qty-inc-btn">
            <i className="bi bi-plus-lg"></i>
          </button>
        </div>
      </td>
      <td>
        <span className="cart-tbl-shipping uppercase text-silver font-bold">
          {cartItem.shipping === 0 ? "Free" : cartItem.shipping}
        </span>
      </td>
      <td>
        <span className="text-lg font-bold text-outerspace">
          ${cartItem.price * cartItem.quantity}
        </span>
      </td>
      <td>
        <div className="cart-tbl-actions flex justify-center">
          <Link to="/" className="tbl-del-action text-red">
            <i className="bi bi-trash3"></i>
          </Link>
        </div>
      </td>
    </CartTableRowWrapper>
  );
};

export default CartItem;

CartItem.propTypes = {
  cartItem: PropTypes.object,
};
