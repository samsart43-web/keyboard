"use client";

import React, { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, motion, useSpring } from "framer-motion";

const FRAME_COUNT = 88;
const BASE_PATH = "/assets/sequence/";

const KeyboardScroll = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const frameIndex = useTransform(smoothProgress, [0, 1], [1, FRAME_COUNT]);

  useEffect(() => {
    const preloadImages = async () => {
      const loadedImages: HTMLImageElement[] = [];
      let loadedCount = 0;

      for (let i = 1; i <= FRAME_COUNT; i++) {
        const img = new Image();
        const frameNum = i.toString().padStart(4, "0");
        img.src = `${BASE_PATH}${frameNum}.jpg`;
        img.onload = () => {
          loadedCount++;
          setProgress(Math.floor((loadedCount / FRAME_COUNT) * 100));
          if (loadedCount === FRAME_COUNT) {
            setIsLoading(false);
          }
        };
        loadedImages.push(img);
      }
      setImages(loadedImages);
    };

    preloadImages();
  }, []);

  const renderFrame = (index: number) => {
    if (images.length === 0 || !canvasRef.current) return;

    const ctx = canvasRef.current.getContext("2d");
    if (!ctx) return;

    const img = images[Math.floor(index) - 1] || images[0];
    const dpr = window.devicePixelRatio || 1;
    const width = window.innerWidth;
    const height = window.innerHeight;

    canvasRef.current.width = width * dpr;
    canvasRef.current.height = height * dpr;
    ctx.scale(dpr, dpr);
    ctx.clearRect(0, 0, width, height);

    const imgRatio = img.width / img.height;
    const canvasRatio = width / height;
    let drawWidth, drawHeight, x, y;

    if (canvasRatio > imgRatio) {
      drawHeight = height;
      drawWidth = height * imgRatio;
      x = (width - drawWidth) / 2;
      y = 0;
    } else {
      drawWidth = width;
      drawHeight = width / imgRatio;
      x = 0;
      y = (height - drawHeight) / 2;
    }

    ctx.drawImage(img, x, y, drawWidth, drawHeight);
  };

  useEffect(() => {
    const unsubscribe = frameIndex.on("change", (latest) => {
      requestAnimationFrame(() => renderFrame(latest));
    });

    if (!isLoading) {
      renderFrame(1);
    }

    const handleResize = () => {
      renderFrame(frameIndex.get());
    };
    window.addEventListener("resize", handleResize);

    return () => {
      unsubscribe();
      window.removeEventListener("resize", handleResize);
    };
  }, [images, isLoading]);

  return (
    <div id="hero" ref={containerRef} className="relative h-[800vh]">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden bg-[#ECECEC]">
        <div className="relative w-[85vw] h-[85vh] rounded-[40px] overflow-hidden shadow-2xl border-4 border-white/20">
          {isLoading ? (
            <div className="flex flex-col items-center gap-4">
              <div className="w-12 h-12 border-4 border-black/10 border-t-black rounded-full animate-spin" />
              <p className="text-black/60 font-medium tracking-tight">
                Loading Samm's sequence... {progress}%
              </p>
            </div>
          ) : (
            <canvas
              ref={canvasRef}
              className="w-full h-full object-cover pointer-events-none"
            />
          )}
        </div>
      </div>

      <StoryOverlays scrollProgress={scrollYProgress} />
    </div>
  );
};

const StoryOverlays = ({ scrollProgress }: { scrollProgress: any }) => {
  const opacity1 = useTransform(scrollProgress, [0, 0.08, 0.15], [0, 1, 0]);
  const y1 = useTransform(scrollProgress, [0, 0.08, 0.15], [20, 0, -20]);
  const scale1 = useTransform(scrollProgress, [0, 0.08, 0.15], [0.95, 1, 1.05]);

  const opacity2 = useTransform(scrollProgress, [0.2, 0.28, 0.35], [0, 1, 0]);
  const y2 = useTransform(scrollProgress, [0.2, 0.28, 0.35], [20, 0, -20]);

  const opacity3 = useTransform(scrollProgress, [0.4, 0.48, 0.55], [0, 1, 0]);
  const x3 = useTransform(scrollProgress, [0.4, 0.48, 0.55], [20, 0, -20]);

  const opacity4 = useTransform(scrollProgress, [0.6, 0.68, 0.75], [0, 1, 0]);
  const y4 = useTransform(scrollProgress, [0.6, 0.68, 0.75], [20, 0, -20]);

  const opacity5 = useTransform(scrollProgress, [0.85, 0.95, 1], [0, 1, 0]);
  const scale5 = useTransform(scrollProgress, [0.85, 0.95, 1], [0.9, 1, 1.1]);

  return (
    <>
      <motion.div
        style={{ opacity: opacity1, y: y1, scale: scale1 }}
        className="fixed inset-0 flex flex-col items-center justify-center pointer-events-none p-10 text-center"
      >
        <h1 className="text-8xl font-black tracking-tighter text-black/90 drop-shadow-sm">Samm's Keyboard.</h1>
        <p className="text-2xl text-black/60 tracking-tight mt-4 font-light">The pinnacle of tactile feedback.</p>
      </motion.div>

      <motion.div
        style={{ opacity: opacity2, y: y2 }}
        className="fixed inset-y-0 left-0 flex flex-col justify-center pointer-events-none p-20 w-1/2"
      >
        <h2 className="text-6xl font-bold tracking-tighter text-black/90">Aesthetic Mastery.</h2>
        <p className="text-xl text-black/60 tracking-tight mt-4 max-w-md">Every curve and corner designed with absolute purpose and premium finish.</p>
      </motion.div>

      <motion.div
        style={{ opacity: opacity3, x: x3 }}
        className="fixed inset-y-0 right-0 flex flex-col justify-center items-end pointer-events-none p-20 w-1/2 text-right"
      >
        <h2 className="text-6xl font-bold tracking-tighter text-black/90">Ultra-Smooth Typing.</h2>
        <p className="text-xl text-black/60 tracking-tight mt-4 max-w-md">Lube-infused stabilizers and custom-tuned switches for a buttery experience.</p>
      </motion.div>

      <motion.div
        style={{ opacity: opacity4, y: y4 }}
        className="fixed inset-0 flex flex-col items-center justify-center pointer-events-none p-10 text-center"
      >
        <h2 className="text-7xl font-bold tracking-tighter text-black/90">Crystal Clear Response.</h2>
        <p className="text-2xl text-black/60 tracking-tight mt-4">Low latency, high polling, zero compromise.</p>
      </motion.div>

      <motion.div
        style={{ opacity: opacity5, scale: scale5 }}
        className="fixed inset-0 flex flex-col items-center justify-center pointer-events-none p-10 text-center"
      >
        <h2 className="text-8xl font-black tracking-tighter text-black/90">Expertly Crafted.</h2>
        <p className="text-2xl text-black/60 tracking-tight mt-6">Scroll down to see the details.</p>
      </motion.div>
    </>
  );
};

export default KeyboardScroll;
