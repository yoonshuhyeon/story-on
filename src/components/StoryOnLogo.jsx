import React from 'react';

const LogoSymbol = ({ size = 64, style }) => (
  <svg 
    width={size * 1.3} 
    height={size * 1.0} 
    viewBox="0 0 110 80" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    style={style}
  >
    <g stroke="currentColor" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round">
      <path d="M 44 25 L 20 25 C 2 25, 2 45, 20 45 L 38 45 C 54 45, 54 65, 38 65 L 14 65" />
      <path d="M 99 31 A 20 20 0 1 1 71 31" />
      <path d="M 85 16 L 85 41" />
    </g>
  </svg>
);

const PowerButtonO = ({ size = 28, style }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 40 40" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    style={style}
  >
    <g stroke="currentColor" strokeWidth="6" strokeLinecap="round">
      <path d="M 30 10 A 14 14 0 1 1 10 10" />
      <path d="M 20 2 L 20 18" />
    </g>
  </svg>
);

const StoryOnLogo = ({ size = 48, className = '' }) => {
  return (
    <div className={`logo-wrapper ${className}`} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
      <LogoSymbol size={size} style={{ color: 'var(--accent-primary)' }} />
      <div style={{ display: 'flex', alignItems: 'center', fontSize: `${size * 0.7}px`, fontFamily: 'Outfit, sans-serif', paddingTop: '2px' }}>
        <span style={{ color: 'var(--accent-tertiary)', fontWeight: '800', letterSpacing: '-0.3px' }}>Story-</span>
        <PowerButtonO size={size * 0.65} style={{ color: 'var(--accent-primary)', marginLeft: '6px', marginRight: '1px', transform: 'translateY(-2px)' }} />
        <span style={{ color: 'var(--accent-primary)', fontWeight: '800', letterSpacing: '-0.3px' }}>N</span>
      </div>
    </div>
  );
};

export default StoryOnLogo;
