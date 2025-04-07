import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1000;
  overflow: hidden;
`;

const Strand = styled.div<{ left: number; delay: number; duration: number }>`
  position: absolute;
  width: 2px;
  height: 30px;
  background: linear-gradient(to bottom, #FF9933, #FF5722);
  border-radius: 2px;
  left: ${props => props.left}%;
  top: -30px;
  animation: float ${props => props.duration}s linear ${props => props.delay}s infinite;
  opacity: 0.7;
  transform-origin: center;

  @keyframes float {
    0% {
      transform: translateY(0) rotate(0deg);
      opacity: 0.7;
    }
    50% {
      transform: translateY(50vh) rotate(180deg);
      opacity: 0.4;
    }
    100% {
      transform: translateY(100vh) rotate(360deg);
      opacity: 0;
    }
  }
`;

const SaffronAnimation: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [strands, setStrands] = React.useState<Array<{ left: number; delay: number; duration: number }>>([]);
  const [showAnimation, setShowAnimation] = useState(true);

  useEffect(() => {
    // Create initial strands
    const initialStrands = Array.from({ length: 20 }, () => ({
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 5 + Math.random() * 5
    }));
    setStrands(initialStrands);

    // Add new strands periodically
    const interval = setInterval(() => {
      setStrands(prev => {
        const newStrands = [...prev];
        if (newStrands.length < 50) {
          newStrands.push({
            left: Math.random() * 100,
            delay: 0,
            duration: 5 + Math.random() * 5
          });
        }
        return newStrands;
      });
    }, 1000);

    // Hide animation after 10 seconds
    const timeout = setTimeout(() => {
      setShowAnimation(false);
    }, 10000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  if (!showAnimation) return null;

  return (
    <Container ref={containerRef}>
      {strands.map((strand, index) => (
        <Strand
          key={index}
          left={strand.left}
          delay={strand.delay}
          duration={strand.duration}
        />
      ))}
    </Container>
  );
};

export default SaffronAnimation; 