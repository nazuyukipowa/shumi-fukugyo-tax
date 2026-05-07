import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const size = { width: 32, height: 32 };
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#2f6a58',
          color: '#fdfaf3',
          fontSize: 22,
          fontWeight: 700,
          fontFamily: 'serif',
        }}
      >
        趣
      </div>
    ),
    { ...size },
  );
}
