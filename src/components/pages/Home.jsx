import "../../App.css";
import Footer from "../Footer";
import Header from "../Header";
import ListCard from "../ListCard";
import Promotion from "../Promotion";
import Slider from "../Slider";
function Home() {
  return (
    <div>
      <Header />
      <Slider />
      <ListCard />
      <Promotion />
      <Footer />
    </div>
  );
}
export default Home;
