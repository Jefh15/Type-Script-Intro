/*
    ===== Código de TypeScript =====
*/

interface Reproductor {
    volumen: number;
    segundo: number;
    cancion: string;
    detalles: Detalles
}

interface Detalles {
    autor: string;
    anio: number;
}

const reproductor: Reproductor = {
    volumen: 90,
    segundo: 36,
    cancion: 'Mess',
    detalles: {
        autor: 'Jefh king',
        anio: 1998
    }
}

// A ESTO SE LE CONONCE COMO 
// ""Desestructuracion"" -> que es tomar las variables y 
// pasarlas como constantes cuando son son en un objeto
const { volumen, segundo, cancion } = reproductor;
const { autor, anio } = reproductor.detalles;

// console.log( 'El volumen actual es de: ', volumen );
// console.log( 'El segundo actual es de: ', segundo );
// console.log( 'La cancion actual es: ', cancion );
// console.log( 'El autor actual es: ', autor );
// console.log( 'El anio es: ', anio );








// Este es un arreglo de Strings
const dbz: string[] = ['Goku', 'Vegeta', 'Trunks'];

// desestructuro mi arreglo de objetos
const [ , , p5  ] = dbz;  

// console.log('Personaje 1: ', p3 );
// console.log('Personaje 2: ', p4 );
console.log('Personaje 3: ', p5 );






