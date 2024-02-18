import styled from "styled-components";
import { Input } from "../../styles/form";
import { BaseButtonGreen } from "../../styles/button";
import CheckoutSummary from "./CheckoutSummary";
import { breakpoints, defaultTheme } from "../../styles/themes/default";

const BillingOrderWrapper = styled.div`
  gap: 60px;
  grid-template-columns: 2fr 1fr;

  @media (max-width: ${breakpoints.xl}) {
    gap: 40px;
  }
  @media (max-width: ${breakpoints.lg}) {
    gap: 30px;
    grid-template-columns: 100%;
  }
`;

const BillingDetailsWrapper = styled.div`
  @media (max-width: ${breakpoints.lg}) {
    order: 2;
  }

  .checkout-form {
    margin-top: 24px;

    .input-elem {
      margin-bottom: 16px;

      @media (max-width: ${breakpoints.xs}) {
        margin-bottom: 10px;
      }

      label {
        margin-bottom: 8px;
        display: block;
      }

      input,
      select {
        height: 40px;
        border-radius: 4px;
        background: ${defaultTheme.color_whitesmoke};
        padding-left: 12px;
        padding-right: 12px;
        width: 100%;
        border: 1px solid ${defaultTheme.color_platinum};
        font-size: 12px;

        &::placeholder {
          font-size: 12px;
        }
      }
    }

    .elem-col-2 {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      column-gap: 24px;

      @media (max-width: ${breakpoints.lg}) {
        column-gap: 12px;
      }
      @media (max-width: ${breakpoints.sm}) {
        grid-template-columns: 100%;
      }
    }

    .elem-col-3 {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      column-gap: 24px;

      @media (max-width: ${breakpoints.lg}) {
        column-gap: 12px;
      }
      @media (max-width: ${breakpoints.sm}) {
        grid-template-columns: 100%;
      }
    }

    .input-check-group {
      column-gap: 10px;
      margin-top: 16px;
    }
    .contd-delivery-btn {
      margin-top: 20px;

      @media (max-width: ${breakpoints.sm}) {
        width: 100%;
      }
    }
  }
`;

const Billing = () => {
  return (
    <BillingOrderWrapper className="billing-and-order grid items-start">
      <BillingDetailsWrapper>
        <h4 className="text-xxl font-bold text-outerspace">Billing Details</h4>
        <form className="checkout-form">
          <div className="input-elem-group elem-col-2">
            <div className="input-elem">
              <label
                htmlFor=""
                className="text-base text-outerspace font-semibold"
              >
                First Name*
              </label>
              <Input type="text" placeholder="First Name" />
            </div>
            <div className="input-elem">
              <label
                htmlFor=""
                className="text-base text-outerspace font-semibold"
              >
                Last Name*
              </label>
              <Input type="text" placeholder="Last Name" />
            </div>
          </div>
          <div className="input-elem-group elem-col-2">
            <div className="input-elem">
              <label
                htmlFor=""
                className="text-base text-outerspace font-semibold"
              >
                Country / Region*
              </label>
              <Input type="text" placeholder="Country / Region" />
            </div>
            <div className="input-elem">
              <label
                htmlFor=""
                className="text-base text-outerspace font-semibold"
              >
                Company Name
              </label>
              <Input type="text" placeholder="Company (optional)" />
            </div>
          </div>
          <div className="input-elem-group elem-col-2">
            <div className="input-elem">
              <label
                htmlFor=""
                className="text-base text-outerspace font-semibold"
              >
                Street Address*
              </label>
              <Input type="text" placeholder="House number and street name" />
            </div>
            <div className="input-elem">
              <label
                htmlFor=""
                className="text-base text-outerspace font-semibold"
              >
                Apt, suite, unit
              </label>
              <Input
                type="text"
                placeholder="apartment, suite, unit, etc. (optional)"
              />
            </div>
          </div>
          <div className="input-elem-group elem-col-3">
            <div className="input-elem">
              <label
                htmlFor=""
                className="text-base text-outerspace font-semibold"
              >
                City*
              </label>
              <Input type="text" placeholder="Town / City" />
            </div>
            <div className="input-elem">
              <label
                htmlFor=""
                className="text-base text-outerspace font-semibold"
              >
                State*
              </label>
              <select name="">
                <option value="" disabled>
                  State
                </option>
                <option value="">State 1</option>
                <option value="">State 1</option>
              </select>
            </div>
            <div className="input-elem">
              <label
                htmlFor=""
                className="text-base text-outerspace font-semibold"
              >
                Postal Code*
              </label>
              <Input type="text" placeholder="Postal Code" />
            </div>
          </div>
          <div className="input-elem-group elem-col-2">
            <div className="input-elem">
              <label
                htmlFor=""
                className="text-base text-outerspace font-semibold"
              >
                Phone*
              </label>
              <Input type="text" placeholder="Phone" />
            </div>
          </div>
          <BaseButtonGreen type="submit" className="contd-delivery-btn">
            Continue to delivery
          </BaseButtonGreen>
          <div className="input-check-group flex items-center flex-wrap">
            <Input type="checkbox" />
            <p className="text-base">
              Save my information for a faster checkout
            </p>
          </div>
        </form>
      </BillingDetailsWrapper>
      <CheckoutSummary />
    </BillingOrderWrapper>
  );
};

export default Billing;
