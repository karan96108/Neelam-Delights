import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import saffronImage from '../../Images/Saffron.png';

const Container = styled.div<{ isVisible: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1000;
  overflow: hidden;
  opacity: ${props => props.isVisible ? 1 : 0};
  transition: opacity 0.5s ease-out;
`;

const Strand = styled.div<{ left: number; delay: number; duration: number }>`
  position: absolute;
  width: 40px;
  height: 40px;
  background-image: url(${saffronImage});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  left: ${props => props.left}%;
  top: -40px;
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
  const [isVisible, setIsVisible] = useState(true);
  const strandIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
    // Create initial strands
    const initialStrands = Array.from({ length: 20 }, () => ({
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 5 + Math.random() * 5
    }));
    setStrands(initialStrands);

    // Add new strands periodically
    strandIntervalRef.current = setInterval(() => {
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

    // Handle scroll events
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // If scrolling down and not already hidden
      if (currentScrollY > lastScrollY.current && isVisible) {
        setIsVisible(false);
        // Clear the strand interval after fade out
        setTimeout(() => {
          if (strandIntervalRef.current) {
            clearInterval(strandIntervalRef.current);
          }
        }, 500);
      }
      
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      if (strandIntervalRef.current) {
        clearInterval(strandIntervalRef.current);
      }
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isVisible]);

  return (
    <Container ref={containerRef} isVisible={isVisible}>
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