
let getEmployee = id => {
    return new Promise((resolve, reject) => {
        let findEmployee = employees.find(employee => employee.id === id)
        if (findEmployee) {
            resolve(findEmployee.name);
        } else {
            reject(`The ID ${id} doesn't value, you need put a numbrer from 1 to 3`);
        }
    })
}

getEmployee(2)
    .then(resolve => console.log(resolve))
    .catch(err => console.log(err))

let getSalary = (id) => {
    return new Promise((resolve, reject) => {
        let findSalary = salaries.find(salario => salario.id === id);
        if (findSalary) {
            resolve(findSalary.salary);
        } else {
            reject('The ID doesn`t exit!');
        }
    });
};

getSalary(2)
    .then(good => console.log(good))
    .catch(err => console.log(err));


module.exports = {
    getEmployee,
    getSalary
};