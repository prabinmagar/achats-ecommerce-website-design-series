import { useState } from "react";
import styled from "styled-components";
import { productDescriptionTabHeads } from "../../data/data";
import Title from "../common/Title";
import { ContentStylings } from "../../styles/styles";
import { breakpoints, defaultTheme } from "../../styles/themes/default";
import ProductDescriptionMedia from "./ProductDescriptionMedia";

const DetailsContent = styled.div`
  margin-top: 60px;
  @media (max-width: ${breakpoints.lg}) {
    margin-top: 40px;
  }

  .details-content-wrapper {
    grid-template-columns: auto 500px;
    gap: 40px;

    @media (max-width: ${breakpoints.xl}) {
      grid-template-columns: auto 400px;
    }

    @media (max-width: ${breakpoints.lg}) {
      grid-template-columns: 100%;
      gap: 24px;
    }
  }
`;

const DescriptionTabsWrapper = styled.div`
  .tabs-heads {
    column-gap: 20px;
    row-gap: 16px;
    margin-bottom: 24px;

    @media (max-width: ${breakpoints.sm}) {
      flex-wrap: wrap;
      margin-bottom: 16px;
    }

    @media (max-width: ${breakpoints.xs}) {
      gap: 12px;
    }
  }

  .tabs-head {
    padding-bottom: 16px;
    position: relative;

    &-active {
      color: ${defaultTheme.color_outerspace};

      &::after {
        content: "";
        position: absolute;
        left: 0;
        top: 100%;
        width: 40px;
        height: 1px;
        background-color: ${defaultTheme.color_outerspace};
      }
    }

    @media(max-width: ${breakpoints.sm}){
        padding-bottom: 12px;
    }
  }

  .tabs-badge{
    width: 20px;
    height: 20px;
    border-radius: 4px;
    font-size: 10px;
    margin-left: 6px;

    &-purple{
        background-color: ${defaultTheme.color_purple};
    }

    &-outerspace{
        background-color: ${defaultTheme.color_outerspace};
    }
  }

  .tabs-contents{
    max-height: 400px;
    overflow-y: scroll;

    &::-webkit-scrollbar{
        width: 6px;
    }

    &::-webkit-scrollbar-track{
        box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.2);
        border-radius: 12px;
    }

    &::-webkit-scrollbar-thumb{
        background-color: ${defaultTheme.color_platinum};
        border-radius: 12px;
    }
  }

  .tabs-content{
    display: none;
    padding: 20px;
    background-color: rgba(0, 0, 0, 0.02);

    &.show{
        display: block;
    }

    @media(max-width: ${breakpoints.sm}){
        padding: 12px;
    }
  }
`;

const ProductDescriptionTab = () => {
  const [activeDesTab, setActiveDesTab] = useState(
    productDescriptionTabHeads[0].tabHead
  );

  const handleTabChange = (tabHead) => {
    setActiveDesTab(tabHead);
  };
  return (
    <DetailsContent>
      <Title titleText={"Product Description"} />
      <div className="details-content-wrapper grid">
        <DescriptionTabsWrapper>
          <div className="tabs-heads flex items-center flex-wrap">
            {productDescriptionTabHeads.map((tab) => {
              return (
                <button
                  key={tab.id}
                  type="button"
                  className="tabs-head text-gray font-medium text-lg flex items-center"
                  onClick={() => handleTabChange(tab.tabHead)}
                >
                  <span
                    className={`${
                      tab.tabHead === activeDesTab ? "text-sea-green" : ""
                    }`}
                  >
                    {tab.tabText}
                  </span>
                  {tab.badgeValue && (
                    <span
                      className={`tabs-badge inline-flex items-center justify-center text-white tabs-badge-${tab.badgeColor}`}
                    >
                      {tab.badgeValue}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
          <div className="tabs-contents">
            <div
              className={`tabs-content ${
                activeDesTab === "tabDescription" ? "show" : ""
              }`}
            >
              <ContentStylings>
                <p>
                  100% Bio-washed Cotton makes the fabric extra soft & silky.
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Consectetur, odio. Infinite range of matte-finish HD prints.
                </p>
                <h4>Specifications:</h4>
                <ul>
                  <li>Fabric: Bio-washed Cotton</li>
                  <li>Pattern: Printed</li>
                  <li>Fit: Regular-fit</li>
                  <li>Nect: Round Neck</li>
                  <li>Sleeve: Half-sleeves</li>
                  <li>Style: Casual Wear</li>
                </ul>
                <p>
                  *Important: Please make sure that the mobile number is filled
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Provident, blanditiis.
                </p>
                <h4>Why should you shop at Outfit store?</h4>
                <ul>
                  <li>Guranteed Good material quality</li>
                  <li>Rate convection stitsching.</li>
                </ul>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Beatae ipsam nostrum praesentium nulla deleniti, facere
                  mollitia dolore laboriosam, non iure deserunt alias repellat
                  perspiciatis asperiores ab quia nam tenetur voluptate sint
                  animi! Vitae aliquam cupiditate iste fuga expedita? Odio,
                  impedit?
                </p>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Pariatur, fugiat.
                </p>
              </ContentStylings>
            </div>
            <div
              className={`tabs-content content-stylings ${
                activeDesTab === "tabComments" ? "show" : ""
              }`}
            >
              User comments here.
            </div>
            <div
              className={`tabs-content content-stylings ${
                activeDesTab === "tabQNA" ? "show" : ""
              }`}
            >
              Question & Answers
            </div>
          </div>
        </DescriptionTabsWrapper>
        <ProductDescriptionMedia />
      </div>
    </DetailsContent>
  );
};

export default ProductDescriptionTab;
