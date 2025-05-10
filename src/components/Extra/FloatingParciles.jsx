import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const FloatingParciles = ({
  count = 15,
  colors = ['#FF8C00', '#FFA500', '#D3D3D3'],
  minSize = 4,
  maxSize = 10,
  minSpeed = 0.02,
  maxSpeed = 0.15,
  opacity = 0.8,
  disableOnMobile = true
}) => {
  useEffect(() => {
    if (disableOnMobile && window.innerWidth <= 768) return;

    const particles = [];
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;

    for (let i = 0; i < count; i++) {
      const particle = document.createElement('div');
      const size = Math.random() * (maxSize - minSize) + minSize;
      const color = colors[Math.floor(Math.random() * colors.length)];

      particle.style.position = 'fixed';
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.backgroundColor = color;
      particle.style.borderRadius = '50%';
      particle.style.pointerEvents = 'none';
      particle.style.zIndex = '9999';
      particle.style.opacity = opacity;
      particle.style.filter = `blur(1px) drop-shadow(0 0 4px ${color})`;
      particle.style.left = `${Math.random() * 100}vw`;
      particle.style.top = `${Math.random() * 100}vh`;
      particle.style.transform = 'translate(-50%, -50%)';
      particle.style.transition = 'transform 0.1s ease-out';

      document.body.appendChild(particle);

      particles.push({
        element: particle,
        x: parseFloat(particle.style.left),
        y: parseFloat(particle.style.top),
        size,
        speed: Math.random() * (maxSpeed - minSpeed) + minSpeed,
        offset: Math.random() * 1000
      });
    }

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);

    let animationId;
    const animate = () => {
      const time = Date.now() * 0.001;
      particles.forEach(particle => {
        const angle = time + particle.offset;
        const swirl = Math.sin(angle) * 10;

        particle.x += (mouseX - particle.x) * particle.speed + Math.cos(angle) * 0.5;
        particle.y += (mouseY - particle.y) * particle.speed + Math.sin(angle) * 0.5;

        particle.element.style.left = `${particle.x + swirl}px`;
        particle.element.style.top = `${particle.y}px`;
        particle.element.style.transform = `translate(-50%, -50%) scale(1.05)`;
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationId);
      particles.forEach(p => p.element.remove());
    };
  }, [count, colors, minSize, maxSize, minSpeed, maxSpeed, opacity, disableOnMobile]);

  return null;
};

FloatingParciles.propTypes = {
  count: PropTypes.number,
  colors: PropTypes.arrayOf(PropTypes.string),
  minSize: PropTypes.number,
  maxSize: PropTypes.number,
  minSpeed: PropTypes.number,
  maxSpeed: PropTypes.number,
  opacity: PropTypes.number,
  disableOnMobile: PropTypes.bool
};

export default FloatingParciles;
