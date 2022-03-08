
/*N1 E1 OK MED
Donats els objectes employees i salaries, crea una arrow function getEmployee que retorni una Promise
 efectuant la cerca en l'objecte pel seu id. Crea una altra arrow function getSalary que rebi com a 
 paràmetre un objecte employee i retorni el seu salari.*/

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

let getEmployee = (id) => {
    return new Promise((resolved, rejected) => {
      let treballador = employees.findIndex((employee) => employee.id === id);
      if (treballador) {
        resolved(employees[id]);
      } else {
        rejected("Error, no hi ha cap dada de cap treballador");
      }
    });
  };
  
  id= 2;
  
  getEmployee(id)
    .then((resolved) => {
      console.log(resolved);
    })
    .catch((error) => {
      console.error(error);
    });
  
  
getSalary = employee => {
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
    })
};

employee = new Object();
employee.id = 1;
getSalary(employee).then(salary => console.log("n1e1 - L'Empleat te un salari de: " + salary))
    .catch(id => console.error("n1e1 - Empleat no trobat"));



/* N1 E2  OK MAX
Crea una funció asíncrona que rebi un id d'empleat i imprimeixi per pantalla el nom de l'empleat i el seu 
salari, usant les funcions que has definit a l'exercici anterior */

let asyncEmployee = async (id) => {
    let employee = await getEmployee(id)
    let salary = await getSalary(employee)
    console.log(`L'Empleat ${employee.id} amb salari ${salary.id}`)
}

asyncEmployee(1);



/* N2 E1 OK MAX
Crea una nova funció asíncrona que cridi a una altra que retorni una Promise que efectuï la seva funció
 resolve() després de 2 segons de la seva invocació */

asyncFunction2 = () => {
    return new Promise(resolve => {
        setTimeout(() => resolve("2 seconds later..."), 2000)
    })
}

async function asyncFunction2() {
    console.log(await asyncFunction2());
}

asyncFunction2();

/*N3 E1
Captura tots els errors possibles dels nivells 1 i 2 */
