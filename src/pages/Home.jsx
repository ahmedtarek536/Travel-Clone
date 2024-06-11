import Download from "../components/Download";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Guide from "../components/Guide";
import Header from "../components/Header";
import Slider from "../components/Slider";
import View from "../components/View";

function Home() {
  return (
    <div className="w-full overflow-auto">
      <Header />
      <View />
      <Slider />
      <Guide />
      <Features />
      <Download />
      <Footer />
    </div>
  );
}

export default Home;
