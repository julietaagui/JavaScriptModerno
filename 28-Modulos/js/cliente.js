

export const nombreCliente = 'Juli';
export const ahorro = 200;

export function mostrarInformacion(nombre, ahorro){
    return `cliente: ${nombre} - Ahorro: ${ahorro}`
}

export class Cliente {
    constructor(nombre, ahorro){
        this.nombre = nombre;
        this.ahorro = ahorro;
    }

    mostrarInformacion(){
        return `cliente: ${this.nombre} - Ahorro: ${this.ahorro}`
    }
}

export default function nuevaFuncion(){
    console.log('Este es el export default')
}