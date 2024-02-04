import styled from "styled-components";
import Hero from "../../components/home/Hero";
import Featured from "../../components/home/Featured";
import NewArrival from "../../components/home/NewArrival";
import SavingZone from "../../components/home/SavingZone";
import Catalog from "../../components/home/Catalog";
import { limelightCatalog, mensCatalog, womensCatalog } from "../../data/data";
import Brands from "../../components/home/Brands";
import Feedback from "../../components/home/Feedback";

const HomeScreenWrapper = styled.main``;

const HomeScreen = () => {
  return (
    <HomeScreenWrapper>
      <Hero />
      <Featured />
      <NewArrival />
      <SavingZone />
      <Catalog catalogTitle={"Categories For Men"} products={mensCatalog} />
      <Catalog catalogTitle={"Categories For Women"} products={womensCatalog} />
      <Brands />
      <Catalog catalogTitle={"In The LimeLight"} products={limelightCatalog} />
      <Feedback />
    </HomeScreenWrapper>
  );
};

export default HomeScreen;
