import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { HomePage } from './pages/HomePage';
import { EarwaxRemovalPage } from './pages/EarwaxRemovalPage';
import { HearingAidsPage } from './pages/HearingAidsPage';
import { AftercarePage } from './pages/AftercarePage';
import { FinancingPage } from './pages/FinancingPage';
import { HomeVisitsPage } from './pages/HomeVisitsPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import ScrollToTop from './components/ScrollToTop'; // 👈 Import ScrollToTop

function App() {
  return (
    <Router>
      <ScrollToTop /> {/* 👈 Add this here, outside Layout */}
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/earwax-removal" element={<EarwaxRemovalPage />} />
          <Route path="/hearing-aids" element={<HearingAidsPage />} />
          <Route path="/aftercare" element={<AftercarePage />} />
          <Route path="/financing" element={<FinancingPage />} />
          <Route path="/home-visits" element={<HomeVisitsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
