import React from 'react';

const Footer = () => {
    return (
        <footer className="section" style={{ minHeight: '50vh', justifyContent: 'flex-end', paddingBottom: '4rem' }}>
            <div className="container">
                <div style={{ borderTop: '1px solid var(--border)', paddingTop: '4rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '2rem' }}>
                        <div>
                            <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>VibeKit</h2>
                            <p className="mono" style={{ fontSize: '0.9rem' }}>
                                Motion & Microinteraction Library<br />
                                for modern web applications.
                            </p>
                        </div>

                        <div className="mono" style={{ display: 'flex', gap: '4rem' }}>
                            {/* Socials removed */}

                            <div>
                                <h4 style={{ color: 'var(--text)', marginBottom: '1rem' }}>Legal</h4>
                                <ul style={{ listStyle: 'none', color: 'var(--text-dim)', lineHeight: '2' }}>
                                    <li>Privacy</li>
                                    <li>Terms</li>
                                    <li>License</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div style={{ marginTop: '8rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                        <h1 style={{ fontSize: 'clamp(3rem, 10vw, 8rem)', lineHeight: '0.8', color: 'var(--surface-highlight)' }}>
                            VIBEKIT
                        </h1>
                        <p className="mono" style={{ fontSize: '0.8rem', color: 'var(--text-dim)' }}>
                            © 2025 VibeKit. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
