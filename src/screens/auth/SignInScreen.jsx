import styled from "styled-components";
import { FormGridWrapper, FormTitle } from "../../styles/form_grid";
import { Container } from "../../styles/styles";
import { staticImages } from "../../utils/images";
import AuthOptions from "../../components/auth/AuthOptions";
import { FormElement, Input } from "../../styles/form";
import PasswordInput from "../../components/auth/PasswordInput";
import { Link } from "react-router-dom";
import { BaseButtonBlack } from "../../styles/button";
import { breakpoints, defaultTheme } from "../../styles/themes/default";

const SignInScreenWrapper = styled.section`
  .form-separator {
    margin: 32px 0;
    column-gap: 18px;

    @media (max-width: ${breakpoints.lg}) {
      margin: 24px 0;
    }

    .separator-text {
      border-radius: 50%;
      min-width: 36px;
      height: 36px;
      background-color: ${defaultTheme.color_purple};
      position: relative;
    }

    .separator-line {
      width: 100%;
      height: 1px;
      background-color: ${defaultTheme.color_platinum};
    }
  }

  .form-elem-text {
    margin-top: -16px;
    display: block;
  }
`;

const SignInScreen = () => {
  return (
    <SignInScreenWrapper>
      <FormGridWrapper>
        <Container>
          <div className="form-grid-content">
            <div className="form-grid-left">
              <img src={staticImages.form_img1} className="object-fit-cover" />
            </div>
            <div className="form-grid-right">
              <FormTitle>
                <h3>Sign In</h3>
              </FormTitle>
              <AuthOptions />
              <div className="form-separator flex items-center justify-center">
                <span className="separator-line"></span>
                <span className="separator-text inline-flex items-center justify-center text-white">
                  OR
                </span>
                <span className="separator-line"></span>
              </div>

              <form>
                <FormElement>
                  <label htmlFor="" className="form-elem-label">
                    User name or email address
                  </label>
                  <Input
                    type="text"
                    placeholder=""
                    name=""
                    className="form-elem-control"
                  />
                </FormElement>
                <PasswordInput fieldName="Password" name="password" />
                <Link
                  to="/reset"
                  className="form-elem-text text-end font-medium"
                >
                  Forgot your password?
                </Link>
                <BaseButtonBlack type="submit" className="form-submit-btn">
                  Sign In
                </BaseButtonBlack>
              </form>
              <p className="flex flex-wrap account-rel-text">
                Don&apos;t have a account?
                <Link to="/sign_up" className="font-medium">
                  Sign Up
                </Link>
                `
              </p>
            </div>
          </div>
        </Container>
      </FormGridWrapper>
    </SignInScreenWrapper>
  );
};

export default SignInScreen;
