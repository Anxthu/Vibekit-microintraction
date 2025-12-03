import React, { useState } from 'react';
import { motion } from 'framer-motion';
import InteractiveSection from './InteractiveSection';

const FeatureShowcase = () => {
    // --- Lift State ---
    const [liftValues, setLiftValues] = useState({ y: -20, scale: 1.05, stiffness: 300, damping: 20 });

    // --- Glow State ---
    const [glowValues, setGlowValues] = useState({ blur: 30, spread: 10, opacity: 0.5 });

    // --- Shake State ---
    const [shakeValues, setShakeValues] = useState({ intensity: 5, speed: 0.5 });

    // --- Pulse State ---
    const [pulseValues, setPulseValues] = useState({ scale: 1.2, duration: 1.5 });

    // --- Tilt State ---
    const [tiltValues, setTiltValues] = useState({ maxTilt: 15, perspective: 1000 });

    // --- Morph State ---
    const [morphValues, setMorphValues] = useState({ borderRadius: 50, rotate: 180 });


    return (
        <div>
            {/* 1. Lift */}
            <InteractiveSection
                title="Lift"
                description="Elevates elements on hover, creating a sense of weightlessness and interactivity."
                icon="↑"
                values={liftValues}
                onValueChange={(key, val) => setLiftValues(prev => ({ ...prev, [key]: val }))}
                config={{
                    y: { min: -100, max: 0, step: 1, label: 'Elevation (Y)' },
                    scale: { min: 1, max: 1.5, step: 0.01, label: 'Scale' },
                    stiffness: { min: 50, max: 1000, step: 10, label: 'Spring Stiffness' },
                    damping: { min: 5, max: 100, step: 1, label: 'Spring Damping' }
                }}
                controls={true}
                demo={
                    <motion.div
                        whileHover={{
                            y: liftValues.y,
                            scale: liftValues.scale,
                            boxShadow: `0 ${Math.abs(liftValues.y * 2)}px ${Math.abs(liftValues.y * 3)}px rgba(0,0,0,0.5)`
                        }}
                        transition={{
                            type: "spring",
                            stiffness: liftValues.stiffness,
                            damping: liftValues.damping
                        }}
                        style={{
                            width: 200,
                            height: 200,
                            background: 'var(--surface)',
                            borderRadius: 24,
                            border: '1px solid var(--border)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer'
                        }}
                    >
                        <span style={{ fontSize: '2rem' }}>Hover Me</span>
                    </motion.div>
                }
            />

            {/* 2. Glow */}
            <InteractiveSection
                title="Glow"
                description="Emits a soft light to highlight active or focused elements."
                values={glowValues}
                onValueChange={(key, val) => setGlowValues(prev => ({ ...prev, [key]: val }))}
                config={{
                    blur: { min: 0, max: 100, step: 1, label: 'Blur Radius' },
                    spread: { min: 0, max: 50, step: 1, label: 'Spread' },
                    opacity: { min: 0, max: 1, step: 0.1, label: 'Opacity' }
                }}
                controls={true}
                demo={
                    <motion.div
                        whileHover={{
                            boxShadow: `0 0 ${glowValues.blur}px ${glowValues.spread}px rgba(255, 51, 51, ${glowValues.opacity})`,
                            borderColor: 'var(--accent)'
                        }}
                        style={{
                            width: 200,
                            height: 200,
                            background: 'var(--surface)',
                            borderRadius: 24,
                            border: '1px solid var(--border)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer',
                            transition: 'border-color 0.3s'
                        }}
                    >
                        <span style={{ fontSize: '2rem' }}>Hover Me</span>
                    </motion.div>
                }
            />

            {/* 3. Shake */}
            <InteractiveSection
                title="Shake"
                description="Wiggles to attract attention or indicate an error state."
                values={shakeValues}
                onValueChange={(key, val) => setShakeValues(prev => ({ ...prev, [key]: val }))}
                config={{
                    intensity: { min: 1, max: 20, step: 1, label: 'Intensity' },
                    speed: { min: 0.1, max: 2, step: 0.1, label: 'Duration (s)' }
                }}
                controls={true}
                demo={
                    <motion.button
                        whileHover={{
                            x: [0, -shakeValues.intensity, shakeValues.intensity, -shakeValues.intensity, shakeValues.intensity, 0],
                            transition: { duration: shakeValues.speed }
                        }}
                        style={{
                            padding: '1rem 2rem',
                            background: 'var(--accent)',
                            color: 'white',
                            border: 'none',
                            borderRadius: 12,
                            fontSize: '1.2rem',
                            cursor: 'pointer',
                            fontFamily: 'var(--font-display)',
                            fontWeight: 600
                        }}
                    >
                        Shake Me
                    </motion.button>
                }
            />

            {/* 4. Pulse */}
            <InteractiveSection
                title="Pulse"
                description="Beats rhythmically to indicate activity or urgency."
                values={pulseValues}
                onValueChange={(key, val) => setPulseValues(prev => ({ ...prev, [key]: val }))}
                config={{
                    scale: { min: 1.1, max: 2, step: 0.1, label: 'Max Scale' },
                    duration: { min: 0.5, max: 3, step: 0.1, label: 'Duration (s)' }
                }}
                controls={true}
                demo={
                    <motion.div
                        animate={{
                            scale: [1, pulseValues.scale, 1],
                        }}
                        transition={{
                            duration: pulseValues.duration,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        style={{
                            width: 100,
                            height: 100,
                            background: 'var(--accent)',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                    >
                        <span style={{ fontSize: '2rem' }}>💓</span>
                    </motion.div>
                }
            />

            {/* 5. 3D Tilt */}
            <InteractiveSection
                title="3D Tilt"
                description="Follows the cursor movement in 3D space for a premium feel."
                values={tiltValues}
                onValueChange={(key, val) => setTiltValues(prev => ({ ...prev, [key]: val }))}
                config={{
                    maxTilt: { min: 5, max: 45, step: 1, label: 'Max Tilt (deg)' },
                    perspective: { min: 500, max: 2000, step: 100, label: 'Perspective (px)' }
                }}
                controls={true}
                demo={
                    <TiltCard values={tiltValues} />
                }
            />

            {/* 6. Morph */}
            <InteractiveSection
                title="Morph"
                description="Smoothly transforms between shapes and states."
                values={morphValues}
                onValueChange={(key, val) => setMorphValues(prev => ({ ...prev, [key]: val }))}
                config={{
                    borderRadius: { min: 0, max: 50, step: 1, label: 'Border Radius (%)' },
                    rotate: { min: 0, max: 360, step: 15, label: 'Rotation (deg)' }
                }}
                controls={true}
                demo={
                    <motion.div
                        whileHover={{
                            borderRadius: `${morphValues.borderRadius}%`,
                            rotate: morphValues.rotate,
                            background: 'var(--accent)'
                        }}
                        style={{
                            width: 150,
                            height: 150,
                            background: 'var(--text)',
                            borderRadius: '0%',
                            cursor: 'pointer'
                        }}
                    />
                }
            />
        </div>
    );
};

// Helper component for Tilt to handle mouse events
const TiltCard = ({ values }) => {
    const [rotateX, setRotateX] = useState(0);
    const [rotateY, setRotateY] = useState(0);

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateXValue = ((y - centerY) / centerY) * -values.maxTilt;
        const rotateYValue = ((x - centerX) / centerX) * values.maxTilt;

        setRotateX(rotateXValue);
        setRotateY(rotateYValue);
    };

    const handleMouseLeave = () => {
        setRotateX(0);
        setRotateY(0);
    };

    return (
        <motion.div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                width: 250,
                height: 350,
                background: 'var(--surface)',
                borderRadius: 24,
                border: '1px solid var(--border)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transformStyle: 'preserve-3d',
                transform: `perspective(${values.perspective}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
                cursor: 'crosshair'
            }}
        >
            <div style={{ transform: 'translateZ(50px)', pointerEvents: 'none' }}>
                {/* Icon removed */}
            </div>
        </motion.div>
    );
};

export default FeatureShowcase;
