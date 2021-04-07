
/*
    ===== Código de TypeScript =====
*/

interface Pasajero {
    nombre: string;
    // propiedad opcional
    hijos?: string[];
}

const pasajero1: Pasajero = {
    nombre: 'Fernando'
}

const pasajero2: Pasajero = {
    nombre: 'Jesus',
    hijos: ['Natalia', 'Gabriel']
}

function imprimeHijos( pasajero: Pasajero): void {

    // Encadenamiento opcional
    // para que intente evaluar los hijos ? || si no existen pon 0
    const cuantosHijos = pasajero.hijos?.length || 0;

    console.log( cuantosHijos );
}

imprimeHijos( pasajero1 );
imprimeHijos( pasajero2 );