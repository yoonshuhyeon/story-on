import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { FolderHeart, Zap } from 'lucide-react';
import Home from './pages/Home';
import Main from './pages/Main';
import CCAI from './pages/CCAI';
import SCSAI from './pages/SCSAI';
import ETC from './pages/ETC';
import StudioDrawer from './components/StudioDrawer';

const NavLinks = () => {
  const location = useLocation();
  const links = [
    { path: '/', label: 'Home' },
    { path: '/main', label: 'Main' },
    { path: '/cc-ai', label: 'CC AI' },
    { path: '/scs-ai', label: 'SCS AI' },
    { path: '/etc', label: 'ETC' },
  ];

  return (
    <nav className="nav-links">
      {links.map((link) => (
        <Link
          key={link.path}
          to={link.path}
          className={`nav-item ${location.pathname === link.path ? 'active' : ''}`}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
};

const Header = ({ onOpenStudio }) => {
  return (
    <header className="header-nav glass-panel" style={{ borderRadius: 0, borderTop: 'none', borderLeft: 'none', borderRight: 'none' }}>
      <div className="logo-container">
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Zap size={24} color="var(--accent-primary)" />
          <span className="gradient-text">Story-On</span>
        </Link>
      </div>
      
      <NavLinks />
      
      <div>
        <button className="btn-glass" onClick={onOpenStudio}>
          <FolderHeart size={18} />
          <span>내 작업실</span>
        </button>
      </div>
    </header>
  );
};

function App() {
  const [isStudioOpen, setIsStudioOpen] = useState(false);

  return (
    <BrowserRouter>
      <div className="app-container">
        <Header onOpenStudio={() => setIsStudioOpen(true)} />
        
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/main" element={<Main />} />
            <Route path="/cc-ai" element={<CCAI />} />
            <Route path="/scs-ai" element={<SCSAI />} />
            <Route path="/etc" element={<ETC />} />
          </Routes>
        </main>

        <StudioDrawer isOpen={isStudioOpen} onClose={() => setIsStudioOpen(false)} />
      </div>
    </BrowserRouter>
  );
}

export default App;
