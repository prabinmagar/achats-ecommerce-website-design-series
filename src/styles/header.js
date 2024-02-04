import { Link } from "react-router-dom";
import styled from "styled-components";
import { breakpoints } from "./themes/default";

// common header stylings for both auth & main pages
export const HeaderMainWrapper = styled.header`
  min-height: 72px;
  box-shadow: rgba(17, 17, 26, 0.05) 0px 4px 16px,
    rgba(17, 17, 26, 0.05) 0px 8px 24px, rgba(17, 17, 26, 0.05) 0px 16px 56px;

  .header-wrap {
    column-gap: 20px;

    @media (max-width: ${breakpoints.sm}) {
      column-gap: 8px;
    }
  }

  .sidebar-toggler {
    font-size: 26px;
    margin-right: 10px;
    margin-bottom: -1px;
  }
`;

export const SiteBrandWrapper = styled(Link)`
  text-decoration: none;
  column-gap: 10px;

  .brand-img-wrap {
    img {
      width: 28px;
    }
  }

  .site-brand-text {
    font-size: 24px;
    font-weight: 600;

    @media (max-width: ${breakpoints.xl}) {
      font-size: 20px;
    }

    @media (max-width: ${breakpoints.xs}) {
      display: none;
    }
  }
`;
