"use strict";


function solveEquation(a, b, c) {
    let arr = [];

    let discriminant = b ** 2 - 4 * a * c;

    if (discriminant < 0) {
        return arr;
    } else if (discriminant === 0) {
        let root = -b / (2 * a);

        arr.push(root);
        return arr;
    } else if (discriminant > 0) {
        let root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        arr.push(root1);

        let root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        arr.push(root2);

        return arr;
    }

}

// Задание 2

function calculateTotalMortgage(percent, contribution, amount, countMonths) {

    let percentPerMonth = percent / 100 / 12;
    let creditBody = amount - contribution;
    let paymentPerMonth = creditBody * (percentPerMonth + (percentPerMonth / (((1 + percentPerMonth) ** countMonths) - 1)));
    let payment = Number((paymentPerMonth * countMonths).toFixed(2)); // это не учитывает первоначальный взнос, который тоже нужно оплатить!

    if (isNaN(payment)) {
        return false;
    }
    return payment;

}

console.log(calculateTotalMortgage('g10', 1000, 50000, 12)); // false