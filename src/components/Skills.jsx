import React, { useState } from 'react';
import { skills } from '../data/portfolio';

const cats = ['Tous', ...new Set(skills.map(s => s.category))];

const catColors = {
  Frontend: { bg: '#eff6ff', color: '#2563eb', border: '#bfdbfe' },
  Backend: { bg: '#f0fdf4', color: '#15803d', border: '#bbf7d0' },
  'Base de données': { bg: '#faf5ff', color: '#7c3aed', border: '#ddd6fe' },
  Outils: { bg: '#fff7ed', color: '#c2410c', border: '#fed7aa' },
};

export default function Skills() {
  const [active, setActive] = useState('Tous');
  const filtered = active === 'Tous' ? skills : skills.filter(s => s.category === active);

  return (
    <section id="competences" className="section section-alt">
      <div className="container">
        <p className="section-label">compétences</p>
        <h2 className="section-title">Mon stack technique</h2>
        <p className="section-sub">Les technologies que j'utilise au quotidien pour créer des applications web complètes.</p>

        {/* Filter */}
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
          {cats.map(cat => (
            <button key={cat} onClick={() => setActive(cat)} style={{
              padding: '0.4rem 1rem', borderRadius: '2rem',
              border: `1.5px solid ${active === cat ? 'var(--accent)' : 'var(--border)'}`,
              background: active === cat ? 'var(--accent)' : 'transparent',
              color: active === cat ? 'white' : 'var(--muted)',
              fontSize: '0.78rem', fontWeight: 600, cursor: 'pointer',
              transition: 'all 0.2s', fontFamily: 'var(--font)',
            }}>{cat}</button>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '1rem' }}>
          {filtered.map((skill, i) => {
            const c = catColors[skill.category] || catColors.Outils;
            return (
              <div key={skill.name} className="card" style={{ animationDelay: `${i * 0.04}s` }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.65rem' }}>
                  <span style={{ fontWeight: 600, fontSize: '0.92rem' }}>{skill.name}</span>
                  <span style={{
                    fontFamily: 'var(--mono)', fontSize: '0.72rem', fontWeight: 600,
                    background: c.bg, color: c.color, border: `1px solid ${c.border}`,
                    padding: '0.15rem 0.5rem', borderRadius: '6px',
                  }}>{skill.level}%</span>
                </div>
                <div style={{ height: '6px', background: '#f3f4f6', borderRadius: '3px', overflow: 'hidden' }}>
                  <div style={{
                    height: '100%', width: `${skill.level}%`,
                    background: `linear-gradient(90deg, ${c.color}, ${c.color}cc)`,
                    borderRadius: '3px', transition: 'width 1.2s ease',
                  }} />
                </div>
                <span style={{
                  display: 'inline-block', marginTop: '0.6rem',
                  fontSize: '0.65rem', fontFamily: 'var(--mono)',
                  background: c.bg, color: c.color, border: `1px solid ${c.border}`,
                  padding: '0.15rem 0.5rem', borderRadius: '4px',
                }}>{skill.category}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
