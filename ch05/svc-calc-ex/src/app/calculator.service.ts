export class CalculatorService {
  add(a, b) {
    console.log(`Param: ${a}, ${b}`);
    const result = a + b;
    console.log(`Result: ${result}`);
    return result;
  }

  sub(a, b) {
    return a - b;
  }

  mul(a, b) {
    return a * b;
  }

  div(a, b) {
    return a / b;
  }
}
