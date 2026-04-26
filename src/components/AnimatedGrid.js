import React, { useEffect, useState, useCallback } from 'react';

const AnimatedGrid = () => {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const [absolutePosition, setAbsolutePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [pulseIntensity, setPulseIntensity] = useState(1);

  // Throttled mouse move handler for better performance
  const handleMouseMove = useCallback((e) => {
    const x = (e.clientX / window.innerWidth) * 100;
    const y = (e.clientY / window.innerHeight) * 100;
    
    // Store both percentage and absolute positions
    setMousePosition({ x, y });
    setAbsolutePosition({ x: e.clientX, y: e.clientY });
    
    // Simplified intensity calculation
    const centerX = 50;
    const centerY = 50;
    const distance = Math.sqrt(Math.pow(x - centerX, 2) + Math.pow(y - centerY, 2));
    const intensity = Math.max(0.3, 1.5 - (distance / 80));
    setPulseIntensity(intensity);
  }, []);

  useEffect(() => {
    let timeoutId;
    
    const throttledMouseMove = (e) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => handleMouseMove(e), 16); // ~60fps
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    window.addEventListener('mousemove', throttledMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('mousemove', throttledMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [handleMouseMove]);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Darker Main Grid Background */}
      <div className="absolute inset-0 bg-gray-900">
        
        {/* Darker Static Grid Pattern with Reduced Hover Effects */}
        <div 
          className="absolute inset-0 transition-opacity duration-700 ease-out"
          style={{ 
            opacity: isHovering ? 0.15 : 0.08,
            backgroundImage: `
              linear-gradient(rgba(99, 102, 241, ${0.2 * pulseIntensity}) 1px, transparent 1px),
              linear-gradient(90deg, rgba(99, 102, 241, ${0.2 * pulseIntensity}) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            filter: isHovering ? 'hue-rotate(15deg) brightness(1.1)' : 'none',
          }}
        />

        {/* Dynamic Cursor-Following Grid */}
        <div 
          className="absolute inset-0 transition-opacity duration-300 ease-out pointer-events-none"
          style={{ 
            opacity: isHovering ? 0.6 : 0.3,
          }}
        >
          {/* Dynamic Vertical Line at Cursor X Position */}
          <div
            className="absolute top-0 bottom-0 w-px transition-all duration-100 ease-out"
            style={{
              left: `${mousePosition.x}%`,
              background: `linear-gradient(to bottom, 
                transparent 0%,
                rgba(${isHovering ? '147, 51, 234' : '99, 102, 241'}, 0.8) 20%,
                rgba(${isHovering ? '59, 130, 246' : '129, 140, 248'}, 0.9) 50%,
                rgba(${isHovering ? '147, 51, 234' : '99, 102, 241'}, 0.8) 80%,
                transparent 100%
              )`,
              filter: isHovering ? 'drop-shadow(0 0 8px currentColor)' : 'drop-shadow(0 0 4px currentColor)',
              transform: `scaleY(${isHovering ? 1.1 : 1})`,
              width: isHovering ? '2px' : '1px',
            }}
          />
          
          {/* Dynamic Horizontal Line at Cursor Y Position */}
          <div
            className="absolute left-0 right-0 h-px transition-all duration-100 ease-out"
            style={{
              top: `${mousePosition.y}%`,
              background: `linear-gradient(to right, 
                transparent 0%,
                rgba(${isHovering ? '59, 130, 246' : '99, 102, 241'}, 0.8) 20%,
                rgba(${isHovering ? '147, 51, 234' : '129, 140, 248'}, 0.9) 50%,
                rgba(${isHovering ? '59, 130, 246' : '99, 102, 241'}, 0.8) 80%,
                transparent 100%
              )`,
              filter: isHovering ? 'drop-shadow(0 0 8px currentColor)' : 'drop-shadow(0 0 4px currentColor)',
              transform: `scaleX(${isHovering ? 1.1 : 1})`,
              height: isHovering ? '2px' : '1px',
            }}
          />
          
          {/* Intersection Point at Cursor */}
          <div
            className="absolute w-2 h-2 rounded-full transition-all duration-100 ease-out"
            style={{
              left: `${mousePosition.x}%`,
              top: `${mousePosition.y}%`,
              transform: 'translate(-50%, -50%)',
              background: isHovering 
                ? 'radial-gradient(circle, rgba(255, 255, 255, 0.9), rgba(147, 51, 234, 0.7), transparent)'
                : 'radial-gradient(circle, rgba(255, 255, 255, 0.6), rgba(99, 102, 241, 0.5), transparent)',
              filter: isHovering ? 'drop-shadow(0 0 10px currentColor)' : 'drop-shadow(0 0 5px currentColor)',
              boxShadow: isHovering 
                ? '0 0 20px rgba(147, 51, 234, 0.6), 0 0 40px rgba(59, 130, 246, 0.4)'
                : '0 0 10px rgba(99, 102, 241, 0.4)',
            }}
          />
          
          {/* Grid Lines Radiating from Cursor */}
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={`radial-${i}`}
              className="absolute origin-center transition-all duration-200 ease-out"
              style={{
                left: `${mousePosition.x}%`,
                top: `${mousePosition.y}%`,
                width: '200px',
                height: '1px',
                background: `linear-gradient(to right, 
                  rgba(${isHovering ? '147, 51, 234' : '99, 102, 241'}, 0.6), 
                  transparent
                )`,
                transform: `translate(-50%, -50%) rotate(${i * 45}deg)`,
                opacity: isHovering ? 0.7 : 0.3,
                filter: 'drop-shadow(0 0 3px currentColor)',
              }}
            />
          ))}
        </div>

        {/* Reduced Animated Vertical Lines */}
        <div className="absolute inset-0">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={`v-line-${i}`}
              className="absolute top-0 bottom-0 w-px transition-all duration-500 ease-out"
              style={{
                left: `${i * 5}%`,
                background: `linear-gradient(to bottom, 
                  transparent, 
                  rgba(${isHovering ? '147, 51, 234' : '99, 102, 241'}, ${0.3 * pulseIntensity}), 
                  rgba(${isHovering ? '59, 130, 246' : '129, 140, 248'}, ${0.4 * pulseIntensity}),
                  transparent
                )`,
                animationDelay: `${i * 0.2}s`,
                animationDuration: `${2 + (i % 3)}s`,
                opacity: Math.sin(i * 0.5) * 0.3 + 0.4,
                transform: isHovering ? `scaleY(${1.1 + Math.sin(i * 0.3) * 0.1})` : 'scaleY(1)',
                filter: isHovering ? 'drop-shadow(0 0 3px currentColor)' : 'none',
              }}
            />
          ))}
        </div>
        
        {/* Reduced Animated Horizontal Lines */}
        <div className="absolute inset-0">
          {Array.from({ length: 15 }).map((_, i) => (
            <div
              key={`h-line-${i}`}
              className="absolute left-0 right-0 h-px transition-all duration-500 ease-out"
              style={{
                top: `${i * 6.67}%`,
                background: `linear-gradient(to right, 
                  transparent, 
                  rgba(${isHovering ? '59, 130, 246' : '99, 102, 241'}, ${0.3 * pulseIntensity}), 
                  rgba(${isHovering ? '147, 51, 234' : '129, 140, 248'}, ${0.4 * pulseIntensity}),
                  transparent
                )`,
                animationDelay: `${i * 0.25}s`,
                animationDuration: `${3 + (i % 2)}s`,
                opacity: Math.cos(i * 0.7) * 0.2 + 0.3,
                transform: isHovering ? `scaleX(${1.05 + Math.cos(i * 0.4) * 0.05})` : 'scaleX(1)',
                filter: isHovering ? 'drop-shadow(0 0 2px currentColor)' : 'none',
              }}
            />
          ))}
        </div>

        {/* Enhanced Interactive Glow Effect with Cursor Grid */}
        <div 
          className="absolute transition-all duration-700 ease-out"
          style={{
            left: `${mousePosition.x}%`,
            top: `${mousePosition.y}%`,
            transform: 'translate(-50%, -50%)',
            willChange: 'transform',
          }}
        >
          {/* Primary Cursor Glow */}
          <div 
            className="absolute w-80 h-80 rounded-full blur-3xl transition-all duration-500 ease-out"
            style={{
              background: isHovering 
                ? 'radial-gradient(circle, rgba(147, 51, 234, 0.15), rgba(59, 130, 246, 0.08), transparent)'
                : 'radial-gradient(circle, rgba(99, 102, 241, 0.1), rgba(129, 140, 248, 0.05), transparent)',
              transform: `scale(${isHovering ? 1.2 : 1})`,
            }}
          />
          
          {/* Cursor Grid Overlay */}
          <div 
            className="absolute w-96 h-96 transition-all duration-300 ease-out"
            style={{
              background: isHovering ? `
                linear-gradient(rgba(147, 51, 234, 0.3) 1px, transparent 1px),
                linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
              ` : `
                linear-gradient(rgba(99, 102, 241, 0.2) 1px, transparent 1px),
                linear-gradient(90deg, rgba(129, 140, 248, 0.2) 1px, transparent 1px)
              `,
              backgroundSize: '40px 40px',
              backgroundPosition: 'center center',
              opacity: isHovering ? 0.6 : 0.3,
              transform: 'translate(-50%, -50%)',
              borderRadius: '50%',
              filter: 'blur(1px)',
            }}
          />
        </div>

        {/* Cursor-Following Particles */}
        <div className="absolute inset-0">
          {Array.from({ length: 20 }).map((_, i) => {
            const angle = (i * 18) * (Math.PI / 180);
            const radius = 50 + (i * 15);
            const offsetX = Math.cos(angle) * radius;
            const offsetY = Math.sin(angle) * radius;
            
            return (
              <div
                key={`cursor-particle-${i}`}
                className="absolute rounded-full transition-all duration-500 ease-out"
                style={{
                  width: isHovering ? '4px' : '2px',
                  height: isHovering ? '4px' : '2px',
                  left: `calc(${mousePosition.x}% + ${offsetX}px)`,
                  top: `calc(${mousePosition.y}% + ${offsetY}px)`,
                  transform: 'translate(-50%, -50%)',
                  background: isHovering 
                    ? `rgba(${i % 3 === 0 ? '147, 51, 234' : i % 3 === 1 ? '59, 130, 246' : '255, 255, 255'}, 0.8)`
                    : 'rgba(99, 102, 241, 0.6)',
                  opacity: isHovering ? 0.9 : 0.4,
                  filter: isHovering ? 'drop-shadow(0 0 4px currentColor)' : 'none',
                  animationDelay: `${i * 0.1}s`,
                }}
              />
            );
          })}
        </div>

        {/* Cursor-Responsive Grid Squares */}
        <div className="absolute inset-0">
          {Array.from({ length: 12 }).map((_, i) => {
            const angle = (i * 30) * (Math.PI / 180); // Convert to radians
            const radius = 100 + (i * 20);
            const offsetX = Math.cos(angle) * radius;
            const offsetY = Math.sin(angle) * radius;
            
            return (
              <div
                key={`cursor-square-${i}`}
                className="absolute border transition-all duration-700 ease-out"
                style={{
                  width: `${20 + Math.random() * 30}px`,
                  height: `${20 + Math.random() * 30}px`,
                  left: `calc(${mousePosition.x}% + ${offsetX}px)`,
                  top: `calc(${mousePosition.y}% + ${offsetY}px)`,
                  transform: 'translate(-50%, -50%)',
                  borderColor: isHovering 
                    ? (i % 3 === 0 ? 'rgba(147, 51, 234, 0.5)' : 
                       i % 3 === 1 ? 'rgba(59, 130, 246, 0.5)' : 
                       'rgba(129, 140, 248, 0.5)')
                    : 'rgba(99, 102, 241, 0.3)',
                  borderWidth: '1px',
                  opacity: isHovering ? 0.7 : 0.3,
                  filter: isHovering ? 'drop-shadow(0 0 5px currentColor)' : 'none',
                  rotate: `${i * 15}deg`,
                }}
              />
            );
          })}
        </div>

        {/* Reduced Glowing Orbs */}
        <div className="absolute inset-0">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={`orb-${i}`}
              className="absolute rounded-full animate-float-slow transition-all duration-1000 ease-out"
              style={{
                width: `${20 + Math.random() * 40}px`,
                height: `${20 + Math.random() * 40}px`,
                left: `${Math.random() * 90}%`,
                top: `${Math.random() * 90}%`,
                background: isHovering 
                  ? `radial-gradient(circle, rgba(${i % 3 === 0 ? '147, 51, 234' : i % 3 === 1 ? '59, 130, 246' : '129, 140, 248'}, 0.3), transparent)`
                  : `radial-gradient(circle, rgba(99, 102, 241, 0.2), transparent)`,
                animationDelay: `${i * 2}s`,
                animationDuration: `${10 + Math.random() * 5}s`,
                filter: 'blur(1px)',
                transform: isHovering ? `scale(${1.2 + Math.sin(i) * 0.1})` : 'scale(1)',
                opacity: isHovering ? 0.4 : 0.15,
              }}
            />
          ))}
        </div>

        {/* Subtle Scanning Lines */}
        <div className="absolute inset-0">
          <div 
            className="absolute w-full h-px animate-scan-horizontal transition-all duration-700 ease-out"
            style={{
              background: isHovering 
                ? 'linear-gradient(to right, transparent, rgba(147, 51, 234, 0.4), rgba(59, 130, 246, 0.4), transparent)'
                : 'linear-gradient(to right, transparent, rgba(99, 102, 241, 0.3), transparent)',
              filter: isHovering ? 'drop-shadow(0 0 3px currentColor)' : 'none',
              opacity: isHovering ? 0.6 : 0.2,
            }}
          />
          <div 
            className="absolute h-full w-px animate-scan-vertical transition-all duration-700 ease-out"
            style={{ 
              animationDelay: '3s',
              background: isHovering 
                ? 'linear-gradient(to bottom, transparent, rgba(59, 130, 246, 0.4), rgba(147, 51, 234, 0.4), transparent)'
                : 'linear-gradient(to bottom, transparent, rgba(99, 102, 241, 0.3), transparent)',
              filter: isHovering ? 'drop-shadow(0 0 3px currentColor)' : 'none',
              opacity: isHovering ? 0.6 : 0.2,
            }}
          />
        </div>

        {/* Simplified Corner Accent Lines */}
        <div className="absolute inset-0">
          {/* Top Left */}
          <div 
            className="absolute top-6 left-6 transition-all duration-700 ease-out"
            style={{
              width: isHovering ? '60px' : '30px',
              height: '1px',
              background: isHovering 
                ? 'linear-gradient(to right, rgba(147, 51, 234, 0.5), transparent)'
                : 'linear-gradient(to right, rgba(99, 102, 241, 0.3), transparent)',
              filter: isHovering ? 'drop-shadow(0 0 3px currentColor)' : 'none',
            }}
          />
          <div 
            className="absolute top-6 left-6 transition-all duration-700 ease-out"
            style={{
              height: isHovering ? '60px' : '30px',
              width: '1px',
              background: isHovering 
                ? 'linear-gradient(to bottom, rgba(147, 51, 234, 0.5), transparent)'
                : 'linear-gradient(to bottom, rgba(99, 102, 241, 0.3), transparent)',
              filter: isHovering ? 'drop-shadow(0 0 3px currentColor)' : 'none',
            }}
          />
          
          {/* Top Right */}
          <div 
            className="absolute top-6 right-6 transition-all duration-700 ease-out"
            style={{
              width: isHovering ? '60px' : '30px',
              height: '1px',
              background: isHovering 
                ? 'linear-gradient(to left, rgba(59, 130, 246, 0.5), transparent)'
                : 'linear-gradient(to left, rgba(99, 102, 241, 0.3), transparent)',
              filter: isHovering ? 'drop-shadow(0 0 3px currentColor)' : 'none',
            }}
          />
          <div 
            className="absolute top-6 right-6 transition-all duration-700 ease-out"
            style={{
              height: isHovering ? '60px' : '30px',
              width: '1px',
              background: isHovering 
                ? 'linear-gradient(to bottom, rgba(59, 130, 246, 0.5), transparent)'
                : 'linear-gradient(to bottom, rgba(99, 102, 241, 0.3), transparent)',
              filter: isHovering ? 'drop-shadow(0 0 3px currentColor)' : 'none',
            }}
          />
          
          {/* Bottom Left */}
          <div 
            className="absolute bottom-6 left-6 transition-all duration-700 ease-out"
            style={{
              width: isHovering ? '60px' : '30px',
              height: '1px',
              background: isHovering 
                ? 'linear-gradient(to right, rgba(147, 51, 234, 0.5), transparent)'
                : 'linear-gradient(to right, rgba(99, 102, 241, 0.3), transparent)',
              filter: isHovering ? 'drop-shadow(0 0 3px currentColor)' : 'none',
            }}
          />
          <div 
            className="absolute bottom-6 left-6 transition-all duration-700 ease-out"
            style={{
              height: isHovering ? '60px' : '30px',
              width: '1px',
              background: isHovering 
                ? 'linear-gradient(to top, rgba(147, 51, 234, 0.5), transparent)'
                : 'linear-gradient(to top, rgba(99, 102, 241, 0.3), transparent)',
              filter: isHovering ? 'drop-shadow(0 0 3px currentColor)' : 'none',
            }}
          />
          
          {/* Bottom Right */}
          <div 
            className="absolute bottom-6 right-6 transition-all duration-700 ease-out"
            style={{
              width: isHovering ? '60px' : '30px',
              height: '1px',
              background: isHovering 
                ? 'linear-gradient(to left, rgba(59, 130, 246, 0.5), transparent)'
                : 'linear-gradient(to left, rgba(99, 102, 241, 0.3), transparent)',
              filter: isHovering ? 'drop-shadow(0 0 3px currentColor)' : 'none',
            }}
          />
          <div 
            className="absolute bottom-6 right-6 transition-all duration-700 ease-out"
            style={{
              height: isHovering ? '60px' : '30px',
              width: '1px',
              background: isHovering 
                ? 'linear-gradient(to top, rgba(59, 130, 246, 0.5), transparent)'
                : 'linear-gradient(to top, rgba(99, 102, 241, 0.3), transparent)',
              filter: isHovering ? 'drop-shadow(0 0 3px currentColor)' : 'none',
            }}
          />
        </div>

        {/* Subtle Center Crosshair */}
        <div className="absolute inset-0">
          <div 
            className="absolute top-1/2 left-0 right-0 transform -translate-y-1/2 transition-all duration-1000 ease-out"
            style={{
              height: isHovering ? '2px' : '1px',
              background: isHovering 
                ? 'linear-gradient(to right, transparent, rgba(255, 255, 255, 0.3), rgba(147, 51, 234, 0.4), rgba(255, 255, 255, 0.3), transparent)'
                : 'linear-gradient(to right, transparent, rgba(99, 102, 241, 0.2), transparent)',
              filter: isHovering ? 'drop-shadow(0 0 5px currentColor)' : 'none',
              opacity: isHovering ? 0.6 : 0.1,
            }}
          />
          <div 
            className="absolute left-1/2 top-0 bottom-0 transform -translate-x-1/2 transition-all duration-1000 ease-out"
            style={{
              width: isHovering ? '2px' : '1px',
              background: isHovering 
                ? 'linear-gradient(to bottom, transparent, rgba(255, 255, 255, 0.3), rgba(59, 130, 246, 0.4), rgba(255, 255, 255, 0.3), transparent)'
                : 'linear-gradient(to bottom, transparent, rgba(99, 102, 241, 0.2), transparent)',
              filter: isHovering ? 'drop-shadow(0 0 5px currentColor)' : 'none',
              opacity: isHovering ? 0.6 : 0.1,
            }}
          />
        </div>
        
      </div>
    </div>
  );
};

export default AnimatedGrid;