import React from 'react';
import { projects } from '../data/portfolio';

export default function Projects() {
  return (
    <section id="projets" className="section section-alt">
      <div className="container">
        <p className="section-label">réalisations</p>
        <h2 className="section-title">Mes projets</h2>
        <p className="section-sub">Des projets concrets qui reflètent mes compétences techniques et ma créativité.</p>

        {projects.length === 0 ? (
          <div style={{
            textAlign: 'center', padding: '4rem 2rem',
            background: 'var(--surface)', borderRadius: 'var(--radius-lg)',
            border: '2px dashed var(--border2)',
          }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🚀</div>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--text)' }}>
              Projets à venir
            </h3>
            <p style={{ color: 'var(--muted)', fontSize: '0.9rem', maxWidth: '380px', margin: '0 auto 1rem' }}>
              Ouvre le fichier <code style={{ fontFamily: 'var(--mono)', background: '#f3f4f6', padding: '0.1rem 0.4rem', borderRadius: '4px' }}>src/data/portfolio.js</code> et remplis le tableau <strong>projects</strong> avec tes réalisations.
            </p>
            <div style={{
              display: 'inline-block', background: '#f8f7f4', border: '1px solid var(--border)',
              borderRadius: '8px', padding: '0.75rem 1.25rem',
              fontFamily: 'var(--mono)', fontSize: '0.75rem', color: 'var(--muted)',
              textAlign: 'left', marginTop: '0.5rem',
            }}>
              {`{ title: "Mon Projet",\n  type: "Web App",\n  description: "...",\n  tech: ["React", "Laravel"],\n  github: "https://...",\n  featured: true }`}
            </div>
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
            {projects.map((p, i) => (
              <div key={i} className="card" style={{ display: 'flex', flexDirection: 'column' }}>
                {p.featured && (
                  <div style={{
                    display: 'inline-block', marginBottom: '0.75rem',
                    fontSize: '0.65rem', fontFamily: 'var(--mono)',
                    background: '#fef9c3', color: '#854d0e', border: '1px solid #fde68a',
                    padding: '0.2rem 0.6rem', borderRadius: '2rem',
                  }}>★ Projet phare</div>
                )}
                <span className="tag" style={{ alignSelf: 'flex-start', marginBottom: '0.75rem' }}>{p.type}</span>
                <h3 style={{ fontWeight: 700, fontSize: '1.05rem', marginBottom: '0.6rem' }}>{p.title}</h3>
                <p style={{ fontSize: '0.84rem', color: 'var(--muted)', lineHeight: 1.7, flex: 1, marginBottom: '1rem' }}>{p.description}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginBottom: '1rem' }}>
                  {p.tech.map(t => (
                    <span key={t} style={{
                      fontFamily: 'var(--mono)', fontSize: '0.65rem',
                      background: '#f3f4f6', color: 'var(--muted)',
                      padding: '0.2rem 0.5rem', borderRadius: '4px',
                    }}>{t}</span>
                  ))}
                </div>
                <div style={{ display: 'flex', gap: '0.75rem', paddingTop: '0.75rem', borderTop: '1px solid var(--border)' }}>
                  {p.github && <a href={p.github} style={{ fontSize: '0.8rem', color: 'var(--muted)', textDecoration: 'none' }}>⌥ Code</a>}
                  {p.demo && <a href={p.demo} style={{ fontSize: '0.8rem', color: 'var(--accent)', textDecoration: 'none' }}>↗ Démo live</a>}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
