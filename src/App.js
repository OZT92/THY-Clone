import Header from "./components/Header";
import MainContainer from "./components/MainContainer";
import "./app.css";
import CarouselComponent from "./components/CarouselComponent";
import Sponsors from "./components/Sponsors";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="app">
      <Header />
      <MainContainer />
      <CarouselComponent />
      <Sponsors />
      <Footer />
    </div>
  );
};

export default App;
