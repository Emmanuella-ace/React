import Header from "./pages/Header/Header1";
import Footer from "./pages/Footer/Footer";
import HomeScreen from "./pages/HomePage/HomeScreen/HomeScreen";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ShopHomeScreen from "./pages/ShopPage/ShopHomeScree/ShopHomeScreen";
import AboutHomeScreen from "./pages/AboutPage/AboutHomeScreen/AboutHomeScreen";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/shop" element={<ShopHomeScreen />} />
          <Route path="/about" element={<AboutHomeScreen />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
