import React, { useRef, useEffect, useState } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

const TOTAL_FRAMES = 192;
const SMOOTH_FACTOR = 0.1; // smaller = smoother/slower interpolation

// Text data with headings and subheadings
const scrollingTexts = [
  { 
    heading: "Engineered for Motion", 
    subheading: "Every step is optimized for speed, comfort, and style. Shoex moves with you." 
  },
  { 
    heading: "Designed for the Future", 
    subheading: "Innovative materials meet sleek design. Step into tomorrow with confidence." 
  },
  { 
    heading: "Unleash Your Potential", 
    subheading: "Push past limits and reach new heights. Performance and comfort in every stride." 
  },
  { 
    heading: "Experience SHOEX", 
    subheading: "Join the revolution of footwear where technology and style unite seamlessly." 
  },
];


const HomeCanvasSmooth = () => {
  const canvasRef = useRef(null);
  const targetFrameRef = useRef(0);
  const currentFrameRef = useRef(0);
  const [frames, setFrames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });

  // Animate the opacity of the entire text block
  const textBlockOpacity = useTransform(scrollYProgress, [0.05, 0.1], [0, 1]);
  
  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, TOTAL_FRAMES - 1]);

  // Animate the opacity of the individual text phrases
  const textScrollIndex = useTransform(scrollYProgress, [0.1, 1], [0, scrollingTexts.length]); 
  const textOpacities = scrollingTexts.map((_, i) => { return useTransform( textScrollIndex, [i - 0.5, i, i + 0.5], [0, 1, 0] ); });
  

  // 🔹 Preload frames
  useEffect(() => {
    const paths = Array.from({ length: TOTAL_FRAMES }, (_, i) =>
  `/frames/shoes2/${String(i + 1).padStart(5, "0")}.png`
);

    const imgs = [];
    let loaded = 0;
  
    paths.forEach((src, i) => {
      const img = new Image();
      img.src = src;
      img.onload = img.onerror = () => {
        loaded++;
        setProgress((loaded / paths.length) * 100);
        if (loaded === paths.length) {
          setFrames(imgs);
          setLoading(false);
        }
      };
      imgs[i] = img;
    });
  }, []);
  
  // 🔹 Canvas + smooth lerp
  useEffect(() => {
    if (!frames.length) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
  
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
  
    const unsubscribe = frameIndex.on("change", (latest) => {
      targetFrameRef.current = Math.min(TOTAL_FRAMES - 1, Math.max(0, latest));
    });
  
    let animationFrameId;
  
    const render = () => {
      currentFrameRef.current += (targetFrameRef.current - currentFrameRef.current) * SMOOTH_FACTOR;
  
      if (frames.length) {
        const index = Math.floor(currentFrameRef.current);
        const img = frames[index];
        if (img && img.complete && img.naturalHeight !== 0) {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        }
      }
  
      animationFrameId = requestAnimationFrame(render);
    };
  
    render();
  
    return () => {
      window.removeEventListener("resize", resizeCanvas);
      unsubscribe();
      cancelAnimationFrame(animationFrameId);
    };
  }, [frames, frameIndex]);
  
  return (
    <section ref={ref} className="relative h-[300vh] w-full">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center bg-black overflow-hidden">
        
        {/* Loader */}
        {loading && (
          <div className="text-white text-center">
            <div className="w-64 h-2 bg-gray-700 rounded overflow-hidden mb-4">
              <motion.div
                className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
                initial={{ width: "0%" }}
                animate={{ width: `${progress}%` }}
              />
            </div>
            <p className="text-sm tracking-wider font-sans">
              Loading Experience… {Math.round(progress)}%
            </p>
          </div>
        )}
  
        {/* Canvas */}
        {!loading && (
          <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full"
          />
        )}
  
        {/* 🔥 Animated Text — ONLY AFTER LOADING */}
        {!loading && (
          <motion.div 
            className="absolute left-10 md:left-24 z-10 w-2/3 md:w-1/2 bottom-30 md:bottom-40"
            style={{ opacity: textBlockOpacity }}
          >
            {scrollingTexts.map(({ heading, subheading }, i) => (
              <motion.div
                key={i}
                className="absolute top-0 left-0"
                style={{ opacity: textOpacities[i] }}
              >
                <h1 className="font-heading text-white text-4xl md:text-5xl font-extrabold mb-3">
                  {heading}
                </h1>
                <p className="font-sans text-gray-300 text-md md:text-lg">
                  {subheading}
                </p>
              </motion.div>
            ))}
          </motion.div>
        )}
  
      </div>
    </section>
  );
}  

export default HomeCanvasSmooth;
