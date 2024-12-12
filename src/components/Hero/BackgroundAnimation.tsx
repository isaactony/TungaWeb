import React from 'react';
import { Player } from '@remotion/player';
import { AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig } from 'remotion';

const AnimatedPattern: React.FC = () => {
  const frame = useCurrentFrame();
  const { width, height } = useVideoConfig();

  const generatePatterns = () => {
    const patterns = [];
    for (let i = 0; i < 20; i++) {
      const x = Math.sin(frame / 100 + i) * width * 0.3 + width / 2;
      const y = Math.cos(frame / 120 + i) * height * 0.3 + height / 2;
      const size = interpolate(
        Math.sin(frame / 80 + i),
        [-1, 1],
        [10, 30]
      );
      const opacity = interpolate(
        Math.sin(frame / 60 + i),
        [-1, 1],
        [0.1, 0.3]
      );

      patterns.push(
        <circle
          key={i}
          cx={x}
          cy={y}
          r={size}
          fill="rgb(124,58,237)"
          opacity={opacity}
          filter="blur(20px)"
        />
      );
    }
    return patterns;
  };

  return (
    <AbsoluteFill>
      <svg width="100%" height="100%" className="absolute inset-0">
        <defs>
          <radialGradient id="gradient" cx="50%" cy="50%" r="70%">
            <stop offset="0%" stopColor="rgb(124,58,237)" stopOpacity="0.2" />
            <stop offset="100%" stopColor="rgb(0,0,0)" stopOpacity="0" />
          </radialGradient>
        </defs>
        {generatePatterns()}
        <rect
          width="100%"
          height="100%"
          fill="url(#gradient)"
          opacity={0.4}
        />
      </svg>
    </AbsoluteFill>
  );
};

const BackgroundAnimation = () => {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <Player
        component={AnimatedPattern}
        durationInFrames={300}
        compositionWidth={1920}
        compositionHeight={1080}
        fps={30}
        loop
        autoPlay
        style={{
          width: '100%',
          height: '100%',
        }}
      />
    </div>
  );
};

export default BackgroundAnimation;