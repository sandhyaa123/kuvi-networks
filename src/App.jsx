import { Routes, Route } from "react-router-dom";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import { Home, HowItWorksPage, JoinUs, Services, WhyChooseUs, ErrorPage } from "./pages";
import "./App.css";

const App = () => {
  return (
    <div>
      <Navbar />
      
      <div className="pt-20 lg:pt-24">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/why-us" element={<WhyChooseUs />} />
          <Route path="/join-us" element={<JoinUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/how-it-works" element={<HowItWorksPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
    
  );
};

export default App;
