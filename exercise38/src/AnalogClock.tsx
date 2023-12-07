import React, { useEffect, useRef } from "react";
import { Vector } from "./Vector";

const AnalogClock: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const drawClockFace = (
    ctx: CanvasRenderingContext2D,
    center: { x: number; y: number },
    radius: number
  ) => {
    // Border
    ctx.lineWidth = 5;
    ctx.strokeStyle = "black";
    ctx.beginPath();
    ctx.arc(center.x, center.y, radius, 0, Math.PI * 2);
    ctx.stroke();

    // Dashes and numbers
    for (let i = 0; i < 60; i++) {
      let r = radius - 5;
      let l = 5;
      ctx.strokeStyle = "rgba(0, 0, 0, 0.25)";
      if (i % 5 === 0) {
        r -= l;
        l *= 2;
        ctx.strokeStyle = "rgba(0, 0, 0, 0.5)";

        // Numbers
        ctx.font = "18px Noto Sans";
        ctx.fillStyle = "black";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        let num = i / 5 || 12;
        let v = new Vector(r - 15, Math.PI * 2 * (num / 12) - Math.PI / 2);
        ctx.fillText(num.toString(), v.getX() + center.x, v.getY() + center.y);
      }
      let v = new Vector(r, Math.PI * 2 * (i / 60) - Math.PI / 2);
      ctx.beginPath();
      ctx.moveTo(v.getX() + center.x, v.getY() + center.y);
      v.setMag(r + l);
      ctx.lineTo(v.getX() + center.x, v.getY() + center.y);
      ctx.stroke();
    }

    // Center button
    ctx.beginPath();
    ctx.arc(center.x, center.y, 3.75, 0, Math.PI * 2);
    ctx.fillStyle = "white";
    ctx.strokeStyle = "black";
    ctx.lineWidth = 2.5;
    ctx.fill();
    ctx.stroke();
  };

  const drawHand = (
    ctx: CanvasRenderingContext2D,
    center: { x: number; y: number },
    length: number,
    width: number,
    angle: number
  ) => {
    ctx.lineWidth = width;
    ctx.strokeStyle = "black";
    ctx.beginPath();
    let v = new Vector(length, angle);
    ctx.moveTo(center.x, center.y);
    ctx.lineTo(v.getX() + center.x, v.getY() + center.y);
    ctx.stroke();
  };

  const draw = (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) => {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const center = { x: canvas.width / 2, y: canvas.height / 2 };
    const radius = 140;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    drawClockFace(ctx, center, radius);

    // Hour Hand
    let hourAngle =
      Math.PI * 2 * ((hours % 12) / 12 + minutes / 720) - Math.PI / 2;
    drawHand(ctx, center, radius * 0.5, 4, hourAngle);

    // Minute Hand
    let minuteAngle = Math.PI * 2 * (minutes / 60) - Math.PI / 2;
    drawHand(ctx, center, radius * 0.8, 4, minuteAngle);

    // Second Hand
    let secondAngle = Math.PI * 2 * (seconds / 60) - Math.PI / 2;
    drawHand(ctx, center, radius * 0.9, 1.5, secondAngle);
  };

  useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      canvas.width = 300;
      canvas.height = 300;
      const ctx = canvas.getContext("2d");
      if (ctx) {
        setInterval(() => draw(ctx, canvas), 1000);
      }
    }
  }, []);

  return <canvas ref={canvasRef} />;
};

export default AnalogClock;
