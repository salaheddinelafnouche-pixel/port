import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { useScrollEffects } from './hooks/useScrollEffects';

import { HomePage } from './pages/HomePage';
import { ProjectsPage } from './pages/ProjectsPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { TermsPage } from './pages/TermsPage';
import { ResumePage } from './pages/ResumePage';
import { YouScentPage } from './pages/YouScentPage';
import { YouScentSaaSPage } from './pages/YouScentSaaSPage';
import { Tech4UPage } from './pages/Tech4UPage';
import { HikingModePage } from './pages/HikingModePage';
import { NotFoundPage } from './pages/NotFoundPage';

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}

export const App: React.FC = () => {
  const { pathname } = useLocation();
  useScrollEffects();

  const isStandaloneCaseStudy =
    pathname === '/youscent' ||
    pathname === '/youscent-saas' ||
    pathname === '/tech4u' ||
    pathname === '/hiking-mode';
  const isResume = pathname === '/resume';

  return (
    <>
      <div className="scroll-progress" aria-hidden="true" />
      <ScrollToTop />
      {!isStandaloneCaseStudy && !isResume && <Header />}
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/resume" element={<ResumePage />} />
        <Route path="/youscent" element={<YouScentPage />} />
        <Route path="/youscent-saas" element={<YouScentSaaSPage />} />
        <Route path="/tech4u" element={<Tech4UPage />} />
        <Route path="/hiking-mode" element={<HikingModePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      {!isStandaloneCaseStudy && !isResume && <Footer />}
    </>
  );
};
export default App;
