import { ImageResponse } from 'next/og';

export const alt = 'Trueyy — Detect AI Cheating in Live Remote Interviews';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          backgroundColor: '#0B1A10',
          padding: '72px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', color: '#4CD964', fontSize: 40, fontWeight: 700 }}>
          Trueyy
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', color: '#FFFFFF', fontSize: 68, fontWeight: 800, lineHeight: 1.1 }}>
            Detect AI cheating in live remote interviews
          </div>
          <div style={{ display: 'flex', color: '#E5E7EB', fontSize: 30, marginTop: 28 }}>
            Real-time integrity scoring for Zoom, Meet & Teams. No candidate install.
          </div>
        </div>
        <div style={{ display: 'flex', color: 'rgba(255,255,255,0.5)', fontSize: 26 }}>
          trueyy.com
        </div>
      </div>
    ),
    { ...size }
  );
}
