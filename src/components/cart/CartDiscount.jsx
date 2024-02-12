import styled from "styled-components";
import { Input } from "../../styles/form";
import {
  BaseButtonOuterspace,
  BaseLinkOutlinePlatinum,
} from "../../styles/button";
import { breakpoints, defaultTheme } from "../../styles/themes/default";

const CartDiscountWrapper = styled.div`
  @media (max-width: ${breakpoints.xl}) {
    max-width: 420px;
  }

  @media (max-width: ${breakpoints.md}) {
    max-width: 100%;
  }

  .coupon-group {
    margin-top: 20px;
    overflow: hidden;
    border-radius: 6px;
    height: 40px;
  }

  .coupon-input {
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
    border: 1px solid ${defaultTheme.color_platinum};
    padding-left: 12px;
    padding-right: 12px;
    border-right: none;
  }
  
  .coupon-btn {
    padding: 2px 16px;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }

  .contd-shop-btn {
    height: 40px;
    margin-top: 10px;
  }
`;

const CartDiscount = () => {
  return (
    <CartDiscountWrapper>
      <h3 className="text-xxl text-outerspace">Discount Codes</h3>
      <p className="text-base text-gray">
        Enter your coupon code if you have one.
      </p>
      <form action="">
        <div className="coupon-group flex">
          <Input
            type="text"
            className="coupon-input w-full"
            placeholder="Search"
          />
          <BaseButtonOuterspace
            type="submit"
            className="coupon-btn no-wrap h-full"
          >
            Apply Coupon
          </BaseButtonOuterspace>
        </div>
      </form>
      <BaseLinkOutlinePlatinum
        as={BaseLinkOutlinePlatinum}
        to="/"
        className="contd-shop-btn w-full text-gray"
      >
        continue shopping
      </BaseLinkOutlinePlatinum>
    </CartDiscountWrapper>
  );
};

export default CartDiscount;
