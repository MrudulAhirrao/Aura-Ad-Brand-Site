"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Float, Html } from "@react-three/drei";
import { Smartphone, Tv, Presentation } from "lucide-react";
import {
  FaAd,
  FaBullhorn,
  FaDigitalTachograph,
  FaVideo,
  FaRegNewspaper,
  FaBusinessTime,
} from "react-icons/fa";
import { MdOutlineDataUsage } from "react-icons/md";

import { Theme } from "../sections/HeroSection";

const AdIcon = ({
  position,
  theme,
  activeTheme,
}: {
  position: [number, number, number];
  theme: Theme;
  activeTheme: Theme;
}) => {
  const isActive = theme === activeTheme;

  const iconProps = {
    className: isActive ? "opacity-100 scale-125" : "opacity-50",
    size: 50, // increased from 32 to 50
  };

  const icons = {
    digital: <Smartphone color="#3b82f6" {...iconProps} />,
    broadcast: <Tv color="#00BFFF" {...iconProps} />,
    outdoor: <FaAd color="#FFD700" {...iconProps} />,
    billboard: <Presentation color="#FFA500" {...iconProps} />,
    megaphone: <FaBullhorn color="#FF4500" {...iconProps} />,
    signage: <MdOutlineDataUsage color="#20B2AA" {...iconProps} />,
    video: <FaVideo color="#FF69B4" {...iconProps} />,
    news: <FaRegNewspaper color="#C71585" {...iconProps} />,
    business: <FaBusinessTime color="#A52A2A" {...iconProps} />,
  };

  return (
    <Float speed={1} rotationIntensity={0.2} floatIntensity={1}>
      <Html position={position} center>
        {icons[theme]}
      </Html>
    </Float>
  );
};

const AdConstellation = ({ activeTheme }: { activeTheme: Theme }) => (
  <>
    <AdIcon position={[-5, 2, -3]} theme="digital" activeTheme={activeTheme} />
    <AdIcon position={[6, -2, -1]} theme="digital" activeTheme={activeTheme} />
    <AdIcon position={[3, 3, -2]} theme="broadcast" activeTheme={activeTheme} />
    <AdIcon position={[-2, -3, 2]} theme="megaphone" activeTheme={activeTheme} />
    <AdIcon position={[4, 1, 1]} theme="outdoor" activeTheme={activeTheme} />
    <AdIcon position={[-6, -1, -2]} theme="billboard" activeTheme={activeTheme} />
    <AdIcon position={[1, -2, -4]} theme="signage" activeTheme={activeTheme} />
    <AdIcon position={[-3, 2, 3]} theme="video" activeTheme={activeTheme} />
    <AdIcon position={[5, 3, 0]} theme="news" activeTheme={activeTheme} />
    <AdIcon position={[0, -4, -3]} theme="business" activeTheme={activeTheme} />
  </>
);

const LivingArtwork = ({ theme }: { theme: Theme }) => (
  <Canvas camera={{ position: [0, 0, 12], fov: 50 }}>
    <ambientLight intensity={0.2} />
    <directionalLight position={[5, 5, 10]} intensity={1} />
    <fog attach="fog" args={["#000000", 10, 20]} />
    <Suspense fallback={null}>
      <AdConstellation activeTheme={theme} />
    </Suspense>
  </Canvas>
);

export default LivingArtwork;
