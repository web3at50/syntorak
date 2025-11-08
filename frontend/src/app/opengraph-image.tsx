import { ImageResponse } from 'next/og'

// Image metadata
export const alt = 'Syntorak - Portfolio of Web Apps & Sites'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

// Image generation
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #F7931E 0%, #4CAF50 100%)',
          position: 'relative',
        }}
      >
        {/* Decorative circles */}
        <div
          style={{
            position: 'absolute',
            top: -100,
            right: -100,
            width: 400,
            height: 400,
            borderRadius: '50%',
            background: 'rgba(255, 255, 255, 0.1)',
            display: 'flex',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: -150,
            left: -150,
            width: 500,
            height: 500,
            borderRadius: '50%',
            background: 'rgba(255, 255, 255, 0.08)',
            display: 'flex',
          }}
        />

        {/* Content container */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '80px 100px',
            textAlign: 'center',
            zIndex: 10,
          }}
        >
          {/* Logo/Title */}
          <div
            style={{
              fontSize: 120,
              fontWeight: 900,
              color: 'white',
              letterSpacing: '-0.05em',
              marginBottom: 30,
              textShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
              display: 'flex',
            }}
          >
            Syntorak
          </div>

          {/* Tagline */}
          <div
            style={{
              fontSize: 36,
              fontWeight: 500,
              color: 'rgba(255, 255, 255, 0.95)',
              maxWidth: 900,
              lineHeight: 1.4,
              textShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
              display: 'flex',
            }}
          >
            Building innovative web applications and sites with modern technologies
          </div>

          {/* Accent bar */}
          <div
            style={{
              marginTop: 40,
              width: 200,
              height: 6,
              background: 'white',
              borderRadius: 3,
              opacity: 0.9,
              display: 'flex',
            }}
          />
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
