

/* Crea els tests corresponents per verificar el fto de l'exercici Async / Await Nivell 1 - Exercici 1
Nivell 1
- Exercici 1
Donats els objectes employees i salaries, crea una arrow function getEmployee que retorni una Promise 
efectuant la cerca en l'objecte pel seu id. Crea una altra arrow function getSalary que rebi com a paràmetre 
un objecte employee i retorni el seu salari.

let employees = [{
    id: 1,
    name: 'Linux Torvalds'
}, {
    id: 2,
    name: 'Bill Gates'
},{
    id: 3,
    name: 'Jeff Bezos'
}];
 
let salaries = [{
    id: 1,
    salary: 4000
}, {
    id: 2,
    salary: 1000
}, {
    id: 3,
    salary: 2000
}];

*/

const { it, expect } = require("@jest/globals");
const Calculadora = require('../app/codi operacions');

describe("Calcula la suma de dos o mes operands", () => {
    const calculadora = new Calculadora();
    it('5 mes -3 es igual a 2', () => {
        const resultat = calculadora.calcularSuma(5,-3 );
        expect(resultat).toBe(2);
    });
});
