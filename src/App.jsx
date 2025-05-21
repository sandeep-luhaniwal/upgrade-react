import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/common/Footer";
import NavBar from "./components/common/NavBar";
import RefundPolicy from "./components/polices/RefundPolicy";
import PrivacyPolicy from "./components/polices/PrivacyPolicy";
import TermsAndConditions from "./components/polices/TermsAndConditions";
import ScrollToTop from "./components/common/ScrollToTop";
import HomePage from "./components/home/HomePage";
import BackToTop from "./components/common/BackToTop";

function App() {
  return (
    <div>
      <BackToTop />
      <ScrollToTop />
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/refund-policy" element={<RefundPolicy />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsAndConditions />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
