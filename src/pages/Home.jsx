import HomeBanners from "@/components/layouts/HomeBanners";
import HomeCategorys from "@/components/layouts/HomeCategorys";
import HomeMoreItems from "@/components/layouts/HomeMoreItems";
import HomeReviews from "@/components/layouts/HomeReviews";
import HomeTodayDeals from "@/components/layouts/HomeTodayDeals";

const Home = () => {
  console.log({
    HomeBanners,
    HomeTodayDeals,
    HomeCategorys,
    HomeMoreItems,
    HomeReviews,
  });

  return (
    <div>
      <HomeBanners />
      <HomeTodayDeals />
      <HomeCategorys />
      <HomeMoreItems />
      <HomeReviews />
    </div>
  );
};

export default Home;
