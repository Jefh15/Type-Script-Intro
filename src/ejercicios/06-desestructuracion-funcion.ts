/*
    ===== Código de TypeScript =====
*/

export interface Producto {
    desc: string;
    precio: number;
}

const telefono: Producto = {
    desc: 'Nokia A1',
    precio: 100
}

const tablet: Producto = {
    desc: 'Ipad Air',
    precio: 200
}

export const calculaISV = (productos: Producto[]): [number, number] => {

    let total = 0;


    // recorro su array
    // ({ precio }) eso es la desestructuracion
    productos.forEach( ({ precio }) => {
        total += precio;
    })

    // el total * el 15%
    return [total, total * 0.15];

}

// const articulos = [ telefono, tablet ]


// // calculo el impuesto sobre ventas 
// const [total, isv] = calculaISV( articulos );

// console.log('Total:', total);
// console.log('ISV:', isv);


