import Category from "../../components/category/Category"
import Herosection from "../../components/heroSection/Herosection"
import HomePageProductCard from "../../components/homePageProductCard/HomePageProductCard"
import Loader from "../../components/loader/Loader"
import Testimonial from "../../components/testimonial/Testimonial"
import Track from "../../components/track/Track"

const Home = () => {
  return (
    <>
    <Herosection />
    <Category />
    <HomePageProductCard />
    <Track />
    <Testimonial />
    <Loader />
    </>
  )
}

export default Home