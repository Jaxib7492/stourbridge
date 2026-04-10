import React from 'react';
import { FAQPage } from './pages/FAQPage';
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

import HearingAidsBirmingham from './pages/HearingAidsBirmingham';
import HearingAidsDudley from './pages/HearingAidsDudley';
import HearingAidsHalesowen from './pages/HearingAidsHalesowen';
import HearingAidsWolverhampton from './pages/HearingAidsWolverhampton';
import HearingAidsKidderminster from './pages/HearingAidsKidderminster';
import HearingAidsBromsgrove from './pages/HearingAidsBromsgrove';
import HearingAidsRedditch from './pages/HearingAidsRedditch';
import HearingAidsOldbury from './pages/HearingAidsOldbury';
import HearingAidsKingswinford from './pages/HearingAidsKingswinford';
import HearingAidsBrierleyHill from './pages/HearingAidsBrierleyHill';

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

          <Route path="/faq" element={<FAQPage />} />

          <Route path="/hearing-aids-birmingham" element={<HearingAidsBirmingham />} />
          <Route path="/hearing-aids-dudley" element={<HearingAidsDudley />} />
          <Route path="/hearing-aids-halesowen" element={<HearingAidsHalesowen />} />
          <Route path="/hearing-aids-wolverhampton" element={<HearingAidsWolverhampton />} />
          <Route path="/hearing-aids-kidderminster" element={<HearingAidsKidderminster />} />
          <Route path="/hearing-aids-bromsgrove" element={<HearingAidsBromsgrove />} />
          <Route path="/hearing-aids-redditch" element={<HearingAidsRedditch />} />
          <Route path="/hearing-aids-oldbury" element={<HearingAidsOldbury />} />
          <Route path="/hearing-aids-kingswinford" element={<HearingAidsKingswinford />} />
          <Route path="/hearing-aids-brierley-hill" element={<HearingAidsBrierleyHill />} />

        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
