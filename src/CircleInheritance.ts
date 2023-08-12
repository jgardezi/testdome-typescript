class GameObject {
  constructor(public x: number, public y: number) {}
}

export class Circle extends GameObject {
  public radius: number;

  constructor(public x: number, public y: number, radius: number) {
    super(x, y);
    this.radius = radius;
  }
}