import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import IntroAnimation from './components/IntroAnimation';
import HorizontalScroller from './components/HorizontalScroller';
import HeroSection from './components/HeroSection';
import WeValueSection from './components/WeValueSection';
import AwardSection from './components/AwardSection';
import PhotoMosaicSection from './components/PhotoMosaicSection';
import MissionSection from './components/MissionSection';
import HonorCodeSection from './components/HonorCodeSection';
import PassionsSection from './components/PassionsSection';
import DivisionsSection from './components/DivisionsSection';
import AdmissionSection from './components/AdmissionSection';
import ValuePage from './pages/ValuePage';
import MissionPage from './pages/MissionPage';
import HonorCodePage from './pages/HonorCodePage';
import PassionsPage from './pages/PassionsPage';
import DivisionPage from './pages/DivisionPage';
import AdmissionPage from './pages/AdmissionPage';
import VisitPage from './pages/VisitPage';
import './App.css';

function HomePage({ introComplete, onIntroComplete }) {
  return (
    <>
      {!introComplete && (
        <IntroAnimation onComplete={onIntroComplete} />
      )}
      <Navbar />
      <HorizontalScroller>
        <HeroSection />
        <WeValueSection />
        <AwardSection />
        <PhotoMosaicSection />
        <MissionSection />
        <HonorCodeSection />
        <PassionsSection />
        <DivisionsSection />
        <AdmissionSection />
      </HorizontalScroller>
    </>
  );
}

export default function App() {
  const [introComplete, setIntroComplete] = useState(false);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <HomePage
            introComplete={introComplete}
            onIntroComplete={() => setIntroComplete(true)}
          />
        }
      />
      <Route path="/values/:value" element={<><Navbar /><div className="subpage-shell"><ValuePage /></div></>} />
      <Route path="/mission" element={<><Navbar /><div className="subpage-shell"><MissionPage /></div></>} />
      <Route path="/honor-code" element={<><Navbar /><div className="subpage-shell"><HonorCodePage /></div></>} />
      <Route path="/passions" element={<><Navbar /><div className="subpage-shell"><PassionsPage /></div></>} />
      <Route path="/divisions/:division" element={<><Navbar /><div className="subpage-shell"><DivisionPage /></div></>} />
      <Route path="/admission" element={<><Navbar /><div className="subpage-shell"><AdmissionPage /></div></>} />
      <Route path="/visit" element={<><Navbar /><div className="subpage-shell"><VisitPage /></div></>} />
    </Routes>
  );
}
