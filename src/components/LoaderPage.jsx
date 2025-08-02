import React, { useState, useEffect, useRef, useCallback } from 'react';

const LoaderPage = ({ onLoaded }) => {
  const [progress, setProgress] = useState(0);
  const [animationPhase, setAnimationPhase] = useState(0);
  const [nowFontIndex, setNowFontIndex] = useState(0);
  const [scrollFade, setScrollFade] = useState(0); // 0 = no fade, 1 = fully faded
  const [loadingComplete, setLoadingComplete] = useState(false);
  
  const intervalRef = useRef(null);
  const blinkIntervalRef = useRef(null);

  const nowFonts = ['font-plain', 'font-silk'];

  const stableOnLoaded = useCallback(() => {
    if (onLoaded) {
      onLoaded();
    }
  }, [onLoaded]);

  // Handle scroll events after loading is complete
  useEffect(() => {
    if (!loadingComplete) return;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = 400; // Fade out over 400px of scroll (slower)
      const fadeAmount = Math.min(scrollY / maxScroll, 1);
      setScrollFade(fadeAmount);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [loadingComplete]);

  useEffect(() => {
    // Phase 1: Animate text elements in
    setTimeout(() => setAnimationPhase(1), 100);
    
    // Start the counter
    const counterTimeout = setTimeout(() => {
      setAnimationPhase(2);
      intervalRef.current = setInterval(() => {
        setProgress(prevProgress => {
          if (prevProgress >= 100) {
            clearInterval(intervalRef.current);
            // Stop the blinking when the counter is done
            if (blinkIntervalRef.current) {
              clearInterval(blinkIntervalRef.current);
            }
            setAnimationPhase(3);
            setLoadingComplete(true); // Enable scroll detection
            
            setTimeout(() => {
              stableOnLoaded();
            }, 1000);

            return 100;
          }
          return prevProgress + 1;
        });
      }, 25);
    }, 200);

    // Start blinking "NOW" as soon as it appears
    const blinkTimeout = setTimeout(() => {
      blinkIntervalRef.current = setInterval(() => {
        setNowFontIndex(prevIndex => (prevIndex + 1) % nowFonts.length);
      }, 600); // Blink speed
    }, 1000); // Starts blinking after 1s (100ms phase change + 900ms transition delay)

    // Cleanup must clear all timers and intervals
    return () => {
      clearTimeout(counterTimeout);
      clearTimeout(blinkTimeout);
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      if (blinkIntervalRef.current) {
        clearInterval(blinkIntervalRef.current);
      }
    };
  }, [stableOnLoaded, nowFonts.length]);

  return (
    <>
      <div 
        className="fixed inset-0 bg-black text-white flex items-center justify-start pl-20 p-2 transition-opacity duration-500"
        style={{ 
          opacity: 1 - scrollFade,
          pointerEvents: scrollFade > 0.9 ? 'none' : 'auto'
        }}
      >
        <div className="text-left w-full max-w-6xl">
          {/* Counter and "YOUR" */}
          <div className="flex items-start gap-11 mb-3" style={{ marginLeft: '40px' }}>
            <div
              className={`font-silk italic transition-opacity duration-500 ${
                animationPhase >= 2 ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ fontSize: '3.2vw', fontWeight: 100, transitionDelay: '200ms' }}
            >
              {progress} - 100
            </div>
            <h1 
              className={`text-6xl sm:text-7xl md:text-8xl font-plain leading-tight transition-all duration-700 ${
                animationPhase >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-24'
              }`}
              style={{ transitionDelay: '0ms' }}
            >
              YOUR
            </h1>
          </div>
          
          {/* Main Text */}
          <div className="font-plain">
            <h1 className="text-6xl sm:text-7xl md:text-8xl leading-tight">
              <span 
                className={`inline-block transition-all duration-700 ${
                  animationPhase >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-24'
                }`}
                style={{ transitionDelay: '300ms' }}
              >
                WEB EXPERIENCE
              </span>
              <br />
              
              {/* Flexbox container for "IS LOADING RIGHT" and "NOW" */}
              <div className="flex items-baseline">
                <h1 
                  className={`text-6xl sm:text-7xl md:text-8xl leading-tight transition-all duration-700 ${
                    animationPhase >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-24'
                  }`}
                  style={{ transitionDelay: '600ms' }}
                >
                  IS LOADING RIGHT{' '}
                </h1>
                
                {/* NOW container with overlapping fonts using transform */}
                <div 
                  className={`inline-block text-6xl sm:text-7xl md:text-8xl leading-tight transition-all duration-700 ${
                    animationPhase >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-24'
                  }`}
                  style={{ 
                    transitionDelay: '900ms',
                    position: 'relative'
                  }}
                >
                  {/* Font-plain version */}
                  <h1 
                    className={`font-plain transition-opacity duration-300 ${
                      nowFontIndex === 0 ? 'opacity-100' : 'opacity-0'
                    }`}
                    style={{ marginLeft: 10 }}
                  >
                    NOW
                  </h1>
                  {/* Font-silk version overlapped using transform */}
                  <h1 
                    className={`font-silk italic ml-30 transition-opacity duration-300 ${
                      nowFontIndex === 1 ? 'opacity-100' : 'opacity-0'
                    }`}
                    style={{ 
                      marginLeft: 10,
                      transform: 'translateY(-100%)',
                      position: 'relative',
                      WebkitTextStroke: '1px white',
                      WebkitTextFillColor: 'transparent',
                      color: 'transparent'
                    }}
                  >
                    NOW
                  </h1>
                </div>
              </div>
            </h1>
          </div>
          
          {/* "Please wait" text */}
          <div 
            className={`mt-4 transition-all duration-500 ${
              animationPhase >= 2 && progress > 40 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ marginLeft: '300px' }}
          >
            <p className="text-sm font-serif text-white-400">
              Please wait
              <br />
              a few seconds
            </p>
          </div>
        </div>
      </div>

      {/* Scroll hint that appears after loading is complete */}
      {loadingComplete && scrollFade < 0.1 && (
        <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 text-white text-sm opacity-60 animate-pulse">
          Scroll down to continue
        </div>
      )}

      {/* Content area to enable scrolling - just a small amount of black space */}
      <div className="h-screen bg-black"></div>
      <div className="h-screen bg-black"></div>
    </>
  );
};

export default LoaderPage;