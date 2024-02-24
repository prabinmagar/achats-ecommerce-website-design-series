import styled from "styled-components";
import { breakpoints, defaultTheme } from "./themes/default";

export const UserDashboardWrapper = styled.div`
  margin-top: 40px;
  display: grid;
  grid-template-columns: 240px auto;
  gap: 50px;

  @media (max-width: ${breakpoints.lg}) {
    gap: 24px;
    grid-template-columns: 200px auto;
  }

  @media (max-width: ${breakpoints.md}) {
    gap: 24px;
    grid-template-columns: 100%;
  }
`;
export const UserContent = styled.div`
  .title {
    padding-left: 0 !important;
    &::after {
      display: none;
    }
  }

  .form {
    margin-bottom: 24px;
  }

  .form-wrapper {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 32px;
    max-width: 895px;

    @media (max-width: ${breakpoints.lg}) {
      column-gap: 12px;
    }

    @media (max-width: ${breakpoints.sm}) {
      grid-template-columns: repeat(1, 1fr);
    }
  }

  .form-elem-control {
    border: 0;
    padding-left: 0;
    color: ${defaultTheme.color_outerspace};
  }

  .form-label {
    margin-bottom: 6px;
    color: ${defaultTheme.color_outerspace};
  }

  textarea.form-elem-control {
    outline: 0;
    resize: none;
    height: 150px;
  }

  .form-elem-wide {
    grid-column: 1/3;

    @media (max-width: ${breakpoints.sm}) {
      grid-column: 1/2;
    }
  }

  .form-check-elem {
    column-gap: 10px;
    margin-bottom: 10px;
  }

  .form-input-wrapper {
    border-bottom: 1px solid ${defaultTheme.color_anti_flash_white};
  }

  .form-elem-checkbox {
    width: 20px;
    height: 20px;
    border: 1px solid ${defaultTheme.color_silver};
    border-radius: 2px;
    position: relative;

    input {
      position: absolute;
      top: 0;
      left: 0;
      cursor: pointer;
      width: 20px;
      height: 20px;
      opacity: 0;
      z-index: 10;

      &:checked + .checkmark {
        opacity: 1;
      }
    }

    .checkmark {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 9;
      font-size: 17px;
      color: ${defaultTheme.color_gray};
      opacity: 0;
      padding-top: 1px;
      color: ${defaultTheme.color_sea_green};
    }
  }

  .form-btns{
    gap: 12px;
    margin-top: 32px;
  }
`;
