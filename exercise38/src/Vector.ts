export class Vector {
  private magnitude: number;
  private angle: number;

  constructor(magnitude: number, angle: number) {
    this.magnitude = magnitude;
    this.angle = angle;
  }

  getX = (): number => {
    return this.magnitude * Math.cos(this.angle);
  };

  getY = (): number => {
    return this.magnitude * Math.sin(this.angle);
  };

  setMag = (magnitude: number): void => {
    this.magnitude = magnitude;
  };
}
