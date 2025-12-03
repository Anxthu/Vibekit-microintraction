import React from 'react';

const ControlPanel = ({ values, onChange, config }) => {
    return (
        <div className="control-panel" style={{
            background: 'var(--surface)',
            border: '1px solid var(--border)',
            padding: '1.5rem',
            borderRadius: '16px',
            width: '300px',
            backdropFilter: 'blur(10px)',
        }}>
            <h4 style={{ marginBottom: '1.5rem', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-dim)' }}>
                Physics Controls
            </h4>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {Object.entries(values).map(([key, value]) => {
                    const { min = 0, max = 100, step = 1, label } = config[key] || {};

                    return (
                        <div key={key}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                                <label className="mono" style={{ fontSize: '0.8rem', color: 'var(--text)' }}>
                                    {label || key}
                                </label>
                                <span className="mono" style={{ fontSize: '0.8rem', color: 'var(--accent)' }}>
                                    {typeof value === 'number' ? value.toFixed(step < 1 ? 2 : 0) : value}
                                </span>
                            </div>

                            <input
                                type="range"
                                min={min}
                                max={max}
                                step={step}
                                value={value}
                                onChange={(e) => onChange(key, parseFloat(e.target.value))}
                                style={{
                                    width: '100%',
                                    accentColor: 'var(--accent)',
                                    cursor: 'pointer'
                                }}
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default ControlPanel;
