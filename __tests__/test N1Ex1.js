
const { it, expect } = require("@jest/globals");
const Calculadora = require('../app/codi operacions');

describe("Calcula la suma de dos o mes operands", () => {
    const calculadora = new Calculadora();
    it('5 mes -3 es igual a 2', () => {
        const resultat = calculadora.calcularSuma(5,-3 );
        expect(resultat).toBe(2);
    });
});
