import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = '趣味副業の確定申告ガイド';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          background:
            'linear-gradient(135deg, #1f7e69 0%, #2e9c82 50%, #0e7490 100%)',
          padding: '80px',
          color: 'white',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '20px',
            fontSize: 28,
            opacity: 0.9,
          }}
        >
          <div
            style={{
              width: 64,
              height: 64,
              background: 'white',
              color: '#1f7e69',
              borderRadius: 16,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 700,
              fontSize: 36,
            }}
          >
            趣
          </div>
          <span>shumi-fukugyo-tax.com</span>
        </div>

        <div
          style={{
            marginTop: 40,
            fontSize: 88,
            fontWeight: 800,
            lineHeight: 1.1,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <span>趣味副業の</span>
          <span>確定申告ガイド</span>
        </div>

        <div
          style={{
            marginTop: 32,
            fontSize: 32,
            opacity: 0.92,
            display: 'flex',
          }}
        >
          料理・音楽・DIYを副業にした会社員のための税金まとめ
        </div>
      </div>
    ),
    { ...size },
  );
}
