import React, { useState, useEffect } from 'react';
import { info } from '../data/portfolio';

const links = [
  { label: 'Accueil', href: '#hero' },
  { label: 'Compétences', href: '#competences' },
  { label: 'Formation', href: '#formation' },
  { label: 'Projets', href: '#projets' },
  { label: 'Expériences', href: '#experiences' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        padding: '0.9rem 2rem',
        background: scrolled ? 'rgba(248,247,244,0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid #e5e7eb' : '1px solid transparent',
        transition: 'all 0.35s ease',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <a href="#hero" style={{
          fontFamily: 'var(--mono)', fontSize: '0.95rem', fontWeight: 500,
          color: 'var(--accent)', textDecoration: 'none',
        }}>
          RS<span style={{ color: 'var(--muted2)' }}>.dev</span>
        </a>

        <ul style={{ display: 'flex', gap: '0.25rem', listStyle: 'none', alignItems: 'center' }}
          className="nav-links">
          {links.map(l => (
            <li key={l.href}>
              <a href={l.href} style={{
                padding: '0.4rem 0.8rem', borderRadius: '6px',
                fontSize: '0.83rem', color: 'var(--muted)', fontWeight: 500,
                textDecoration: 'none', transition: 'all 0.2s', display: 'block',
              }}
                onMouseEnter={e => { e.target.style.color = 'var(--accent)'; e.target.style.background = 'var(--accent-light)'; }}
                onMouseLeave={e => { e.target.style.color = 'var(--muted)'; e.target.style.background = 'transparent'; }}
              >{l.label}</a>
            </li>
          ))}
          <li>
            <a href={`mailto:${info.email}`} className="btn btn-primary"
              style={{ padding: '0.45rem 1.1rem', fontSize: '0.8rem', marginLeft: '0.5rem' }}>
              Me contacter
            </a>
          </li>
        </ul>

        <button onClick={() => setMenuOpen(!menuOpen)} className="burger"
          style={{ display: 'none', background: 'transparent', border: 'none', cursor: 'pointer', fontSize: '1.3rem', color: 'var(--text)' }}>
          {menuOpen ? '✕' : '☰'}
        </button>
      </nav>

      {menuOpen && (
        <div style={{
          position: 'fixed', top: '55px', left: 0, right: 0, zIndex: 99,
          background: 'var(--surface)', borderBottom: '1px solid var(--border)',
          padding: '1rem 2rem', display: 'flex', flexDirection: 'column', gap: '0.75rem',
          boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
        }}>
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}
              style={{ color: 'var(--text)', textDecoration: 'none', fontSize: '1rem', fontWeight: 500 }}>
              {l.label}
            </a>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .nav-links { display: none !important; }
          .burger { display: block !important; }
        }
      `}</style>
    </>
  );
}
