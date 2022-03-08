const mostrarAls2Secs = () => {
    const promesa = new Promise((resolve) => {
        setTimeout(() => {
            resolve('Aquest missatge s`ha de mostrar als 2 segons');
        }, 2000);
    });
    return promesa;
};

const cridarFuncio = async () => {
    try {
        const mostrar = await mostrarAls2Secs();
    } catch (err) {
        console.log(err);
    }
};

cridarFuncio();

module.exports = {
    mostrarAls2Secs,
    cridarFuncio
}