
/* N1 Ex1 no
Crea una funció que imprimeixi recursivament un missatge per la consola amb demores d'un segon.
- T'has fet una mica de lio amb l'execucio del N1 E1, no sé per què l'executes amb un setTimeout(). 
A més tot es diu missatge: la funcio, els paràmetres, un callback que no funciona..*/

let missatge = () => {
  setInterval(() => {
    console.log("Hola");
  }, 1000);
};
missatge();









/* N1 Ex2 
Crea una funció que, en executar-la, escrigui una frase en un fitxer.

//Ejercicio 2
const message = "Hello, I come from another World!";

const writeMessageInAnotherFile = async () => {
  try {
    await fsp.writeFile("someText.txt", message);
    console.log("Nivel 1, ejercicio 2:");
    console.log("File created");
  } catch (err) {
    console.error(err);
  }
};
writeMessageInAnotherFile();
var fs = require('fs');

function fraseFitxer(missatge) {

    fs.writeFile('fitxerN1Ex2.txt', `Aquest es el ${missatge}`, function (err) { });
}

fraseFitxer("missatge de Nadal");


/* N1 Ex3 ok
Crea una altra funció que mostri per consola el contingut del fitxer de l'exercici anterior.

function contFitxer(fitxer) {

    fs.readFile(fitxer, 'utf8', function (err, data) {
        console.log(data);
    });
}

contFitxer('fitxerN1Ex2.txt');
//Ejercicio 3
const showMessageFromAnotherFile = async () => {
    try {
      const data = await fsp.readFile("./someText.txt", "utf-8");
      console.log("Nivel 1, ejercicio 3:");
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };
  
  showMessageFromAnotherFile();

 N2 Ex1 no
Crea una funció que comprimeixi el fitxer del nivell 1.

//Nivel 2
console.log("Nivel 2:");

const compFile = () => {
  fs.createReadStream("someText.txt")
    .pipe(zlib.createGzip())
    .pipe(fs.createWriteStream("someText.txt.gz"));
  console.log("File Compressed.");
};

compFile();

const showFilesFromDir = () => {
  fs.readdir("/users", (err, files) => {
    files.forEach((file) => {
      console.log(file);
    });
  });
};

showFilesFromDir();




var zlib = require('zlib');
var fs = require('fs');

function compFitxer(fitxer, fitxerComp) {

    const llegir = fs.createReadStream(fitxer);
    const escriure = fs.createWriteStream(fitxerComp);
    const gzip = zlib.createGzip();
    llegir.pipe(gzip).pipe(escriure);
}

compFitxer('fitxerN1Ex2.txt', 'fitxerN1Ex2.txt.zip');*/

/* N2 Ex2 no

Crea una funció que llisti per la consola el contingut del directori d'usuari de l'ordinador
utilizant Node Child Processes.
 - La segona part del N2 ha de mostrar la carpeta de l'usuari (de windows o el que sigui), 
 no la carpeta on esta l'script!*/
