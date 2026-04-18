import React from 'react';
import { education } from '../data/portfolio';

export default function Education() {
  return (
    <section id="formation" className="section">
      <div className="container">
        <p className="section-label">formation</p>
        <h2 className="section-title">Parcours académique</h2>
        <p className="section-sub">Mon itinéraire éducatif, des mathématiques au développement web full stack.</p>

        <div style={{ position: 'relative', maxWidth: '700px' }}>
          {/* Timeline vertical line */}
          <div style={{
            position: 'absolute', left: '22px', top: '24px', bottom: '24px',
            width: '2px',
            background: 'linear-gradient(to bottom, var(--accent), var(--accent2), #e5e7eb)',
            borderRadius: '1px',
          }} />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
            {education.map((edu, i) => (
              <div key={i} style={{ display: 'flex', gap: '1.75rem', alignItems: 'flex-start', position: 'relative' }}>
                {/* Icon bubble */}
                <div style={{
                  width: '46px', height: '46px', borderRadius: '50%', flexShrink: 0,
                  background: i === education.length - 1 ? 'var(--accent)' : 'white',
                  border: `2px solid ${i === education.length - 1 ? 'var(--accent)' : 'var(--border2)'}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '1.2rem', boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                  zIndex: 1, position: 'relative',
                }}>
                  {edu.icon}
                </div>

                <div className="card" style={{
                  flex: 1,
                  borderLeft: i === education.length - 1 ? '3px solid var(--accent)' : '3px solid var(--border)',
                  borderRadius: '0 12px 12px 0',
                  background: i === education.length - 1 ? 'var(--accent-light)' : 'var(--surface)',
                }}>
                  <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '0.35rem', color: 'var(--text)' }}>
                    {edu.diploma}
                  </h3>
                  <p style={{ fontSize: '0.83rem', color: 'var(--muted)', marginBottom: '0.4rem' }}>{edu.school}</p>
                  {i === education.length - 1 && (
                    <span style={{
                      display: 'inline-flex', alignItems: 'center', gap: '0.3rem',
                      fontSize: '0.7rem', fontFamily: 'var(--mono)',
                      background: 'white', color: 'var(--accent)',
                      border: '1px solid #bfdbfe', padding: '0.2rem 0.6rem', borderRadius: '6px',
                    }}>
                      ★ Diplôme actuel
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
