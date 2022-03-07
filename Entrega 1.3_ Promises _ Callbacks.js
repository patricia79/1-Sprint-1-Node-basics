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

/* N1 E2 Crea una arrow function que rebi un paràmetre i una funció callback i li passi a la funció 
un missatge o un altre (que s'imprimirà per consola) en funció del paràmetre rebut.*/

let imprimir_resultat = function imprimir(missatge) {
  console.log(missatge);
};

let nombre_cub = (nombre, callback) => {
  resultat = Math.pow(nombre, 3);

  callback(`El cub és: ${resultat}`);
};

nombre_cub(4, imprimir_resultat);

/* N2 E1 Donats els objectes employees i salaries, crea una arrow function getEmployee que retorni 
una Promise efectuant la cerca en l'objecte pel seu id 

let employees = [{
    id: 1,
    name: 'Linux Torvalds'
}, {
    id: 2,
    name: 'Bill Gates'
}, {
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

getEmployee = (id) => {
  return new Promise((resolve, reject) => {
    let i = employees.findIndex((employee) => employee.id === id);
    if (i < 0) {
      reject(id);
    } else {
      resolve(id);
    }
  });
};
let employee = new Object();
employee.id = 3;
getEmployee(employee.id)
  .then((id) => console.log("n2e1 - Trobat"))
  .catch((id) => console.error("n2e1 - No trobat"));

/*N2 E2 Crea una altra arrow function getSalary que rebi com a paràmetre un objecte employee i retorni el
seu salari.*/

getSalary = (employee) => {
  return new Promise((resolve, reject) => {
    let i = 0;
    for (i; i < salaries.length; i++) {
      if (salaries[i].id == employee.id) {
        resolve(salaries[i].salary);
        break;
      }
    }
    if (i >= salaries.length) {
      reject(employee.id);
    }
  });
};

employee = new Object();
employee.id = 1;
getSalary(employee)
  .then((salary) => console.log("n2e2 - L'Empleat te un salary de: " + salary))
  .catch((id) => console.error("n2e2 - Empleat no trobat"));

/* N2 E3 Invoca la primera funció getEmployee i després getSalary niant l'execució de les dues promises.*/

getSalary2 = (id) => {
  return new Promise((resolve, reject) => {
    let i = 0;
    for (i; i < salaries.length; i++) {
      if (salaries[i].id == id) {
        resolve(salaries[i].salary);
        break;
      }
    }
    if (i >= salaries.length) {
      reject(id);
    }
  });
};

getEmployee(2)
  .then((id) => getSalary2(id))
  .then((salary) => console.log("n2e3 - El seu salary es: " + salary))
  .catch((id) => console.error("n2e3 - No trobat"));

/*N3 E1 Fixa un element catch a la invocació del nivell anterior que capturi qualsevol error i el
mostri per  la consola.*/

getEmployee(5)
  .then((id) => getSalary2(id))
  .then((salary) => console.log("n3e1 - El seu salary es: " + salary))
  .catch((id) => console.error("n3e1 - id: " + id + " no trobat"));
