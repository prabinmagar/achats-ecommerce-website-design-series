import styled from "styled-components";
import { FormGridWrapper, FormTitle } from "../../styles/form_grid";
import { Container } from "../../styles/styles";
import { staticImages } from "../../utils/images";
import { FormElement, Input } from "../../styles/form";
import { BaseButtonGreen } from "../../styles/button";

const VerificationScreenWrapper = styled.section``;

const VerificationScreen = () => {
  return (
    <VerificationScreenWrapper>
      <FormGridWrapper>
        <Container>
          <div className="form-grid-content">
            <div className="form-grid-left">
              <img
                src={staticImages.form_img4}
                className="object-fit-cover"
                alt=""
              />
            </div>
            <div className="form-grid-right">
              <FormTitle>
                <h3>Verification</h3>
                <p>Verify your code.</p>
              </FormTitle>

              <form>
                <FormElement>
                  <label htmlFor="" className="form-elem-label">
                    Verification Code
                  </label>
                  <Input
                    type="text"
                    placeholder=""
                    name=""
                    className="form-elem-control"
                  />
                </FormElement>
                <BaseButtonGreen type="submit" className="form-submit-btn">
                  Verify Code
                </BaseButtonGreen>
              </form>
            </div>
          </div>
        </Container>
      </FormGridWrapper>
    </VerificationScreenWrapper>
  );
};

export default VerificationScreen;
