
/*N1 E1 
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

getEmployee = id => {
    return new Promise((resolve, reject) => {
        let i = employees.findIndex(employee => employee.id === id)
        if (i < 0) {
            reject(id)
                ;
        } else {
            resolve(id)

        }
    })
};
let employee = new Object();
employee.id = 3;
getEmployee(employee.id).then(id => console.log("n1e1 - Trobat"))
    .catch(id => console.error("n1e1 - No trobat"));

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



/* N1 E2 
Crea una funció asíncrona que rebi un id d'empleat i imprimeixi per pantalla el nom de l'empleat i el seu 
salari, usant les funcions que has definit a l'exercici anterior */

async function asyncEmployee(id) {
    employeeId = await getEmployee(id);
    salaryId = await getSalary(employeeId);
    console.log(`Empleat ${employees[employeeId].name} amb salari ${salaries[salaryId].salary}`);
}

asyncEmployee(1);


/* N2 E1 
Crea una nova funció asíncrona que cridi a una altra que retorni una Promise que efectuï la seva funció
 resolve() després de 2 segons de la seva invocació */

asyncFunction2 = () => {
    return new Promise(resolve => {
        setTimeout(() => resolve('2 seconds later...'), 2000)
    })
}

async function asyncFunction2() {
    console.log(await asyncFunction2());
}

asyncFunction2();

/*N3 E1
Captura tots els errors possibles dels nivells 1 i 2 */
