
/*
    ===== Código de TypeScript =====
*/


// cuando se habla de genricos es cuando los datos pueden cambiar
// <T> ( argumento: T)
function queTipoSoy<T>( argumento: T ){
    return argumento;
}

let soyString = queTipoSoy('Hola Mundo');
let soyNumero = queTipoSoy(100);
let soyBooleano = queTipoSoy(true);
let soyArreglo = queTipoSoy([1,2,3,4,5,6,7,8,9,10]);

let soyExplicito = queTipoSoy<number>( 100 );




