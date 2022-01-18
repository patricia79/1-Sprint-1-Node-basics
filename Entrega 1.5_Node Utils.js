
/* N1 Ex1 no
Crea una funció que imprimeixi recursivament un missatge per la consola amb demores d'un segon.
- T'has fet una mica de lio amb l'execucio del N1 E1, no sé per què l'executes amb un setTimeout(). 
A més tot es diu missatge: la funcio, els paràmetres, un callback que no funciona..*/

function missatge(missatge) {

    console.log(`Aquest és el ${missatge}`);
    setTimeout(missatge, 1000, missatge);
}
setTimeout(missatge, 1000, "missatge de Nadal");



/* N1 Ex2 ok
Crea una funció que, en executar-la, escrigui una frase en un fitxer.*/

var fs = require('fs');

function fraseFitxer(missatge) {

    fs.writeFile('fitxerN1Ex2.txt', `Aquest es el ${missatge}`, function (err) { });
}

fraseFitxer("missatge de Nadal");


/* N1 Ex3 ok
Crea una altra funció que mostri per consola el contingut del fitxer de l'exercici anterior.*/

function contFitxer(fitxer) {

    fs.readFile(fitxer, 'utf8', function (err, data) {
        console.log(data);
    });
}

contFitxer('fitxerN1Ex2.txt');


/* N2 Ex1 no
Crea una funció que comprimeixi el fitxer del nivell 1.
*/

var zlib = require('zlib');
var fs = require('fs');

function compFitxer(fitxer, fitxerComp) {

    const llegir = fs.createReadStream(fitxer);
    const escriure = fs.createWriteStream(fitxerComp);
    const gzip = zlib.createGzip();
    llegir.pipe(gzip).pipe(escriure);
}

compFitxer('fitxerN1Ex2.txt', 'fitxerN1Ex2.txt.zip');

/* N2 Ex2 no

Crea una funció que llisti per la consola el contingut del directori d'usuari de l'ordinador
utilizant Node Child Processes.
 - La segona part del N2 ha de mostrar la carpeta de l'usuari (de windows o el que sigui), 
 no la carpeta on esta l'script!*/

function contDirect(comando) {

    const { exec } = require('child_process');

    exec(comando, (err, stdout, stderr) => {

        if (err) {

            console.error(err);

            return;
        }
        console.log(stdout);
    });
}

contDirect('dir');

/* N3 Ex1
Crea una funció que creï dos fitxers codificats en hexadecimal i en base64 respectivament, a partir del
fitxer del nivell 1
Crea una funció que guardi els fitxers del punt anterior, ara encriptats amb l'algorisme aes-192-cbc,
i esborri els fitxers inicials
Crea una altra funció que desencripti i descodifiqui els fitxers de l'apartat anterior tornant a
generar una còpia de l'inicial
Inclou un README amb instruccions per a l'execució de cada part*/