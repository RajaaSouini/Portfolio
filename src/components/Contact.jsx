import React, { useState } from 'react';
import { info } from '../data/portfolio';

const EMAILJS_PUBLIC_KEY  = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;
const EMAILJS_SERVICE_ID  = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;

export default function Contact() {
  const [form, setForm]     = useState({ name: '', email: '', sujet: '', message: '' });
  const [status, setStatus] = useState('idle');

  const loadEmailJS = () => new Promise((resolve) => {
    if (window.emailjs) { resolve(); return; }
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js';
    script.onload = () => { window.emailjs.init(EMAILJS_PUBLIC_KEY); resolve(); };
    document.head.appendChild(script);
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      await loadEmailJS();
      await window.emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
        from_name:  form.name,
        from_email: form.email,
        subject:    form.sujet,
        message:    form.message,
      });
      setStatus('success');
      setForm({ name: '', email: '', sujet: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch (err) {
      console.error('EmailJS error:', err);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const inputStyle = {
    width: '100%', padding: '0.8rem 1rem',
    background: '#f9fafb', border: '1.5px solid var(--border)',
    borderRadius: '8px', color: 'var(--text)',
    fontFamily: 'var(--font)', fontSize: '0.9rem', outline: 'none',
    transition: 'border-color 0.2s, background 0.2s',
  };
  const labelStyle = {
    display: 'block', fontSize: '0.75rem', fontWeight: 600,
    color: 'var(--text)', marginBottom: '0.4rem',
  };

  return (
    <section id="contact" className="section section-alt">
      <div className="container">
        <p className="section-label">contact</p>
        <h2 className="section-title">Travaillons ensemble</h2>
        <p className="section-sub">Un projet, une opportunité, une question ? Je serai ravie d'échanger avec vous.</p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: '3.5rem', alignItems: 'start' }} className="contact-grid">

          <div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2.5rem' }}>
              {[
                { icon: '✉', label: 'Email',        val: info.email,     href: `mailto:${info.email}` },
                { icon: '📍', label: 'Localisation', val: info.location,  href: null },
                { icon: '⌥', label: 'GitHub',        val: 'Mon GitHub',   href: info.github },
                { icon: '▲', label: 'LinkedIn',      val: 'Mon LinkedIn', href: info.linkedin },
              ].map(item => (
                <div key={item.label} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{
                    width: 44, height: 44, borderRadius: '10px',
                    background: 'var(--accent-light)', border: '1px solid #bfdbfe',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '1rem', flexShrink: 0,
                  }}>{item.icon}</div>
                  <div>
                    <div style={{ fontSize: '0.7rem', color: 'var(--muted2)', fontFamily: 'var(--mono)', marginBottom: '0.1rem' }}>{item.label}</div>
                    {item.href
                      ? <a href={item.href} style={{ color: 'var(--accent)', fontSize: '0.875rem', fontWeight: 600, textDecoration: 'none' }}>{item.val}</a>
                      : <span style={{ color: 'var(--text)', fontSize: '0.875rem', fontWeight: 600 }}>{item.val}</span>
                    }
                  </div>
                </div>
              ))}
            </div>
            <div style={{ background: '#dcfce7', border: '1px solid #bbf7d0', borderRadius: '12px', padding: '1.25rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
                <span style={{ width: 8, height: 8, background: '#22c55e', borderRadius: '50%', display: 'inline-block' }} />
                <span style={{ fontWeight: 700, fontSize: '0.88rem', color: '#15803d' }}>Disponible</span>
              </div>
              <p style={{ fontSize: '0.8rem', color: '#166534', lineHeight: 1.6 }}>
                Ouverte aux opportunités de stage, CDI ou projets freelance.
              </p>
            </div>
          </div>

          <div className="card">
            {status === 'success' && (
              <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🎉</div>
                <h3 style={{ color: '#15803d', marginBottom: '0.5rem', fontWeight: 700 }}>Message envoyé !</h3>
                <p style={{ color: 'var(--muted)', fontSize: '0.88rem' }}>
                  Ton message est arrivé dans ma boîte Gmail. Je te réponds très bientôt !
                </p>
              </div>
            )}
            {status === 'error' && (
              <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>😕</div>
                <h3 style={{ color: '#dc2626', marginBottom: '0.5rem', fontWeight: 700 }}>Erreur d'envoi</h3>
                <p style={{ color: 'var(--muted)', fontSize: '0.88rem' }}>
                  Réessaie ou contacte-moi directement à {info.email}
                </p>
              </div>
            )}
            {(status === 'idle' || status === 'sending') && (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div>
                    <label style={labelStyle}>Votre nom</label>
                    <input style={inputStyle} placeholder="Nom complet" value={form.name} required
                      onChange={e => setForm({ ...form, name: e.target.value })}
                      onFocus={e => { e.target.style.borderColor = 'var(--accent)'; e.target.style.background = '#fff'; }}
                      onBlur={e =>  { e.target.style.borderColor = 'var(--border)';  e.target.style.background = '#f9fafb'; }} />
                  </div>
                  <div>
                    <label style={labelStyle}>Email</label>
                    <input type="email" style={inputStyle} placeholder="votre@email.com" value={form.email} required
                      onChange={e => setForm({ ...form, email: e.target.value })}
                      onFocus={e => { e.target.style.borderColor = 'var(--accent)'; e.target.style.background = '#fff'; }}
                      onBlur={e =>  { e.target.style.borderColor = 'var(--border)';  e.target.style.background = '#f9fafb'; }} />
                  </div>
                </div>
                <div>
                  <label style={labelStyle}>Sujet</label>
                  <input style={inputStyle} placeholder="Ex: Proposition de stage, Projet web..." value={form.sujet} required
                    onChange={e => setForm({ ...form, sujet: e.target.value })}
                    onFocus={e => { e.target.style.borderColor = 'var(--accent)'; e.target.style.background = '#fff'; }}
                    onBlur={e =>  { e.target.style.borderColor = 'var(--border)';  e.target.style.background = '#f9fafb'; }} />
                </div>
                <div>
                  <label style={labelStyle}>Message</label>
                  <textarea rows={5} style={{ ...inputStyle, resize: 'vertical', minHeight: '120px' }}
                    placeholder="Décrivez votre projet ou besoin..."
                    value={form.message} required
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    onFocus={e => { e.target.style.borderColor = 'var(--accent)'; e.target.style.background = '#fff'; }}
                    onBlur={e =>  { e.target.style.borderColor = 'var(--border)';  e.target.style.background = '#f9fafb'; }} />
                </div>
                <button type="submit" className="btn btn-primary"
                  disabled={status === 'sending'}
                  style={{ justifyContent: 'center', padding: '0.85rem', opacity: status === 'sending' ? 0.7 : 1, cursor: status === 'sending' ? 'not-allowed' : 'pointer' }}>
                  {status === 'sending' ? '⏳ Envoi en cours...' : 'Envoyer le message →'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
        }
      `}</style>
    </section>
  );
}
