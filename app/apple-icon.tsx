import { ImageResponse } from 'next/og'

// Image metadata
export const size = {
  width: 180,
  height: 180,
}
export const contentType = 'image/png'

// Apple icon component
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 100,
          background: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 50%, #7c3aed 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontWeight: 'bold',
          flexDirection: 'column',
        }}
      >
        <div style={{ fontSize: 80 }}>W</div>
        <div style={{ fontSize: 20, marginTop: -10 }}>S</div>
      </div>
    ),
    {
      ...size,
    }
  )
}

