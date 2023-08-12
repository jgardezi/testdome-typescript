class Positionable {
  locationX: number = 0;
  locationY: number = 0;

  moveTo(toX: number, toY: number) {
    this.locationX = toX;
    this.locationY = toY;
  }
}

class Rotatble {
  orientation: number = 0;

  rotate(orientation: number) {
    this.orientation += orientation;
  }
}

