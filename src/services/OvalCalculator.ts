import { Oval } from '../entities/Oval';

export class OvalCalculator {
  constructor(private oval: Oval) {}

  private hasValid2DCoordinates(): boolean {
    return (
      this.oval?.topLeft?.getDimension?.() >= 2 &&
      this.oval?.bottomRight?.getDimension?.() >= 2
    );
  }

  getArea(): number {
    if (!this.hasValid2DCoordinates()) return NaN;

    const a = Math.abs(this.oval.bottomRight.getCoordinate(0) - this.oval.topLeft.getCoordinate(0)) / 2;
    const b = Math.abs(this.oval.bottomRight.getCoordinate(1) - this.oval.topLeft.getCoordinate(1)) / 2;
    return Math.PI * a * b;
  }

  getPerimeter(): number {
    if (!this.hasValid2DCoordinates()) return NaN;

    const a = Math.abs(this.oval.bottomRight.getCoordinate(0) - this.oval.topLeft.getCoordinate(0)) / 2;
    const b = Math.abs(this.oval.bottomRight.getCoordinate(1) - this.oval.topLeft.getCoordinate(1)) / 2;
    return Math.PI * (3 * (a + b) - Math.sqrt((3 * a + b) * (a + 3 * b)));
  }

  isCircle(): boolean {
    if (!this.hasValid2DCoordinates()) return false;

    const dx = Math.abs(this.oval.bottomRight.getCoordinate(0) - this.oval.topLeft.getCoordinate(0));
    const dy = Math.abs(this.oval.bottomRight.getCoordinate(1) - this.oval.topLeft.getCoordinate(1));
    return dx === dy;
  }

  getVolume(): number {
    return 0;
  }

  intersectsOneAxisOnly(distance: number): boolean {
    if (!this.hasValid2DCoordinates()) return false;

    const x1 = this.oval.topLeft.getCoordinate(0);
    const y1 = this.oval.topLeft.getCoordinate(1);
    const x2 = this.oval.bottomRight.getCoordinate(0);
    const y2 = this.oval.bottomRight.getCoordinate(1);

    const crossesX = (y1 < distance && y2 > distance) || (y2 < distance && y1 > distance);
    const crossesY = (x1 < distance && x2 > distance) || (x2 < distance && x1 > distance);

    return crossesX !== crossesY;
  }
}
