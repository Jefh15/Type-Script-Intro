
/*
    ===== Código de TypeScript =====
*/

function reportableClassDecorator<T extends { new (...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
      reportingURL = "http://www...";
    };
  }

// Un decorador no es mas que una funcion que expande su clase anadiendo funcionalidades especiales
@reportableClassDecorator
class MiSuperClase {

    public miPropiedad: string = 'ABC123';

    imprimir() {
        console.log('Hola Mundo');
    }
}

const miClase = new MiSuperClase();
console.log( miClase.miPropiedad );
