import React, { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { Float, ContactShadows, OrbitControls } from '@react-three/drei';

const RetroComputer = (props) => {
    const group = useRef();

    // Commodore 64 / Retro Style Colors
    const beige = "#e0e0d0";
    const darkBeige = "#c0c0b0";
    const screenBlack = "#111";
    const screenGreen = "#33ff33";

    return (
        <group ref={group} {...props} dispose={null}>
            {/* --- MONITOR --- */}
            <group position={[0, 0.8, 0]}>
                {/* Casing */}
                <mesh>
                    <boxGeometry args={[2.2, 1.8, 1.5]} />
                    <meshStandardMaterial color={beige} roughness={0.6} />
                </mesh>
                {/* Screen Bezel */}
                <mesh position={[0, 0, 0.76]}>
                    <planeGeometry args={[1.8, 1.4]} />
                    <meshStandardMaterial color="#222" />
                </mesh>
                {/* Screen Glass */}
                <mesh position={[0, 0, 0.77]}>
                    <planeGeometry args={[1.6, 1.2]} />
                    <meshBasicMaterial color={screenBlack} />
                </mesh>

                {/* Screen Content - Space Invaders Style */}
                <group position={[0, 0, 0.78]} scale={0.1}>
                    {/* Player */}
                    <mesh position={[0, -4, 0]}>
                        <planeGeometry args={[1, 0.5]} />
                        <meshBasicMaterial color={screenGreen} />
                    </mesh>
                    {/* Invaders Row 1 */}
                    {[-3, -1, 1, 3].map((x, i) => (
                        <mesh key={i} position={[x, 2, 0]}>
                            <planeGeometry args={[0.8, 0.8]} />
                            <meshBasicMaterial color={screenGreen} />
                        </mesh>
                    ))}
                    {/* Invaders Row 2 */}
                    {[-3, -1, 1, 3].map((x, i) => (
                        <mesh key={i} position={[x, 0, 0]}>
                            <planeGeometry args={[0.8, 0.8]} />
                            <meshBasicMaterial color={screenGreen} />
                        </mesh>
                    ))}
                </group>
            </group>

            {/* --- KEYBOARD (C64 Wedge Style) --- */}
            <group position={[0, -0.8, 1.5]} rotation={[-0.1, 0, 0]}>
                {/* Main Body */}
                <mesh>
                    <boxGeometry args={[2.8, 0.4, 1.2]} />
                    <meshStandardMaterial color={beige} />
                </mesh>
                {/* Keys Area */}
                <mesh position={[0, 0.21, -0.1]}>
                    <planeGeometry args={[2.4, 0.8]} />
                    <meshStandardMaterial color="#222" />
                </mesh>
                {/* Some Keys */}
                {[-1, -0.5, 0, 0.5, 1].map((x, i) => (
                    <mesh key={i} position={[x, 0.22, -0.1]}>
                        <boxGeometry args={[0.4, 0.05, 0.4]} />
                        <meshStandardMaterial color={darkBeige} />
                    </mesh>
                ))}
            </group>

            {/* --- FLOPPY DRIVE --- */}
            <group position={[1.8, -0.8, 0.5]}>
                <mesh>
                    <boxGeometry args={[1.2, 0.6, 1.8]} />
                    <meshStandardMaterial color={beige} />
                </mesh>
                {/* Slot */}
                <mesh position={[0, 0, 0.91]}>
                    <planeGeometry args={[0.8, 0.1]} />
                    <meshStandardMaterial color="#111" />
                </mesh>
                {/* LED */}
                <mesh position={[0.4, 0.1, 0.91]}>
                    <circleGeometry args={[0.05]} />
                    <meshBasicMaterial color="red" />
                </mesh>
            </group>

            {/* --- JOYSTICK --- */}
            <group position={[-1.8, -0.8, 1.2]}>
                {/* Base */}
                <mesh>
                    <boxGeometry args={[0.8, 0.3, 0.8]} />
                    <meshStandardMaterial color="#111" />
                </mesh>
                {/* Stick */}
                <mesh position={[0, 0.5, 0]}>
                    <cylinderGeometry args={[0.05, 0.05, 0.8]} />
                    <meshStandardMaterial color="#888" />
                </mesh>
                {/* Ball Top */}
                <mesh position={[0, 0.9, 0]}>
                    <sphereGeometry args={[0.15]} />
                    <meshStandardMaterial color="red" />
                </mesh>
            </group>

        </group>
    );
};

const ComputerScene = () => {
    return (
        <div style={{ width: '100%', height: '100%', minHeight: '500px' }}>
            <Canvas camera={{ position: [0, 2, 6], fov: 45 }}>
                <ambientLight intensity={0.7} />
                <pointLight position={[10, 10, 10]} intensity={1} />
                <pointLight position={[-5, 5, 5]} intensity={0.5} />

                <Float rotationIntensity={0.2} floatIntensity={0.5}>
                    <RetroComputer scale={0.9} />
                </Float>

                <OrbitControls
                    enableZoom={false}
                    enablePan={false}
                    minPolarAngle={Math.PI / 2 - Math.PI / 6}
                    maxPolarAngle={Math.PI / 2 + Math.PI / 6}
                    minAzimuthAngle={-Math.PI / 4}
                    maxAzimuthAngle={Math.PI / 4}
                />

                <ContactShadows position={[0, -2, 0]} opacity={0.4} scale={15} blur={2.5} far={5} />
            </Canvas>
        </div>
    );
};

export default ComputerScene;
