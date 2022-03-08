let getEmployee2 = id => {
    return new Promise((resolve, reject) => {
        let findEmployee = employees.find(employee => employee.id === id)
        if (findEmployee) {
            resolve(findEmployee.name);
        } else {
            reject(`El ID ${id} no es valido, tiene que ser entre 1 y 3`);
        }
    })
}

let getSalary2 = (id) => {
    return new Promise((resolve, reject) => {
        let findSalary = salaries.find(salario => salario.id === id);
        if (findSalary) {
            resolve(findSalary.salary);
        } else {
            reject('The ID doesn`t exit!');
        }
    });
};


// N2 E3: Invoca la primera funció getEmployee i després getSalary niant l'execució de les dues promises.

// TODO Invocar la funció getEmployee i després getSalari [x]
// TODO Niar les dues promeses [x]

let id = 1
getEmployee2(id).then(name => {
    console.log(name)
    return getSalary2(id)
}).then(salary => {
    console.log(salary)
});

module.exports = {
    getEmployee2,
    getSalary2
}