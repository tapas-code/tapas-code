import { useEffect, useRef } from 'react';
import { useWindowSize } from 'react-use';

interface Particle {
  x: number;
  y: number;
  dx: number;
  dy: number;
  size: number;
}

export function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { width, height } = useWindowSize();

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) {
      console.error('Canvas element is not available.');
      return;
    }

    const ctx = canvas.getContext('2d');
    if (!ctx) {
      console.error('Failed to get 2D context.');
      return;
    }

    canvas.width = width;
    canvas.height = height;

    const particles: Particle[] = Array.from({ length: 50 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      dx: (Math.random() - 0.5) * 0.5,
      dy: (Math.random() - 0.5) * 0.5,
      size: Math.random() * 2 + 1,
    }));

    let animationFrameId: number;

    function animate() {
      if (!ctx) return;

      // Clear the canvas while keeping transparency
      ctx.clearRect(0, 0, width, height);

      particles.forEach(particle => {
        particle.x += particle.dx;
        particle.y += particle.dy;

        if (particle.x < 0 || particle.x > width) particle.dx *= -1;
        if (particle.y < 0 || particle.y > height) particle.dy *= -1;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);

        // Add glow effect
        ctx.shadowBlur = 10;
        ctx.shadowColor = 'rgba(0, 150, 255, 0.8)';
        ctx.fillStyle = 'rgba(0, 150, 255, 0.6)';
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(animate);
    }

    animate();

    return () => cancelAnimationFrame(animationFrameId);
  }, [width, height]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-10 opacity-100 dark:opacity-100"
      style={{ pointerEvents: 'none' }} // Ensure it's non-interactive
    />
  );
}
