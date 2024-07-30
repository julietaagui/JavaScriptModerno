
const reproductor = {
    reproducir: function(id){
        console.log(`Reproduciendo cancion con el id ${id}`)
    },
    pausar: function(){
        console.log('pausando...')
    },
    borrar: function(id){
        console.log('borrando cancion... ${id}')
    },
    crearPlyList: function(nombre){
        console.log(`Creando la plyList de ${nombre}`)
    },
    reproducirPlayList: function(nombre){
        console.log(`Reproduciendo la play list ${nombre}`)
    }
}

reproductor.reproducir(30);
reproductor.pausar();


reproductor.borrar(3);