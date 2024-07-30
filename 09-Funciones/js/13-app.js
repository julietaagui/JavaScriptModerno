
const reproductor = {
    reproducir: (id) => console.log(`Reproduciendo cancion con el id ${id}`),
    pausar:() => console.log('pausando...'),
    borrar: (id) => console.log('borrando cancion... ${id}'),
    crearPlyList:(nombre) => console.log(`Creando la plyList de ${nombre}`),
    reproducirPlayList: (nombre) => console.log(`Reproduciendo la play list ${nombre}`)
}

reproductor.reproducir(30);
reproductor.pausar();


reproductor.borrar(3);