/*
    ===== Código de TypeScript =====
*/


// string | number
let habilidades: string[] = [ 'Bash', 'Counter', 'Healing' ];

// Es para asegurarnos de que el codigo sea como nosotros queramos
interface Personaje {
    nombre: string;
    hp: number;
    habilidades: string[];
    puebloNatal?: string;
}




const personaje: Personaje = {
    nombre: 'Joker',
    hp: 100,
    habilidades: [ 'Bash', 'Counter', 'Healing' ]
}


personaje.puebloNatal = 'Pueblo Paleta';

console.table( personaje );