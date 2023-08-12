import { MalwareAnalysis } from "./MalwareAnalysis";
import { UpperCaseTypes } from "./UppercaseTypes";


const uppercase = new UpperCaseTypes;
uppercase.testUpperCases();

const records: number[] = [19, 2, 0, 87, 1, 40, 80, 77, 77, 77, 77];
const ml = new MalwareAnalysis();
console.log(ml.simulate(records));

