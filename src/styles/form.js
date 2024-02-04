import styled from "styled-components";
import { breakpoints, defaultTheme } from "./themes/default";

export const Input = styled.input`
  font-size: 14px;
  border: none;
  outline: 0;
  color: ${defaultTheme.color_dim_gray};

  &::placeholder {
    color: ${defaultTheme.color_silver};
    font-weight: 400;

    @media (max-width: ${breakpoints.sm}) {
      font-size: 13px;
    }
  }
`;

export const Textarea = styled.textarea`
  font-size: 14px;
  border: none;
  outline: 0;
  color: ${defaultTheme.color_dim_gray};
  padding: 16px !important;

  textarea::placeholder {
    color: ${defaultTheme.color_silver};
    font-weight: 400;

    @media (max-width: ${breakpoints.sm}) {
      font-size: 13px;
    }
  }
`;

export const InputGroupWrapper = styled.div`
  min-width: 400px;
  width: 100%;
  border-radius: 4px;
  display: grid;
  align-items: stretch;
  grid-template-columns: 40px auto;
  gap: 12px;
  background-color: ${defaultTheme.color_whitesmoke};

  .input-icon {
    width: 40px;
    height: 40px;
    @media (max-width: ${breakpoints.lg}) {
      height: 36px;
    }
  }

  input {
    border: none;
    background-color: transparent;
  }
`;

export const FormElement = styled.div`
  margin-bottom: 16px;

  .form-elem-block {
    position: relative;
  }

  .form-elem-label {
    font-weight: 500;
    display: block;
    margin-bottom: 2px;
  }

  .form-elem-control {
    height: 40px;
    border: 1px solid ${defaultTheme.color_platinum};
    width: 100%;
    border-radius: 5px;
    padding: 2px 14px;
    margin: 4px 0;
    transition: ${defaultTheme.default_transition};

    &:focus {
      border-color: ${defaultTheme.color_sea_green};
    }
  }

  .form-elem-error {
    color: ${defaultTheme.color_red};
    font-size: 13px;
  }

  .form-elem-text {
    display: block;
    font-size: 13px;
    color: ${defaultTheme.color_gray};
  }

  a.form-elem-text {
    &:hover {
      color: ${defaultTheme.color_sea_green};
    }
  }
`;
