//Crea un arxiu amb les funcions sumar, restar, multiplicar i dividir dos o més operands. 


class Calculadora {
    calcularSuma = (a, b) => {

        if (a !== "nombre" || b !== "nombre")
            return "no es poden fer les operacions sense nombres";

        return a + b;
    };

    calcularResta = (a, b) => {
        if (!a) return b;
        if (!b) return a;

        return a - b;
    };
    calcularMultiplicacio = (a, b) => {

        return a * b;
    };

    calcularDivisio = (a, b) => {
        if (b === 0) return "No es pot fer l'operació entre 0";
        return a / b;
    };
}

module.exports = Calculadora;

//Crea els tests corresponents per verificar el funcionament de l'exercici Async / Await Nivell 1 - Exercici 1

let employee = new Object();

let getEmployee = (id) => {
  return new Promise((resolved, rejected) => {
    let index_treballador = employees.findIndex(
      (employee) => employee.id === id
    );
    if (index_treballador >= 0) {
      resolved(employees[index_treballador]);
    } else {
      rejected("Error, no hi ha cap dada de cap treballador");
    }
  });
};

getEmployee(1)
  .then((resolved) => {
    console.log(resolved);
  })
  .catch((error) => {
    console.error(error);
  });

let getSalary = (employee) => {
  return new Promise((resolved, rejected) => {
    let index = 0;
    for (index; index < salaries.length; index++) {
      if (salaries[index].id == employee.id) {
        resolved(salaries[index].salary);
        break;
      }
      if (index >= salaries.length) {
        rejected("Empleat no trobat");
      }
    }
  });
};

let employee1 = new Object();
employee1.id = 3;
getSalary(employee1)
  .then((salary) => console.log("L'Empleat te un salari de: " + salary))
  .catch((rejected) => console.error(rejected));


//Crea els tests corresponents per verificar el funcionament de l'exercici Async / Await Nivell 2 - Exercici 1


asyncFunction2 = () => {
    return new Promise(resolve => {
        setTimeout(() => resolve("2 seconds later..."), 2000)
    })
}

async function asyncFunction2() {
    console.log(await asyncFunction2());
}

asyncFunction2();
//Crea els tests corresponents per verificar el funcionament de l'exercici Promises & Callbacks Nivell 2 - Exercici 3


getEmployee(1)
  .then((resolved) => {
    console.log("n2e3:");
    return getSalary(resolved);
  })
  .then((resolved) => console.log(resolved))
  .catch((rejected) => console.log(rejected));


//Verifica mitjançant tests l'execució de l'exercici Async / Await Nivell 2 Exercici 1 utilitzant Jest Fake Timers.


asyncFunction2 = () => {
    return new Promise(resolve => {
        setTimeout(() => resolve("2 seconds later..."), 2000)
    })
}

async function asyncFunction2() {
    console.log(await asyncFunction2());
}

asyncFunction2();