import React from 'react';
import { info } from '../data/portfolio';

export default function Hero() {
  return (
    <section id="hero" style={{
      minHeight: '100vh',
      display: 'flex', alignItems: 'center',
      padding: '7rem 2rem 4rem',
      background: 'linear-gradient(135deg, #f8f7f4 0%, #eff6ff 50%, #f8f7f4 100%)',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Decorative circles */}
      <div style={{
        position: 'absolute', top: '-80px', right: '-80px',
        width: '400px', height: '400px',
        background: 'radial-gradient(circle, rgba(37,99,235,0.07) 0%, transparent 70%)',
        borderRadius: '50%', pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '-60px', left: '-60px',
        width: '300px', height: '300px',
        background: 'radial-gradient(circle, rgba(124,58,237,0.05) 0%, transparent 70%)',
        borderRadius: '50%', pointerEvents: 'none',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{
          display: 'grid', gridTemplateColumns: '1fr auto',
          gap: '4rem', alignItems: 'center',
        }} className="hero-grid">

          {/* Left content */}
          <div>
            {info.available && (
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                background: '#dcfce7', border: '1px solid #bbf7d0',
                borderRadius: '2rem', padding: '0.35rem 1rem',
                fontSize: '0.75rem', color: '#15803d', fontFamily: 'var(--mono)',
                marginBottom: '1.8rem',
                animation: 'fadeUp 0.4s ease both',
              }}>
                <span style={{
                  width: 7, height: 7, background: '#22c55e',
                  borderRadius: '50%', animation: 'pulse 2s infinite',
                }} />
                Disponible pour des opportunités
              </div>
            )}

            <h1 style={{
              fontSize: 'clamp(2.8rem, 6vw, 5rem)',
              fontWeight: 800, letterSpacing: '-0.04em',
              lineHeight: 1.05, marginBottom: '0.5rem',
              animation: 'fadeUp 0.5s ease 0.1s both',
            }}>
              Rajaa<br />
              <span style={{
                background: 'linear-gradient(135deg, var(--accent), var(--accent2))',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              }}>Souini</span>
            </h1>

            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              fontFamily: 'var(--mono)', fontSize: '0.95rem', color: 'var(--muted)',
              marginBottom: '1.5rem',
              animation: 'fadeUp 0.5s ease 0.2s both',
            }}>
              <span style={{ color: 'var(--accent)' }}>&lt;</span>
              {info.role}
              <span style={{ color: 'var(--accent)' }}>/&gt;</span>
            </div>

            <p style={{
              fontSize: '1.05rem', color: 'var(--muted)',
              maxWidth: '500px', lineHeight: 1.8, marginBottom: '2.5rem',
              animation: 'fadeUp 0.5s ease 0.3s both',
            }}>
              {info.bio}
            </p>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', animation: 'fadeUp 0.5s ease 0.4s both' }}>
              <a href="#projets" className="btn btn-primary">Voir mes projets →</a>
              <a href={`mailto:${info.email}`} className="btn btn-outline">✉ {info.email}</a>
            </div>

            {/* Info pills */}
            <div style={{ display: 'flex', gap: '1rem', marginTop: '2.5rem', flexWrap: 'wrap', animation: 'fadeUp 0.5s ease 0.5s both' }}>
              {[
                { icon: '📍', val: info.location },
                { icon: '⌥', val: 'GitHub', href: info.github },
                { icon: '▲', val: 'LinkedIn', href: info.linkedin },
              ].map((item, i) => (
                <a key={i} href={item.href || '#'} style={{
                  display: 'flex', alignItems: 'center', gap: '0.4rem',
                  fontSize: '0.8rem', color: 'var(--muted)',
                  textDecoration: 'none', padding: '0.35rem 0.8rem',
                  background: 'rgba(255,255,255,0.7)', border: '1px solid var(--border)',
                  borderRadius: '2rem', transition: 'all 0.2s',
                }}
                  onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--accent)'}
                  onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
                >
                  <span style={{ fontSize: '0.85rem' }}>{item.icon}</span> {item.val}
                </a>
              ))}
            </div>
          </div>

          {/* Photo */}
          <div style={{ animation: 'fadeUp 0.6s ease 0.2s both' }} className="hero-photo-wrap">
            <div style={{ position: 'relative' }}>
              {/* Decorative ring */}
              <div style={{
                position: 'absolute', inset: '-12px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, rgba(37,99,235,0.15), rgba(124,58,237,0.1))',
                zIndex: 0,
              }} />
              <div style={{
                position: 'absolute', inset: '-6px',
                borderRadius: '50%',
                border: '2px dashed rgba(37,99,235,0.2)',
                zIndex: 0,
                animation: 'spin 20s linear infinite',
              }} />
              <img
                src={info.photo}
                alt="Rajaa Souini"
                style={{
                  width: '280px', height: '280px',
                  borderRadius: '50%',
                  objectFit: 'cover', objectPosition: 'top center',
                  border: '4px solid white',
                  boxShadow: '0 12px 40px rgba(37,99,235,0.15)',
                  position: 'relative', zIndex: 1,
                  display: 'block',
                }}
              />
              {/* Badge flottant */}
              <div style={{
                position: 'absolute', bottom: '10px', right: '-10px', zIndex: 2,
                background: 'white', borderRadius: '12px', padding: '0.5rem 0.8rem',
                boxShadow: '0 4px 16px rgba(0,0,0,0.12)',
                fontSize: '0.75rem', fontWeight: 600, color: 'var(--text)',
                border: '1px solid var(--border)',
                display: 'flex', alignItems: 'center', gap: '0.4rem',
              }}>
                <span>💻</span> Full Stack Dev
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes pulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.5;transform:scale(0.85)} }
        @keyframes spin { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
          .hero-photo-wrap { display: flex; justify-content: center; order: -1; }
          .hero-photo-wrap img { width: 200px !important; height: 200px !important; }
        }
      `}</style>
    </section>
  );
}
