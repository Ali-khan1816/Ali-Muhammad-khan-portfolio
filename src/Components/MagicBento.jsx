import React from 'react'

const MagicBento = ({
  children,
  textAutoHide = true,
  enableStars = true,
  enableSpotlight = true,
  enableBorderGlow = true,
  enableTilt = true,
  enableMagnetism = true,
  clickEffect = true,
  spotlightRadius = 300,
  particleCount = 12,
  glowColor = "132, 0, 255"
}) => {
  return (
    <div
      className='relative rounded-2xl transition-transform duration-300 hover:scale-105'
      style={{
        boxShadow: enableBorderGlow
          ? `0 0 20px rgba(${glowColor}, 0.6), 0 0 40px rgba(${glowColor}, 0.3)`
          : 'none',
      }}
    >
      {children}
    </div>
  )
}

export default MagicBento
