import styled from "styled-components";
import { Container } from "../../styles/styles";
import Breadcrumb from "../../components/common/Breadcrumb";
import { UserContent, UserDashboardWrapper } from "../../styles/user";
import UserMenu from "../../components/user/UserMenu";
import { staticImages } from "../../utils/images";
import { BaseLinkGreen } from "../../styles/button";
import Catalog from "../../components/home/Catalog";
import { recentViewedData } from "../../data/data";

const WishListEmptyScreenWrapper = styled.main`
  .wishlist-empty-content {
    max-width: 514px;
    margin-right: auto;
    margin-left: auto;

    .heart-img {
      margin-right: auto;
      margin-left: auto;
      width: 140px;
      height: 140px;
      border-radius: 50%;
      background: #f0f9f4;
      margin-bottom: 40px;
    }

    .btn-continue {
      margin-top: 20px;
    }
  }
`;

const breadcrumbItems = [
  { label: "Home", link: "/" },
  { label: "Wishlist", link: "/wishlist" },
];

const WishListEmptyScreen = () => {
  return (
    <WishListEmptyScreenWrapper className="content-main page-empty-wishlist page-py-spacing">
      <Container>
        <Breadcrumb items={breadcrumbItems} />
        <UserDashboardWrapper>
          <UserMenu />
          <UserContent>
            <div className="wishlist-empty-content text-center">
              <div className="heart-img flex items-center justify-center">
                <img src={staticImages.green_heart} alt="" />
              </div>
              <h3 className="text-xxl font-semibold">
                Your wishlist is empty.
              </h3>
              <p className="text-gray text-base">
                You don&nbsp;t have any products in the wishlist yet. You will
                find a lot of interesting products on our Shop page.
              </p>
              <BaseLinkGreen to="/" className="btn-continue">
                Continue Shopping
              </BaseLinkGreen>
            </div>
          </UserContent>
        </UserDashboardWrapper>
      </Container>
      <Catalog catalogTitle={"Recently Viewed"} products={recentViewedData} />
    </WishListEmptyScreenWrapper>
  );
};

export default WishListEmptyScreen;
