import { useEffect, useRef } from 'react';

export default function AnimatedCursor() {
  const dotRef = useRef(null);
  const outlineRef = useRef(null);

  useEffect(() => {
    if (window.innerWidth < 1024) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;

    let outlineX = mouseX;
    let outlineY = mouseY;

    const dot = dotRef.current;
    const outline = outlineRef.current;

    const moveCursor = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      // dot follows instantly
      dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
    };

    const animate = () => {
      // smooth follow for outline
      outlineX += (mouseX - outlineX) * 0.12;
      outlineY += (mouseY - outlineY) * 0.12;

      outline.style.transform = `translate3d(${outlineX}px, ${outlineY}px, 0)`;

      requestAnimationFrame(animate);
    };

    // click effect
    const handleMouseDown = () => {
      outline.style.transform += ' scale(0.85)';
    };

    const handleMouseUp = () => {
      outline.style.transform = `translate3d(${outlineX}px, ${outlineY}px, 0) scale(1)`;
    };

    // hover effect on links/buttons
    const addHover = () => {
      outline.style.transform += ' scale(1.6)';
      outline.style.borderColor = 'var(--accent)';
    };

    const removeHover = () => {
      outline.style.transform = `translate3d(${outlineX}px, ${outlineY}px, 0) scale(1)`;
      outline.style.borderColor = 'rgba(255,255,255,0.3)';
    };

    const interactiveElements = document.querySelectorAll('a, button');

    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', addHover);
      el.addEventListener('mouseleave', removeHover);
    });

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    animate();

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);

      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', addHover);
        el.removeEventListener('mouseleave', removeHover);
      });
    };
  }, []);

  return (
    <>
      {/* DOT */}
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[9999] hidden h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--accent)] lg:block"
      />

      {/* OUTLINE */}
      <div
        ref={outlineRef}
        className="pointer-events-none fixed left-0 top-0 z-[9998] hidden h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/30 shadow-[0_0_20px_var(--focus-ring)] lg:block"
      />
    </>
  );
}
