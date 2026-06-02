import { useEffect, useState } from 'react';
import { motion } from 'motion/react';

interface ScoreRingProps {
  score: number;
  maxScore?: number;
  size?: number;
  strokeWidth?: number;
  primaryColor?: string;
  secondaryColor?: string;
  label?: string;
}

export default function ScoreRing({
  score,
  maxScore = 100,
  size = 120,
  strokeWidth = 8,
  primaryColor = '#7C3AED', // Violet-600
  secondaryColor = '#06B6D4', // Cyan-500
  label,
}: ScoreRingProps) {
  const [animatedScore, setAnimatedScore] = useState(0);

  useEffect(() => {
    const duration = 1200; // ms
    const startTime = performance.now();
    
    let frameId: number;
    const animate = (time: number) => {
      const elapsed = time - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out quad
      const easeProgress = progress * (2 - progress);
      setAnimatedScore(Math.round(easeProgress * score));

      if (progress < 1) {
        frameId = requestAnimationFrame(animate);
      }
    };
    
    frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, [score]);

  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const percentage = score / maxScore;
  const strokeDashoffset = circumference - percentage * circumference;

  return (
    <div className="flex flex-col items-center justify-center" id="score-ring-wrapper">
      <div 
        className="relative flex items-center justify-center" 
        style={{ width: size, height: size }}
        id={`score-ring-container-${score}`}
      >
        {/* Glow effect filter definition */}
        <svg className="absolute w-0 h-0">
          <defs>
            <filter id={`glow-${score}`} x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <linearGradient id={`grad-${score}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={primaryColor} />
              <stop offset="100%" stopColor={secondaryColor} />
            </linearGradient>
          </defs>
        </svg>

        {/* Circular Ring SVG */}
        <svg
          width={size}
          height={size}
          className="transform -rotate-90"
        >
          {/* Background track */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="transparent"
            stroke="#1E293B" // Slate 800
            strokeWidth={strokeWidth}
          />
          {/* Animated score ring */}
          <motion.circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="transparent"
            stroke={`url(#grad-${score})`}
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            strokeLinecap="round"
            style={{
              filter: `url(#glow-${score})`,
            }}
          />
        </svg>

        {/* Centered text display */}
        <div className="absolute flex flex-col items-center justify-center text-center">
          <span className="text-3xl font-mono underline-none font-bold text-white tracking-tighter">
            {animatedScore}
          </span>
          {label && (
            <span className="text-[10px] font-sans font-medium uppercase tracking-widest text-[#94A3B8] overflow-hidden whitespace-nowrap mt-0.5">
              {label}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
