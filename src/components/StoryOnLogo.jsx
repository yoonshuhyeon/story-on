import React from 'react';

export default function StoryOnLogo({
  height = 24,
  className,
  title = 'story on',
  showWordmark = true,
}) {
  const width = showWordmark ? Math.round((240 / 40) * height) : height;

  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox={showWordmark ? '0 0 240 40' : '0 0 40 40'}
      width={width}
      height={height}
      role="img"
      aria-label={title}
      focusable="false"
    >
      <defs>
        <linearGradient id="storyon-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--accent-primary)" />
          <stop offset="100%" stopColor="var(--accent-secondary)" />
        </linearGradient>
      </defs>

      <g transform="translate(4,4)">
        <circle cx="16" cy="16" r="14" fill="none" stroke="url(#storyon-grad)" strokeWidth="3" />
        <path d="M16 4.5v8" fill="none" stroke="url(#storyon-grad)" strokeWidth="3" strokeLinecap="round" />
      </g>

      {showWordmark && (
        <g
          transform="translate(44,0)"
          fontFamily="Outfit, Pretendard, system-ui, -apple-system, Segoe UI, sans-serif"
        >
          <text
            x="0"
            y="24"
            fontSize="22"
            fontWeight="800"
            letterSpacing="-0.6"
            fill="var(--text-primary)"
          >
            story
          </text>

          <g transform="translate(86,10)">
            <rect x="0" y="0" width="56" height="22" rx="11" fill="url(#storyon-grad)" />
            <text
              x="28"
              y="15"
              fontSize="13"
              fontWeight="800"
              textAnchor="middle"
              dominantBaseline="middle"
              fill="#ffffff"
              letterSpacing="0.8"
            >
              ON
            </text>
          </g>
        </g>
      )}
    </svg>
  );
}
