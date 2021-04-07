
/*
    ===== Código de TypeScript =====
*/

class PersonaNormal {
    
    constructor(
        public nombre: string,
        public direccion: string
    ){}
}



// Las clases me  sirven para crear instancias
class Heroe extends PersonaNormal{
    // private visible solo entro de la clase
    // public significa que alguien afuera de la clase va apoder ver esta propiedad
    // private y public necesitan una instancia para acceder a ellas, en cambio static es global 
    // static significa que voy a poder acceder al valor de esta propiedad, sin crear una instancia de la clase
    
    // alterEgo: string;
    // edad: number;
    // nombreReal: number;

    // funcion que se llama cuando creo una instancia de mi clase
    constructor( 
        public alterEgo: string,
        // el signo de interrogacion ?: significa que es opcional
        public edad: number,
        public nombreReal: string
        ){
            // Hago el llamado al super();
            super( nombreReal, 'New York, USA' );
        }

    
}

// esto es una instancia, cuando hago () esos parentesis son los del constructor
const ironman = new Heroe('Ironman', 45, 'Tony');
console.log(ironman);

