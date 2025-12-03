import React from 'react';
import ControlPanel from './ControlPanel';

const InteractiveSection = ({ title, description, icon, controls, demo, values, onValueChange, config }) => {
    return (
        <section className="section" style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderBottom: '1px solid var(--border)',
            position: 'relative',
            overflow: 'hidden'
        }}>
            <div className="container" style={{ width: '100%', display: 'flex', gap: '4rem', alignItems: 'center', flexWrap: 'wrap' }}>

                {/* Text Content */}
                <div style={{ flex: 1, minWidth: '300px' }}>
                    {icon && <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>{icon}</div>}
                    <h2 style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', marginBottom: '1.5rem' }}>{title}</h2>
                    <p className="mono" style={{ fontSize: '1.1rem', marginBottom: '2rem', maxWidth: '500px' }}>
                        {description}
                    </p>

                    {/* Controls */}
                    {controls && (
                        <ControlPanel
                            values={values}
                            onChange={onValueChange}
                            config={config}
                        />
                    )}
                </div>

                {/* Demo Area */}
                <div style={{
                    flex: 1,
                    minWidth: '300px',
                    height: '500px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'var(--surface-highlight)',
                    borderRadius: '24px',
                    position: 'relative'
                }}>
                    <div style={{
                        position: 'absolute',
                        inset: 0,
                        backgroundImage: 'radial-gradient(var(--border) 1px, transparent 1px)',
                        backgroundSize: '20px 20px',
                        opacity: 0.2,
                        pointerEvents: 'none'
                    }} />

                    {demo}
                </div>
            </div>
        </section>
    );
};

export default InteractiveSection;
