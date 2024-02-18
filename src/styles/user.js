import styled from "styled-components";
import { breakpoints } from "./themes/default";

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
`;
