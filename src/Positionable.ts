// class Positionable {
//   locationX: number = 0;
//   locationY: number = 0;

//   moveTo(toX: number, toY: number) {
//     this.locationX = toX;
//     this.locationY = toY;
//   }
// }

// class Rotatble {
//   orientation: number = 0;

//   rotate(orientation: number) {
//     this.orientation += orientation;
//   }
// }

// class MovingObject {
//   locationX: number = 0;
//   locationY: number = 0;
//   orientation: number = 0;

//   printPosition() {
//     console.log(this.locationX, this.locationY);
//   }
// }

// function applyMixins(derivedCtor: any, baseCtors: any[]) {
//   baseCtors.forEach(baseCtor => {
//     Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
//       derivedCtor.prototype[name] = baseCtor.prototype[name];
//     });
//   });
// }

// applyMixins(MovingObject, [Positionable, Rotatble]);
// let mover = new MovingObject();
