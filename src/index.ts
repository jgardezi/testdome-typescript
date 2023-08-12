import { Circle } from "./CircleInheritance";
import { MalwareAnalysis } from "./MalwareAnalysis";
import { PermissionEnum, Permission } from "./PermissionEnum";
import { UpperCaseTypes } from "./UppercaseTypes";


// const uppercase = new UpperCaseTypes;
// uppercase.testUpperCases();

// const records: number[] = [19, 2, 0, 87, 1, 40, 80, 77, 77, 77, 77];
// const ml = new MalwareAnalysis();
// console.log(ml.simulate(records));


// const pe = new PermissionEnum;
// console.log(pe.getPermissionList(Permission.Read | Permission.Execute));

const ci = new Circle(10, 50, 8);
console.log(ci.x, ci.y, ci.radius);
