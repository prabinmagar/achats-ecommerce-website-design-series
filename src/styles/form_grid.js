import styled from "styled-components";
import { breakpoints, defaultTheme } from "./themes/default";

export const FormGridWrapper = styled.div`
  max-width: 1100px;
  margin: 60px auto;

  @media (max-width: ${breakpoints.lg}) {
    margin: 40px auto;
  }

  @media (max-width: ${breakpoints.lg}) {
    margin: 30px auto;
  }

  .form-grid-content {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    box-shadow: rgba(50, 50, 93, 0.15) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.1) 0px 30px 60px -30px;
    min-height: 620px;

    @media (max-width: ${breakpoints.md}) {
      grid-template-columns: 100%;
    }
  }

  .form-grid-left {
    overflow: hidden;
    position: relative;

    img {
      position: absolute;
      object-position: top;
    }

    @media (max-width: ${breakpoints.md}) {
      display: none;
    }
  }

  .form-grid-right {
    padding: 48px;
    background-color: ${defaultTheme.color_white};

    @media (max-width: ${breakpoints.lg}) {
      padding: 24px;
    }

    @media (max-width: ${breakpoints.sm}) {
      padding: 16px;
    }
  }

  // form submit button
  .form-submit-btn {
    width: 100%;
    height: 40px;
    margin-top: 16px;
  }

  .account-rel-text {
    margin-top: 10px;
    a {
      text-decoration: underline;
      margin-left: 8px;
    }
  }
`;

export const FormTitle = styled.div`
  margin-bottom: 24px;
  h3 {
    font-size: 32px;
    margin-bottom: 4px;
  }
`;

export const CheckboxGroup = styled.ul`
  margin-top: 20px;
  li {
    column-gap: 8px;
    margin: 4px 0;
  }
`;
