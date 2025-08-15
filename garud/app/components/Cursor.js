"use client";
import { useEffect } from "react";

export default function Cursor() {
  useEffect(() => {
    const cursor = document.querySelector(".custom-cursor");
    const tail = document.querySelector(".cursor-tail");

    let mouseX = 0;
    let mouseY = 0;
    let posX = 0;
    let posY = 0;
    let tailX = 0;
    let tailY = 0;

    const updatePosition = () => {
      // Smooth main cursor movement
      posX += (mouseX - posX) * 0.2;
      posY += (mouseY - posY) * 0.2;

      // Tail follows even slower for trailing effect
      tailX += (mouseX - tailX) * 0.1;
      tailY += (mouseY - tailY) * 0.1;

      cursor.style.transform = `translate3d(${posX}px, ${posY}px, 0)`;
      tail.style.transform = `translate3d(${tailX}px, ${tailY}px, 0)`;

      requestAnimationFrame(updatePosition);
    };

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    document.addEventListener("mousemove", handleMouseMove);
    updatePosition();

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      {/* Main Triangle Cursor */}
      <div
        className="custom-cursor fixed top-0 left-0 w-0 h-0 pointer-events-none z-[9999]
        border-l-[12px] border-l-transparent
        border-r-[12px] border-r-transparent
        border-b-[20px] border-b-cyan-400
        drop-shadow-[0_0_10px_#00ffcc] 
        -translate-x-1/2 -translate-y-1/2"
      ></div>

      {/* Tail Glow */}
      <div
        className="cursor-tail fixed top-0 left-0 w-3 h-3 rounded-full pointer-events-none z-[9998]
        bg-cyan-400 opacity-50 blur-md
        -translate-x-1/2 -translate-y-1/2"
      ></div>
    </>
  );
}
