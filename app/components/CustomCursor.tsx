'use client';

import { useState, useEffect } from 'react';

export const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(true); // Start visible
  const [isClicking, setIsClicking] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if mobile/tablet
    const checkMobile = () => {
      const mobile = window.innerWidth <= 1024;
      setIsMobile(mobile);
      // Hide cursor on mobile
      if (mobile) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });

      // Check if hovering over interactive elements
      const target = e.target as HTMLElement;
      const isInteractive = target.closest('a, button, input, textarea, select, [role="button"]');
      setIsHovering(!!isInteractive);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => {
      setIsVisible(false);
      setIsClicking(false);
      setIsHovering(false);
    };

    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.body.addEventListener('mouseenter', handleMouseEnter);
    document.body.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.body.removeEventListener('mouseenter', handleMouseEnter);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  // Don't show custom cursor on mobile
  if (!isVisible || isMobile) return null;

  return (
    <div
      className="fixed pointer-events-none z-[9999] transition-transform duration-100 ease-out"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: `translate(-50%, -50%) scale(${isClicking ? 0.85 : isHovering ? 1.1 : 1})`,
      }}
    >
      {/* Mickey Mouse / macOS Style Glove Hand Cursor */}
      <svg
        width="64"
        height="64"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`transition-all duration-200 ${isClicking ? 'rotate-12' : ''}`}
      >
        {/* Shadow */}
        <ellipse
          cx="32"
          cy="58"
          rx="18"
          ry="4"
          fill="black"
          opacity="0.2"
        />

        {/* Wrist/Cuff */}
        <rect
          x="24"
          y="44"
          width="16"
          height="8"
          rx="2"
          fill="#FFD700"
          stroke="#000"
          strokeWidth="1.5"
        />

        {/* Palm */}
        <ellipse
          cx="32"
          cy="32"
          rx="14"
          ry="16"
          fill="white"
          stroke="#000"
          strokeWidth="1.5"
        />

        {/* Thumb */}
        <g className={isClicking ? 'translate-x-1' : ''}>
          <ellipse
            cx="18"
            cy="32"
            rx="6"
            ry="10"
            fill="white"
            stroke="#000"
            strokeWidth="1.5"
            transform="rotate(-25 18 32)"
          />
          {/* Thumb knuckle line */}
          <path
            d="M 15 28 Q 18 32 15 36"
            stroke="#E5E5E5"
            strokeWidth="1"
            fill="none"
          />
        </g>

        {/* Index Finger (Pointing) */}
        <g className={isHovering ? 'translate-y-[-2px]' : ''}>
          <rect
            x="28"
            y="8"
            width="8"
            height="20"
            rx="4"
            fill="white"
            stroke="#000"
            strokeWidth="1.5"
          />
          {/* Fingertip */}
          <ellipse
            cx="32"
            cy="10"
            rx="4.5"
            ry="5"
            fill="white"
            stroke="#000"
            strokeWidth="1.5"
          />
          {/* Knuckle lines */}
          <line x1="28" y1="18" x2="36" y2="18" stroke="#E5E5E5" strokeWidth="1" />
          <line x1="28" y1="23" x2="36" y2="23" stroke="#E5E5E5" strokeWidth="1" />
        </g>

        {/* Middle Finger */}
        <g className={isClicking ? 'translate-y-1' : ''}>
          <rect
            x="35"
            y="12"
            width="7"
            height="18"
            rx="3.5"
            fill="white"
            stroke="#000"
            strokeWidth="1.5"
          />
          <ellipse
            cx="38.5"
            cy="13"
            rx="4"
            ry="4.5"
            fill="white"
            stroke="#000"
            strokeWidth="1.5"
          />
          <line x1="35" y1="21" x2="42" y2="21" stroke="#E5E5E5" strokeWidth="1" />
        </g>

        {/* Ring Finger */}
        <g className={isClicking ? 'translate-y-1' : ''}>
          <rect
            x="41"
            y="16"
            width="6"
            height="16"
            rx="3"
            fill="white"
            stroke="#000"
            strokeWidth="1.5"
          />
          <ellipse
            cx="44"
            cy="17"
            rx="3.5"
            ry="4"
            fill="white"
            stroke="#000"
            strokeWidth="1.5"
          />
          <line x1="41" y1="24" x2="47" y2="24" stroke="#E5E5E5" strokeWidth="1" />
        </g>

        {/* Pinky Finger */}
        <g className={isClicking ? 'translate-y-1' : ''}>
          <rect
            x="46"
            y="20"
            width="5"
            height="13"
            rx="2.5"
            fill="white"
            stroke="#000"
            strokeWidth="1.5"
          />
          <ellipse
            cx="48.5"
            cy="21"
            rx="3"
            ry="3.5"
            fill="white"
            stroke="#000"
            strokeWidth="1.5"
          />
          <line x1="46" y1="27" x2="51" y2="27" stroke="#E5E5E5" strokeWidth="0.8" />
        </g>

        {/* Palm highlight */}
        <ellipse
          cx="30"
          cy="34"
          rx="6"
          ry="8"
          fill="white"
          opacity="0.3"
        />

        {/* Cuff details */}
        <line x1="24" y1="48" x2="40" y2="48" stroke="#000" strokeWidth="1" opacity="0.3" />
        <rect x="26" y="45" width="2" height="6" rx="1" fill="#FFB700" />
        <rect x="36" y="45" width="2" height="6" rx="1" fill="#FFB700" />
      </svg>
    </div>
  );
};
