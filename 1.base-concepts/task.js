'use strict';

function solveEquation(a, b, c) {
  if (a === 0) {
    return "Коэффициент 'a' не может быть равен нулю для квадратного уравнения.";
  }

  let discriminant = b ** 2 - 4 * a * c;

  let roots = [];

  if (discriminant < 0) {
    return roots;
  } else if (discriminant === 0) {
    let root = -b / (2 * a);
    roots.push(root);
  } else {
    let sqrtDiscriminant = Math.sqrt(discriminant);
    let root1 = (-b + sqrtDiscriminant) / (2 * a);
    let root2 = (-b - sqrtDiscriminant) / (2 * a);
    roots.push(root1, root2);
  }

  return roots;
}

console.log(solveEquation(1, -3, 2));
console.log(solveEquation(1, 2, 1));
console.log(solveEquation(2, 2, 2));

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let creditBody = amount - contribution;
  if (creditBody <= 0) {
    return 0;
  }

  let monthlyRate = percent / 100 / 12;

  let payment =
    creditBody *
    (monthlyRate + monthlyRate / (Math.pow(1 + monthlyRate, countMonths) - 1));

  let totalPayment = payment * countMonths + contribution;

  return parseFloat(totalPayment.toFixed(2));
}

console.log(calculateTotalMortgage(10, 0, 50000, 12));
console.log(calculateTotalMortgage(10, 1000, 50000, 12));
console.log(calculateTotalMortgage(10, 0, 20000, 24));
console.log(calculateTotalMortgage(10, 1000, 20000, 24));
console.log(calculateTotalMortgage(10, 20000, 20000, 24));
console.log(calculateTotalMortgage(10, 0, 10000, 36));
console.log(calculateTotalMortgage(15, 0, 10000, 36));
