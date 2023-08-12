import { MalwareAnalysis } from "./MalwareAnalysis";

const records: number[] = [19, 2, 0, 87, 1, 40, 80, 77, 77, 77, 77];
const ml = new MalwareAnalysis();
console.log(ml.simulate(records));