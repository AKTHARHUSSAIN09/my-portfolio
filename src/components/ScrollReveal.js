import React, { useRef, useEffect, useState } from 'react';

export default function ScrollReveal({
  children,
  delay = 0,
  direction = 'up',
  className = '',
  distance = 30,
  duration = 700,
}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const getInitialTransform = () => {
    switch (direction) {
      case 'up':    return `translateY(${distance}px)`;
      case 'down':  return `translateY(-${distance}px)`;
      case 'left':  return `translateX(-${distance}px)`;
      case 'right': return `translateX(${distance}px)`;
      case 'scale': return 'scale(0.92)';
      default:      return `translateY(${distance}px)`;
    }
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translate(0) scale(1)' : getInitialTransform(),
        transition: `opacity ${duration}ms cubic-bezier(.2,.9,.2,1) ${delay}ms, transform ${duration}ms cubic-bezier(.2,.9,.2,1) ${delay}ms`,
        willChange: isVisible ? 'auto' : 'opacity, transform',
      }}
    >
      {children}
    </div>
  );
}
