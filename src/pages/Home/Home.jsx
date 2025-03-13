import Banner from "../../components/Layout/Banner/Banner";
import Shipping from "../../components/Layout/Banner/Shipping";
// import BestExperience from "../../components/Layout/Bestseller/BestExperience";
import Bestseller from "../../components/Layout/Bestseller/Bestseller";
import StoreLocation from "../../components/Layout/GoolMap/StoreLocation";
import NewArrivals from "../../components/Layout/NewArrivals/NewArrivals";
import CategoryList from "../../components/Products/CategoryList";
// import OurCategories from "../../components/Products/OurCategories";

const Home = () => {
  return (
    <div className="bg-[#f5f5f5]">
      <Banner />
      <Shipping />
      <CategoryList />
      <Bestseller />
      {/* <OurCategories /> */}
      {/* <BestExperience /> */}
      <StoreLocation />
      <NewArrivals />
    </div>
  );
};

export default Home;
