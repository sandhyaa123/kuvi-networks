import { Routes, Route } from "react-router-dom";
import WhyChooseUs from "./pages/WhyChooseUs";
import WorkingPage from "./components/HowItWorks";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ErrorPage from "./components/ErorrPage";
import { Home, HowItWorksPage } from "./pages";


const App = () => {
  return (
    <div>
      <Navbar />
      <div className="pt-12 lg:pt-24">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/why-us" element={<WhyChooseUs />} />
          <Route path="/how-it-works" element={<HowItWorksPage />} />
          <Route path="/contact" element={<ErrorPage />} />
          <Route path="/jobs" element={<ErrorPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
    
  );
};

export default App;
