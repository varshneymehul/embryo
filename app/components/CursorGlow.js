"use client";
import { useEffect, useRef } from "react";

export default function CursorGlow({ color = "white" }) {
  const glowRef = useRef(null);
  const mouse = useRef({ x: 0, y: 0 });
  const pos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);

    const animate = () => {
      // Smoothly interpolate position
      pos.current.x += (mouse.current.x - pos.current.x) * 0.1;
      pos.current.y += (mouse.current.y - pos.current.y) * 0.1;

      const el = glowRef.current;
      if (el) {
        el.style.transform = `translate3d(${pos.current.x - 64}px, ${
          pos.current.y - 64
        }px, 0)`;
      }

      requestAnimationFrame(animate);
    };

    animate();
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={glowRef}
      className="pointer-events-none fixed z-0 w-32 h-32 rounded-full blur-3xl opacity-30"
      style={{
        backgroundColor: color,
        transition: "opacity 0.3s ease",
      }}
    />
  );
}
