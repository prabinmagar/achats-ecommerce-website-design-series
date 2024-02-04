import styled from "styled-components";
import { Container } from "../../styles/styles";
import { footerData, socialLinksData } from "../../data/data";
import { Link } from "react-router-dom";
import { staticImages } from "../../utils/images";
import { breakpoints, defaultTheme } from "../../styles/themes/default";

const FooterWrapper = styled.footer`
  padding-top: 60px;
  padding-bottom: 32px;

  @media (max-width: ${breakpoints.lg}) {
    padding-top: 30px;
    padding-bottom: 30px;
  }

  .footer-top {
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;

    @media (max-width: ${breakpoints.md}) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: ${breakpoints.xs}) {
      grid-template-columns: 100%;
      text-align: center;
    }
  }

  .footer-item {
    &-title {
      margin-bottom: 8px;
    }
  }

  .ftr-links {
    .ftr-link-item {
      margin-bottom: 8px;

      a {
        color: ${defaultTheme.color_whitesmoke};
        &:hover {
          color: ${defaultTheme.color_yellow};
        }
      }
    }
  }

  .footer-middle {
    padding: 20px 0 32px 0;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;

    @media (max-width: ${breakpoints.lg}) {
      padding: 20px 0;
    }

    @media (max-width: ${breakpoints.xs}) {
      grid-template-columns: 100%;
      text-align: center;
    }
  }

  .ftr-social-links {
    column-gap: 8px;

    @media (max-width: ${breakpoints.xs}) {
      justify-content: center;
    }

    .ftr-social-link {
      width: 25px;
      height: 25px;
      border-radius: 4px;
    }
  }

  .ftr-app-links {
    .app-links-title {
      margin-bottom: 12px;
    }
    .app-links-group {
      column-gap: 6px;

      @media (max-width: ${breakpoints.sm}) {
        flex-direction: column;
        align-items: flex-start;
      }

      @media (max-width: ${breakpoints.xs}) {
        flex-direction: row;
        justify-content: center;
      }
    }

    a {
      img {
        width: 120px;

        @media (max-width: ${breakpoints.md}) {
          width: 100px;
        }
      }
    }
  }

  .footer-bottom {
    padding-top: 36px;
    border-top: 1px solid rgba(190, 188, 189, 0.4);

    @media (max-width: ${breakpoints.lg}) {
      padding-top: 20px;
    }
  }
`;

const Footer = () => {
  return (
    <FooterWrapper className="bg-outerspace">
      <Container className="container">
        <div className="footer-top grid">
          {footerData?.map((footer) => {
            return (
              <div className="footer-item" key={footer.id}>
                <h4 className="text-white text-lg footer-item-title">
                  {footer.title}
                </h4>
                {footer.links && (
                  <ul className="ftr-links">
                    {footer.links?.map((link, index) => (
                      <li className="ftr-link-item" key={index}>
                        <Link to={link.url} className="text-white text-base">
                          {link.text}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
                {footer.lists && (
                  <ul className="ftr-links">
                    {footer.lists?.map((link, index) => (
                      <li
                        className="ftr-link-item text-white text-base"
                        key={index}
                      >
                        {link.text}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })}
        </div>
        <div className="footer-middle grid">
          <div className="ftr-social-links flex items-center">
            {socialLinksData?.map((socialLink) => {
              return (
                <Link
                  to={socialLink.site_url}
                  key={socialLink.id}
                  className="ftr-social-link bg-white flex items-center justify-center"
                >
                  <i className={socialLink.site_icon}></i>
                </Link>
              );
            })}
          </div>
          <div className="ftr-app-links">
            <p className="app-links-title text-white text-xl font-semibold text-lg">
              Donwload the App
            </p>
            <div className="app-links-group flex items-center">
              <Link to="/">
                <img src={staticImages.google_play} />
              </Link>
              <Link to="/">
                <img src={staticImages.app_store} alt="" />
              </Link>
            </div>
          </div>
        </div>
        <div className="footer-bottom text-center">
          <p className="text-base text-white">
            Copyright &copy; 2023 &nbsp;
            <Link to="/" className="text-white">
              Achats site
            </Link>
            &nbsp;. All rights reserved.
          </p>
        </div>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;
