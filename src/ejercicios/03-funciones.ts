/*
    ===== Código de TypeScript =====
*/

const cancatenearLetras = ( a: string, b: string ) => {
    return a + b
}

const sumarFlechaImplicito = ( a: number, b: number ): number => {
    return a + b
}

function multiplicar( numero: number, otroNumero?:number, base: number = 2): number {
    return numero * base;
}

const resultado  = cancatenearLetras( 'Jesus ', 'Fonseca' );
const resultado2 = sumarFlechaImplicito( 5, 6 );
const resultado3 = multiplicar( 5, 0, 10);

console.log(resultado);
console.log(resultado2);
console.log(resultado3);

// Las interfaces so como clases tontas
interface PersonajeLOR{
    nombre: string,
    pv: number,
    mostrarHp: () => void;//aqui le digo que es una funcion y de tipo void, puede ser number, boolean etc...
}

const curar = ( personaje: PersonajeLOR, curarX: number ):void => {
    personaje.pv += curarX;
    // console.log(personaje);
}

const nuevoPersonaje: PersonajeLOR = {
    nombre: 'Joker',
    pv: 5000,
    mostrarHp() {
        console.log( 'Puntos de vida: ', this.pv );
    }
}

curar( nuevoPersonaje, 500 );

nuevoPersonaje.mostrarHp();