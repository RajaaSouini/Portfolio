import React from 'react';
import { info } from '../data/portfolio';

export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid var(--border)',
      padding: '2rem',
      background: 'var(--surface)',
      display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem',
    }}>
      <div style={{ fontFamily: 'var(--mono)', fontSize: '0.8rem', color: 'var(--accent)', fontWeight: 500 }}>
        {info.name}
      </div>
      <div style={{ fontSize: '0.75rem', color: 'var(--muted2)', fontFamily: 'var(--mono)' }}>
        © {new Date().getFullYear()} — Développé avec React ⚛ & ❤️
      </div>
    </footer>
  );
}
