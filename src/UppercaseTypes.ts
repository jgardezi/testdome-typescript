export class UpperCaseTypes {
  testUpperCases(): void {
    let stringType: string = "string upper case";
    console.log(stringType.toUpperCase());

    let anyType: any = "any upper case";
    // console.log(anyType.toUpper());
    console.log(anyType.toUpperCase());

    let objectType: Object = "object uppper case";
    // console.log(objectType.toUpperCase());
  }
}