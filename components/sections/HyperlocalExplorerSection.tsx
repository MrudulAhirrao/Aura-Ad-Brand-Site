"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Edges } from "@react-three/drei";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, Suspense, useMemo } from "react";
import * as THREE from "three";
import { Building2, ShoppingCart, Bus, Plane, LucideIcon } from "lucide-react";

// --- Data for our City ---
const cityData: BuildingData[] = [
  {
    id: 1,
    position: [-3, 1, 2] as [number, number, number],
    scale: [1, 2, 1] as [number, number, number],
    name: "Corporate Park",
    icon: Building2,
    insight: "High concentration of professionals. Recommend `Ad8Social` LinkedIn campaigns & `8DigiAd` screens in office lobbies.",
  },
  {
    id: 2,
    position: [0, 0.75, 2] as [number, number, number],
    scale: [1, 1.5, 1] as [number, number, number],
    name: "City Centre",
    icon: ShoppingCart,
    insight: "Peak footfall on weekends. Recommend `Ad8OOH` on main avenues & `Ad8Mobi` geo-targeted offers.",
  },
  {
    id: 3,
    position: [3, 1.25, 2] as [number, number, number],
    scale: [1, 2.5, 1] as [number, number, number],
    name: "Transport Hub",
    icon: Bus,
    insight: "Constant flow of commuters. Recommend `Ad8Radio` spots during rush hour & ads on public transport.",
  },
  {
    id: 4,
    position: [-2, 0.5, -2] as [number, number, number],
    scale: [2, 1, 1] as [number, number, number],
    name: "Airport",
    icon: Plane,
    insight: "High-value audience with long dwell times. Recommend premium `8DigiAd` placements in terminals.",
  },
];


// --- Road Component ---
const Road = ({
  start,
  end,
  width = 0.3,
}: {
  start: number[];
  end: number[];
  width?: number;
}) => {
  const direction = new THREE.Vector3().subVectors(
    new THREE.Vector3(...end),
    new THREE.Vector3(...start)
  );
  const length = direction.length();
  const midpoint = new THREE.Vector3()
    .addVectors(new THREE.Vector3(...start), new THREE.Vector3(...end))
    .multiplyScalar(0.5);

  // Calculate rotation to align with direction
  const quaternion = new THREE.Quaternion();
  quaternion.setFromUnitVectors(
    new THREE.Vector3(0, 0, 1),
    direction.normalize()
  );

  return (
    <mesh position={[midpoint.x, 0.01, midpoint.z]} quaternion={quaternion}>
      <boxGeometry args={[width, 0.02, length]} />
      <meshStandardMaterial color="#2d2d30" roughness={0.8} />
    </mesh>
  );
};

// --- Road Network Component ---
const RoadNetwork = () => {
  const roads = [
    // Main horizontal roads
    { start: [-5, 0, 3], end: [5, 0, 3] },
    { start: [-5, 0, 1], end: [5, 0, 1] },
    { start: [-5, 0, -1], end: [5, 0, -1] },
    { start: [-5, 0, -3], end: [5, 0, -3] },

    // Main vertical roads
    { start: [-4, 0, -4], end: [-4, 0, 4] },
    { start: [-1, 0, -4], end: [-1, 0, 4] },
    { start: [1, 0, -4], end: [1, 0, 4] },
    { start: [4, 0, -4], end: [4, 0, 4] },

    // Connecting roads
    { start: [-3, 0, 2], end: [-1, 0, 2] },
    { start: [1, 0, 2], end: [4, 0, 2] },
    { start: [-4, 0, -2], end: [-1, 0, -2] },
  ];

  return (
    <>
      {roads.map((road, index) => (
        <Road key={index} start={road.start} end={road.end} />
      ))}
    </>
  );
};

// --- Building Texture Creator ---
const createBuildingTexture = (type: string) => {
  const canvas = document.createElement("canvas");
  canvas.width = 64;
  canvas.height = 64;
  const ctx = canvas.getContext("2d")!;

  // Base building color
  ctx.fillStyle = "#404040";
  ctx.fillRect(0, 0, 64, 64);

  // Add windows based on building type
  ctx.fillStyle = "#87ceeb";

  if (type === "corporate") {
    // Regular grid of windows for corporate building
    for (let x = 4; x < 60; x += 12) {
      for (let y = 4; y < 60; y += 10) {
        ctx.fillRect(x, y, 6, 6);
      }
    }
  } else if (type === "shopping") {
    // Larger windows for shopping center
    for (let x = 6; x < 58; x += 16) {
      for (let y = 6; y < 58; y += 14) {
        ctx.fillRect(x, y, 10, 8);
      }
    }
  } else if (type === "transport") {
    // Vertical strips for transport hub
    for (let x = 8; x < 56; x += 16) {
      ctx.fillRect(x, 4, 4, 56);
    }
  } else if (type === "airport") {
    // Large panels for airport
    ctx.fillRect(8, 8, 48, 20);
    ctx.fillRect(8, 36, 48, 20);
  }

  // Add some architectural details
  ctx.strokeStyle = "#606060";
  ctx.lineWidth = 1;
  ctx.strokeRect(0, 0, 64, 64);

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(1, 2);

  return texture;
};

type BuildingData = {
  id: number;
  position: [number, number, number];
  scale: [number, number, number];
  name: string;
  icon: LucideIcon;
  insight: string;
};

type BuildingProps = {
  data: BuildingData;
  onPointerOver: (building: BuildingData | null) => void;
  onPointerOut: (building: BuildingData | null) => void;
  onClick: (building: BuildingData) => void;
};

const InteractiveBuilding = ({
  data,
  onPointerOver,
  onPointerOut,
  onClick,
}: BuildingProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef<THREE.Mesh>(null!);

  const buildingTypes = {
    1: "corporate",
    2: "shopping",
    3: "transport",
    4: "airport",
  };

  const texture = useMemo(
    () =>
      createBuildingTexture(
        buildingTypes[data.id as keyof typeof buildingTypes]
      ),
    [data.id]
  );
  const targetColor = isHovered
    ? new THREE.Color("#a855f7")
    : new THREE.Color("#ffffff");
  const currentColor = useMemo(() => new THREE.Color(), []);

  useFrame(() => {
    if (ref.current && ref.current.material) {
      currentColor.lerp(targetColor, 0.1);
      (ref.current.material as THREE.MeshStandardMaterial).color = currentColor;
    }
  });

  return (
    <mesh
      ref={ref}
      position={data.position}
      scale={data.scale}
      onPointerOver={(e) => {
        e.stopPropagation();
        setIsHovered(true);
        onPointerOver(data);
      }}
      onPointerOut={() => {
        setIsHovered(false);
        onPointerOut(null);
      }}
      onClick={() => onClick(data)}
    >
      <boxGeometry />
      <meshStandardMaterial map={texture} roughness={0.5} />
      <Edges>
        <lineBasicMaterial color="#71717a" />
      </Edges>
    </mesh>
  );
};

const CityScene = ({
  onBuildingHover,
  onBuildingClick,
}: {
  onBuildingHover: (building: BuildingData | null) => void;
  onBuildingClick: (building: BuildingData) => void;
}) => {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1.5} />
      <directionalLight position={[-10, -10, -5]} intensity={0.3} />
      <pointLight
        position={[0, 5, 0]}
        intensity={1}
        distance={15}
        color="#a855f7"
      />

      {/* Ground plane */}
      <mesh position={[0, -0.1, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[20, 20]} />
        <meshStandardMaterial color="#1a1a1a" roughness={0.9} />
      </mesh>

      <RoadNetwork />

      {cityData.map((building) => (
        <InteractiveBuilding
          key={building.id}
          data={building}
          onPointerOver={onBuildingHover}
          onPointerOut={onBuildingHover}
          onClick={onBuildingClick}
        />
      ))}
    </>
  );
};

// --- UI Components ---
const HyperlocalExplorerSection = () => {
  const [hoveredBuilding, setHoveredBuilding] = useState<BuildingData | null>(
    null
  );
  const [activeInsight, setActiveInsight] = useState<BuildingData | null>(null);

  return (
    <section className="py-20 sm:py-32 bg-black border-y border-white/10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight">
            See Aura&apos;s Intelligence in Motion
          </h2>
          <p className="mt-4 text-lg sm:text-xl text-white/70">
            Explore a simulated city district. Hover over buildings to identify
            hyperlocal opportunities and click to get an instant AI-powered
            recommendation.
          </p>
          <AnimatePresence mode="wait">
            <motion.div
              key={hoveredBuilding ? hoveredBuilding.id : "initial"}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="mt-8 p-6 bg-white/5 border border-white/10 rounded-lg min-h-[120px]"
            >
              {hoveredBuilding ? (
                <div>
                  <h3 className="font-bold text-xl text-purple-400 flex items-center gap-3">
                    <hoveredBuilding.icon className="w-6 h-6" />
                    {hoveredBuilding.name}
                  </h3>
                  <p className="mt-2 text-white/80">
                    Click to reveal Aura&apos;s strategic insight for this
                    location.
                  </p>
                </div>
              ) : (
                <p className="text-white/60">
                  Hover over a building in the city to learn more.
                </p>
              )}
            </motion.div>
          </AnimatePresence>
        </motion.div>

        <div className="w-full h-[500px] lg:h-[600px] cursor-grab active:cursor-grabbing rounded-lg border border-white/10">
          <Canvas camera={{ position: [0, 8, 12], fov: 50 }}>
            <Suspense fallback={null}>
              <CityScene
                onBuildingHover={setHoveredBuilding}
                onBuildingClick={setActiveInsight}
              />
            </Suspense>
            <OrbitControls
              autoRotate
              autoRotateSpeed={0.5}
              maxPolarAngle={Math.PI / 2.2}
              minPolarAngle={Math.PI / 4}
            />
          </Canvas>
        </div>
      </div>

      <AnimatePresence>
        {activeInsight && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-black/70 backdrop-blur-md"
            onClick={() => setActiveInsight(null)}
          >
            <motion.div
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              className="w-full max-w-lg m-4 p-8 bg-black border border-white/10 rounded-xl shadow-2xl shadow-purple-500/20"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-4">
                  <activeInsight.icon className="w-8 h-8 text-purple-400" />
                  <h3 className="font-bold text-2xl font-serif">
                    {activeInsight.name}
                  </h3>
                </div>
                <button
                  onClick={() => setActiveInsight(null)}
                  className="text-2xl text-white/50 hover:text-white"
                >
                  &times;
                </button>
              </div>
              <p className="mt-6 text-lg text-white/80">
                {activeInsight.insight}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default HyperlocalExplorerSection;
