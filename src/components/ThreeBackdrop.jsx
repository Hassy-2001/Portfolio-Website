import { useEffect, useMemo, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const palettes = {
  dark: {
    primary: '#8fb7b1',
    secondary: '#9da3af',
    accent: '#c6a15b',
    line: '#d4d4ce',
  },
  light: {
    primary: '#5d7f79',
    secondary: '#737373',
    accent: '#9b7538',
    line: '#706f6a',
  },
};

const readTheme = () => {
  if (typeof document === 'undefined') return 'dark';
  return document.documentElement.getAttribute('data-theme') || localStorage.getItem('theme') || 'dark';
};

function useDocumentTheme() {
  const [theme, setTheme] = useState(readTheme);

  useEffect(() => {
    const root = document.documentElement;
    const observer = new MutationObserver(() => {
      setTheme(readTheme());
    });

    observer.observe(root, { attributes: true, attributeFilter: ['data-theme'] });
    return () => observer.disconnect();
  }, []);

  return theme === 'light' ? 'light' : 'dark';
}

function useReducedMotion() {
  const [reducedMotion, setReducedMotion] = useState(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updateMotionPreference = () => setReducedMotion(mediaQuery.matches);

    mediaQuery.addEventListener('change', updateMotionPreference);
    return () => mediaQuery.removeEventListener('change', updateMotionPreference);
  }, []);

  return reducedMotion;
}

function useWindowPointer() {
  const pointerRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handlePointerMove = (event) => {
      pointerRef.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      pointerRef.current.y = (event.clientY / window.innerHeight) * 2 - 1;
    };

    window.addEventListener('pointermove', handlePointerMove);
    return () => window.removeEventListener('pointermove', handlePointerMove);
  }, []);

  return pointerRef;
}

function LatticeField({ color, reducedMotion, pointerRef }) {
  const groupRef = useRef(null);

  const lineGeometry = useMemo(() => {
    const segments = [];
    const width = 15;
    const height = 8;
    const depth = -2.8;
    const spacing = 1.25;

    for (let x = -width / 2; x <= width / 2; x += spacing) {
      segments.push(x, -height / 2, depth, x, height / 2, depth);
    }

    for (let y = -height / 2; y <= height / 2; y += spacing) {
      segments.push(-width / 2, y, depth, width / 2, y, depth);
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(segments, 3));
    return geometry;
  }, []);

  const pointGeometry = useMemo(() => {
    const positions = [];

    for (let index = 0; index < 110; index += 1) {
      const row = Math.floor(index / 11);
      const column = index % 11;
      const jitterX = Math.sin(index * 1.7) * 0.28;
      const jitterY = Math.cos(index * 1.2) * 0.2;

      positions.push((column - 5) * 1.45 + jitterX, (row - 5) * 0.74 + jitterY, -2.2 + Math.sin(index) * 0.6);
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    return geometry;
  }, []);

  useEffect(() => {
    return () => {
      lineGeometry.dispose();
      pointGeometry.dispose();
    };
  }, [lineGeometry, pointGeometry]);

  useFrame(({ clock }) => {
    if (!groupRef.current || reducedMotion) return;

    const elapsed = clock.getElapsedTime();
    const pointer = pointerRef.current;

    groupRef.current.rotation.x += (-pointer.y * 0.12 - groupRef.current.rotation.x) * 0.035;
    groupRef.current.rotation.y += (pointer.x * 0.16 - groupRef.current.rotation.y) * 0.035;
    groupRef.current.position.y = Math.sin(elapsed * 0.35) * 0.16;
  });

  return (
    <group ref={groupRef} rotation={[-0.35, 0, 0.08]} position={[0.7, -0.2, 0]}>
      <lineSegments geometry={lineGeometry}>
        <lineBasicMaterial color={color} transparent opacity={0.2} />
      </lineSegments>
      <points geometry={pointGeometry}>
        <pointsMaterial color={color} size={0.04} transparent opacity={0.82} depthWrite={false} />
      </points>
    </group>
  );
}

function FloatingPrism({ color, geometry, position, scale = 1, speed = 1, reducedMotion }) {
  const meshRef = useRef(null);
  const initialPosition = useMemo(() => new THREE.Vector3(...position), [position]);

  useFrame(({ clock }) => {
    if (!meshRef.current || reducedMotion) return;

    const elapsed = clock.getElapsedTime() * speed;
    meshRef.current.rotation.x = elapsed * 0.16;
    meshRef.current.rotation.y = elapsed * 0.24;
    meshRef.current.position.y = initialPosition.y + Math.sin(elapsed * 0.7) * 0.18;
    meshRef.current.position.x = initialPosition.x + Math.cos(elapsed * 0.42) * 0.08;
  });

  return (
    <mesh ref={meshRef} geometry={geometry} position={position} scale={scale}>
      <meshStandardMaterial
        color={color}
        wireframe
        transparent
        opacity={0.72}
        roughness={0.35}
        metalness={0.2}
        depthWrite={false}
      />
    </mesh>
  );
}

function PrismField({ palette, reducedMotion }) {
  const geometries = useMemo(
    () => ({
      box: new THREE.BoxGeometry(1.2, 1.2, 1.2, 2, 2, 2),
      tetra: new THREE.TetrahedronGeometry(0.95, 1),
      octa: new THREE.OctahedronGeometry(0.9, 1),
      torus: new THREE.TorusGeometry(0.72, 0.02, 12, 72),
    }),
    []
  );

  useEffect(() => {
    return () => {
      Object.values(geometries).forEach((geometry) => geometry.dispose());
    };
  }, [geometries]);

  return (
    <group>
      <FloatingPrism
        color={palette.primary}
        geometry={geometries.box}
        position={[-2.8, 2.35, -1.4]}
        scale={0.62}
        speed={0.82}
        reducedMotion={reducedMotion}
      />
      <FloatingPrism
        color={palette.secondary}
        geometry={geometries.tetra}
        position={[3.25, 2.0, -1.2]}
        scale={0.8}
        speed={0.94}
        reducedMotion={reducedMotion}
      />
      <FloatingPrism
        color={palette.accent}
        geometry={geometries.octa}
        position={[4.65, -2.2, -0.8]}
        scale={0.58}
        speed={1.08}
        reducedMotion={reducedMotion}
      />
      <FloatingPrism
        color={palette.primary}
        geometry={geometries.torus}
        position={[0.7, -0.6, -1.1]}
        scale={1.55}
        speed={0.72}
        reducedMotion={reducedMotion}
      />
    </group>
  );
}

function Scene({ theme, reducedMotion, pointerRef }) {
  const palette = palettes[theme];

  return (
    <>
      <ambientLight intensity={0.72} />
      <directionalLight position={[3, 4, 5]} intensity={1.35} color={palette.primary} />
      <pointLight position={[-4, -2, 3]} intensity={2.2} color={palette.secondary} />
      <LatticeField color={palette.line} reducedMotion={reducedMotion} pointerRef={pointerRef} />
      <PrismField palette={palette} reducedMotion={reducedMotion} />
    </>
  );
}

export default function ThreeBackdrop() {
  const theme = useDocumentTheme();
  const reducedMotion = useReducedMotion();
  const pointerRef = useWindowPointer();

  return (
    <div className="three-backdrop" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 7.5], fov: 44 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        frameloop={reducedMotion ? 'demand' : 'always'}
      >
        <Scene theme={theme} reducedMotion={reducedMotion} pointerRef={pointerRef} />
      </Canvas>
    </div>
  );
}
