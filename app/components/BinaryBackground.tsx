import { useEffect, useRef } from "react";

export default function BinaryBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const cellSize = 30;

    let cols = 0;
    let rows = 0;
    let grid: string[][] = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      cols = Math.ceil(canvas.width / cellSize);
      rows = Math.ceil(canvas.height / cellSize);

      // rebuild grid on resize
      grid = Array.from({ length: cols }, () =>
        Array.from({ length: rows }, () => (Math.random() > 0.5 ? "1" : "0"))
      );
    };

    const draw = () => {
      ctx.fillStyle = "#000";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "#00ff88";
      ctx.font = "16px monospace";

      for (let x = 0; x < cols; x++) {
        for (let y = 0; y < rows; y++) {
          ctx.fillText(grid[x][y], x * cellSize, y * cellSize);
        }
      }
    };

    const updateGrid = () => {
      for (let x = 0; x < cols; x++) {
        const newBit = Math.random() > 0.5 ? "1" : "0";
        grid[x].unshift(newBit);
        grid[x].pop();
      }
    };

    let lastTime = 0;
    const speed = 120; // lower = faster rain

    const animate = (time: number) => {
      if (time - lastTime > speed) {
        updateGrid();
        draw();
        lastTime = time;
      }

      requestAnimationFrame(animate);
    };

    const handleResize = () => {
      resizeCanvas();
    };

    resizeCanvas();
    draw();
    requestAnimationFrame(animate);

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <canvas className="fixed inset-0 z-0" ref={canvasRef} />;
}
