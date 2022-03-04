
/* Nivell 1 Exercici 1 
Mostra per la consola el resultat d'una arrow function autoinvocable que sumi dos nombres.*/

console.log(((a, b) => a + b)(1, 2));

/* Nivell 2 Exercici 1 
Crea una arrow function que, rebent un paràmetre, retorni un objecte amb un atribut que tingui com a
 valor el paràmetre rebut.*/

var func2 = y => {
    var myObj = { atrib1: y };
    return myObj;
}

func2("Hola");


/* Nivell 2 Exercici 2 
Crea una classe Persona que rebi un paràmetre 'nom' al ser instanciada. 
La classe inclourà un mètode dirNom que imprimeixi per consola el paràmetre 'nom'. 
Invoca el mètode dirNom des de fora de la classe.*/

class Persona {

    constructor(nom) {
        this.nom = nom;
    }

    dirNom() {
        console.log(this.nom);
    }
}
var patricia = new Persona("Pol");
patricia.dirNom();




/*  Nivell 3 Exercici 1 
Escriu una function creadora d'objectes que faci instàncies d'una classe abstracta.
Invoca-la amb diferents definicions.*/

let perro = {
nombre:"Toby",
pelo:"duro",
edad:6,
ficha_completa:function () {
    return console.log(this.nombre), console.log(this.pelo), console.log(this.edad);
}
}
console.log(perro.ficha_completa());

// Escriu una function creadora d'objectes

function creacio_objecte()
{
    let gat = new Object();
    return console.log(gat.nom), console.log(gat.pel);
}
creacio_objecte ("Garfield", "curt");