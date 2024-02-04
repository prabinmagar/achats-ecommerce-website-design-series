import styled from "styled-components";
import { breakpoints, defaultTheme } from "./themes/default";

// common styles components

export const PageWrapper = styled.div`
  overflow: hidden !important;
`;

export const Container = styled.div`
  max-width: 1320px;
  padding: 0 16px !important;
  margin: 0 auto;
  width: 100%;
`;

export const Section = styled.section`
  padding: 40px 0;

  @media (max-width: ${breakpoints.lg}) {
    padding: 32px 0;
  }
`;

export const TitleWrapper = styled.div`
  margin-bottom: 24px;
  position: relative;
  padding-left: 32px;
  display: flex;
  align-items: center;

  h2,
  h3,
  h4 {
    font-weight: 600;
    margin-bottom: 0 !important;
  }

  @media (max-width: ${breakpoints.lg}) {
    padding-left: 24px;
  }

  @media (max-width: ${breakpoints.sm}) {
    padding-left: 20px;
  }
  h3 {
    font-size: 28px;
    margin-bottom: 4px;
    @media (max-width: ${breakpoints.lg}) {
      font-size: 24px;
    }

    @media (max-width: ${breakpoints.sm}) {
      font-size: 20px;
    }
  }

  p {
    font-size: 18px;
  }

  &::after {
    content: "";
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 6px;
    height: 30px;
    background-color: ${defaultTheme.color_sea_green};
    border-radius: 100vh;
  }
`;
