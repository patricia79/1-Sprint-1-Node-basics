/* N1 E1 Crea una funció que retorni una Promise que invoqui la funció resolve() o reject() que rep. 
Invoca-la passant-li les dues funcions de manera que imprimeixin un missatge diferent depenent de
 si la Promise es resol o no.*/

function numeroMayorMenor5() {
  return new Promise((resolve, reject) => {
    const numero = Math.floor(Math.random() * 10);
    console.log(numero);
    if (numero > 5) {
      resolve("És més gran que 5.");
    } else {
      reject("És menor que 5.");
    }
  });
}
numeroMayorMenor5()
  .then((resolve) => console.log(resolve))
  .catch((reject) => console.error(reject));

  numeroMayorMenor5();

/* N1 E2 Crea una arrow function "nombre_cub" que rebi un paràmetre "nombre" i una funció callback 
"imprimir_resultat"; i  "nombre_cub" passi a la funció  "imprimir_resultat" dos missatges diferents
(que s'imprimirà per consola) en funció del paràmetre rebut "nombre".*/

let imprimir_resultat = function imprimir() {
  console.log();
};

nombre_cub = (nombre, callback) => {
  resultat = Math.pow(nombre, 3);

  callback(`El cub és: ${resultat}`);
};

nombre_cub(4, imprimir_resultat);

/* N2 E1 Donats els objectes employees i salaries, crea una arrow function getEmployee que retorni 
una Promise efectuant la cerca en l'objecte "employees" pel seu id */

let employees = [
  {
    id: 1,
    name: "Linux Torvalds",
  },
  {
    id: 2,
    name: "Bill Gates",
  },
  {
    id: 3,
    name: "Jeff Bezos",
  },
];

let salaries = [
  {
    id: 1,
    salary: 4000,
  },
  {
    id: 2,
    salary: 1000,
  },
  {
    id: 3,
    salary: 2000,
  },
];

let employee = new Object();
// index_treballador[posició array]

let getEmployee = id => {

  return new Promise((resolve, rejecte) => {

    let index_treballador = employees.findIndex((employee) => employee.id === id);

    if (index_treballador >= 0) {resolve(employees[index_treballador]);} 
    
    else {
      rejecte("Error, no hi ha cap dada de cap treballador");
    }
  });
};

getEmployee(1)
  .then((resolve) => {
    console.log(resolve);
  })
  .catch((error) => {
    console.error(error);
  });

/*N2 E2 Crea una altra arrow function getSalary que rebi com a paràmetre un objecte employee i retorni el
seu salari. */

let getSalary = (employee) => {

  return new Promise((resolve, rejecte) => {
    
     let index = 0;

    for (index; index < salaries.length; index++) {

      if (salaries[index].id == employee.id) {

        resolve(salaries[index].salary);
        break;
      }

      if (index >= salaries.length) {

        rejecte("Empleat no trobat");
      }
    }
  });
};

let employee1 = new Object();

employee1.id = 3;

getSalary(employee1)

  .then((salary) => console.log("L'Empleat te un salari de: " + salary))

  .catch((rejecte) => console.error(rejecte));

/* N2 E3 Invoca la primera funció getEmployee i després getSalary niant l'execució de les dues promises.*/

getEmployee(1)
  .then((resolve) => {
    console.log("n2e3:");
    return getSalary(resolve);
  })
  .then((resolve) => console.log(resolve))
  .catch((rejecte) => console.log(rejecte));

/*N3 E1 Fixa un element catch a la invocació del nivell anterior que capturi qualsevol error i el
mostri per  la consola. */

getEmployee(5)
  .then((id) => getSalary(id))
  .then((salary) => console.log("n3e1 - El seu salari es: " + salary))
  .catch((id) => console.error("n3e1 " + id + " no trobat"));

  