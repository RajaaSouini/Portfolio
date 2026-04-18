import React from 'react';
import { experiences } from '../data/portfolio';

const typeColors = {
  CDI: { bg: '#dcfce7', color: '#15803d', border: '#bbf7d0' },
  CDD: { bg: '#dbeafe', color: '#1d4ed8', border: '#bfdbfe' },
  Stage: { bg: '#fef9c3', color: '#854d0e', border: '#fde68a' },
  Freelance: { bg: '#faf5ff', color: '#7c3aed', border: '#ddd6fe' },
};

export default function Experience() {
  return (
    <section id="experiences" className="section">
      <div className="container">
        <p className="section-label">expériences</p>
        <h2 className="section-title">Expériences professionnelles</h2>
        <p className="section-sub">Mon parcours professionnel et les missions que j'ai accomplies.</p>

        {experiences.length === 0 ? (
          <div style={{
            textAlign: 'center', padding: '4rem 2rem',
            background: 'var(--surface)', borderRadius: 'var(--radius-lg)',
            border: '2px dashed var(--border2)',
          }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>💼</div>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.5rem' }}>
              Expériences à ajouter
            </h3>
            <p style={{ color: 'var(--muted)', fontSize: '0.9rem', maxWidth: '380px', margin: '0 auto 1rem' }}>
              Ouvre <code style={{ fontFamily: 'var(--mono)', background: '#f3f4f6', padding: '0.1rem 0.4rem', borderRadius: '4px' }}>src/data/portfolio.js</code> et remplis le tableau <strong>experiences</strong>.
            </p>
            <div style={{
              display: 'inline-block', background: '#f8f7f4', border: '1px solid var(--border)',
              borderRadius: '8px', padding: '0.75rem 1.25rem',
              fontFamily: 'var(--mono)', fontSize: '0.75rem', color: 'var(--muted)',
              textAlign: 'left', marginTop: '0.5rem',
            }}>
              {`{ role: "Développeuse Full Stack",\n  company: "Entreprise X",\n  period: "Jan 2024 — Présent",\n  description: "Tes missions...",\n  type: "Stage" }`}
            </div>
          </div>
        ) : (
          <div style={{ position: 'relative', maxWidth: '780px' }}>
            <div style={{
              position: 'absolute', left: '22px', top: '24px', bottom: '24px',
              width: '2px', background: 'linear-gradient(to bottom, var(--accent), #e5e7eb)',
              borderRadius: '1px',
            }} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {experiences.map((exp, i) => {
                const tc = typeColors[exp.type] || typeColors.Stage;
                return (
                  <div key={i} style={{ display: 'flex', gap: '1.75rem', position: 'relative' }}>
                    <div style={{
                      width: '46px', height: '46px', borderRadius: '50%', flexShrink: 0,
                      background: i === 0 ? 'var(--accent)' : 'white',
                      border: `2px solid ${i === 0 ? 'var(--accent)' : 'var(--border2)'}`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '1.1rem', zIndex: 1, boxShadow: '0 2px 8px rgba(0,0,0,0.07)',
                    }}>💼</div>
                    <div className="card" style={{ flex: 1, borderLeft: `3px solid ${i === 0 ? 'var(--accent)' : 'var(--border)'}`, borderRadius: '0 12px 12px 0' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.35rem' }}>
                        <h3 style={{ fontWeight: 700, fontSize: '1rem' }}>{exp.role}</h3>
                        <span style={{
                          fontSize: '0.65rem', fontFamily: 'var(--mono)',
                          background: tc.bg, color: tc.color, border: `1px solid ${tc.border}`,
                          padding: '0.18rem 0.55rem', borderRadius: '2rem', fontWeight: 600,
                        }}>{exp.type}</span>
                      </div>
                      <p style={{ color: 'var(--accent)', fontWeight: 600, fontSize: '0.88rem', marginBottom: '0.25rem' }}>{exp.company}</p>
                      <p style={{ fontFamily: 'var(--mono)', fontSize: '0.7rem', color: 'var(--muted2)', marginBottom: '0.75rem' }}>{exp.period}</p>
                      <p style={{ fontSize: '0.855rem', color: 'var(--muted)', lineHeight: 1.75 }}>{exp.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
