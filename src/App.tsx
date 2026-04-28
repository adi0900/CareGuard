/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BrowserRouter, Routes, Route, Outlet, useLocation } from 'react-router-dom';
import { Header, Footer } from './layouts/RootLayout';
import LandingPage from './pages/LandingPage';
import UploadScreen from './pages/UploadScreen';
import AnalyzingScreen from './pages/AnalyzingScreen';
import ReviewScreen from './pages/ReviewScreen';
import MyAppealsScreen from './pages/MyAppealsScreen';
import AppealDetailScreen from './pages/AppealDetailScreen';
import ResourcesScreen from './pages/ResourcesScreen';
import HowItWorksScreen from './pages/HowItWorksScreen';
import ContactScreen from './pages/ContactScreen';
import PrivacyScreen from './pages/PrivacyScreen';
import NotFoundScreen from './pages/NotFoundScreen';

// ScrollToTop component ensures we start at the top when navigating
function ScrollToTop() {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function Wrapper() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-text-primary font-inter w-full overflow-x-hidden">
      <ScrollToTop />
      <Header />
      <main className="flex-1 flex flex-col w-full">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Wrapper />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/appeal/upload" element={<UploadScreen />} />
          <Route path="/appeal/analyzing" element={<AnalyzingScreen />} />
          <Route path="/appeal/review" element={<ReviewScreen />} />
          <Route path="/my-appeals" element={<MyAppealsScreen />} />
          <Route path="/my-appeals/:id" element={<AppealDetailScreen />} />
          <Route path="/resources" element={<ResourcesScreen />} />
          <Route path="/how-it-works" element={<HowItWorksScreen />} />
          <Route path="/contact" element={<ContactScreen />} />
          <Route path="/privacy" element={<PrivacyScreen />} />
          <Route path="*" element={<NotFoundScreen />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
