import React, { useEffect, useRef } from "react";

interface CanvasOverlayProps {
  linePercentage: number;
}

const CanvasOverlay: React.FC<CanvasOverlayProps> = ({ linePercentage }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const drawLines = () => {
      const { innerWidth: width, innerHeight: height } = window;

      canvas.width = width;
      canvas.height = height;

      // Clear previous drawings
      ctx.clearRect(0, 0, width, height);

      // Calculate line spacing based on the provided percentage
      const lineSpacing = (linePercentage / 100) * height;

      ctx.strokeStyle = "red"; // Change color as needed
      ctx.lineWidth = 1;

      for (let y = lineSpacing; y < height; y += lineSpacing) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }
    };

    // Initial drawing and on resize
    drawLines();
    window.addEventListener("resize", drawLines);

    return () => {
      window.removeEventListener("resize", drawLines);
    };
  }, [linePercentage]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: `${window.innerWidth}px`,
        height: `${window.innerHeight}px`,
        pointerEvents: "none", // Prevent interaction
      }}
    />
  );
};

export default CanvasOverlay;
