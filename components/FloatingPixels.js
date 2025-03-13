"use client"; // Ensure React hooks work in this file

import React, { useEffect, useRef } from "react";

const FloatingPixels = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const pixels = []; // Array to hold pixel objects
    const numPixels = 100; // Number of floating pixels
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight;

    canvas.width = canvasWidth;
    canvas.height = canvasHeight;

    // Helper function to generate random colors
    const getRandomColor = () => {
      const r = Math.floor(Math.random() * 256);
      const g = Math.floor(Math.random() * 256);
      const b = Math.floor(Math.random() * 256);
      return `rgb(${r}, ${g}, ${b})`;
    };

    // Initialize pixels
    for (let i = 0; i < numPixels; i++) {
      pixels.push({
        x: Math.random() * canvasWidth,
        y: Math.random() * canvasHeight,
        // Slower movement by reducing the range of dx and dy
        dx: Math.random() * 1 - 0.5, // Horizontal velocity (-0.5 to 0.5)
        dy: Math.random() * 1 - 0.5, // Vertical velocity (-0.5 to 0.5)
        size: Math.random() * 1 + 0.5, // Smaller pixel size (0.5 to 1.5)
        color: getRandomColor(), // Assign a random color to each pixel
      });
    }

    // Draw loop
    const draw = () => {
      // Set dark grey background
      ctx.fillStyle = "#141414"; // Dark grey background color
      ctx.fillRect(0, 0, canvasWidth, canvasHeight);
      pixels.forEach((pixel) => {
        ctx.beginPath();
        ctx.arc(pixel.x, pixel.y, pixel.size, 0, Math.PI * 2);
        ctx.fillStyle = pixel.color; // Use the pixel's random color
        ctx.fill();

        // Move pixel by the adjusted velocity
        pixel.x += pixel.dx;
        pixel.y += pixel.dy;

        // Bounce off edges
        if (pixel.x < 0 || pixel.x > canvasWidth) pixel.dx *= -1;
        if (pixel.y < 0 || pixel.y > canvasHeight) pixel.dy *= -1;
      });
      requestAnimationFrame(draw);
    };

    draw();

    // Cleanup on unmount
    return () => {
      cancelAnimationFrame(draw);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1, // To keep it behind the content
      }}
    />
  );
};

export default FloatingPixels;
