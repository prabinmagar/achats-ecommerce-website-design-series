import styled from "styled-components";
import { HeaderMainWrapper, SiteBrandWrapper } from "../../styles/header";
import { Container } from "../../styles/styles";
import { staticImages } from "../../utils/images";
import { BaseLinkGreen, BaseLinkOutlineDark } from "../../styles/button";
import { breakpoints } from "../../styles/themes/default";

const ButtonGroupWrapper = styled.div`
  gap: 8px;
  @media (max-width: ${breakpoints.sm}) {
    button,
    a {
      min-width: 100px;
    }
  }
`;

const AuthHeader = () => {
  return (
    <HeaderMainWrapper className="flex items-center">
      <Container>
        <div className="header-wrap flex items-center justify-between">
          <SiteBrandWrapper to="/" className="inline-flex">
            <div className="brand-img-wrap flex items-center justify-center">
              <img className="site-brand-img" src={staticImages.logo} alt="" />
            </div>
            <span className="site-brand-text">achats.</span>
          </SiteBrandWrapper>
          <div className="flex items-center">
            <ButtonGroupWrapper className="flex items-center">
              <BaseLinkGreen to="/sign_in">Login</BaseLinkGreen>
              <BaseLinkOutlineDark to="/sign_up">Sign up</BaseLinkOutlineDark>
            </ButtonGroupWrapper>
          </div>
        </div>
      </Container>
    </HeaderMainWrapper>
  );
};

export default AuthHeader;
