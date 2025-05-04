import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import NET from "vanta/dist/vanta.cells.min";

const Background = () => {
  const [vantaEffect] = useState(null);
  const vantaRef = useRef(null);

  useEffect(() => {
    const vantaEffect = NET({
      el: vantaRef.current,
      THREE,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      scale: 1.0,
      scaleMobile: 1.0,
      backgroundColor: 0x2a152f, // Deep purple background
      color1: 0x813589, // Vibrant purple cells
      color2: 0xd176c6, // Soft pink cell outlines
      size: 1.2, // Makes cells smoother & bigger
      speed: 0.8, // Slows down movement
    });

    return () => {
      if (vantaEffect) vantaEffect.destroy(); // Cleanup on unmount
    };
  }, [vantaEffect]);

  return <div ref={vantaRef} className="absolute inset-0 w-full h-full " />;
};

export default Background;
