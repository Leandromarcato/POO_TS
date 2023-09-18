class Contacto {
    nombre: string;
    correoElectronico: string;
    numeroTelefono: string;

    constructor(nombre: string, correoElectronico: string, numeroTelefono: string) {
        this.nombre = nombre;
        this.correoElectronico = correoElectronico;
        this.numeroTelefono = numeroTelefono;
    }
}

class GestorContactos {
    contactos: Contacto[];

    constructor() {
        this.contactos = [];
    }

    agregarContacto(contacto: Contacto) {
        this.contactos.push(contacto);
    }

    buscarContactoPorNombre(nombre: string) {
        return this.contactos.filter(contacto => contacto.nombre === nombre);
    }

    mostrarListaCompleta() {
        return this.contactos;
    }
}

// Ejemplo de uso
const gestor = new GestorContactos();

const contacto1 = new Contacto('Juan Pérez', 'juan@example.com', '123456789');
const contacto2 = new Contacto('María López', 'maria@example.com', '987654321');

gestor.agregarContacto(contacto1);
gestor.agregarContacto(contacto2);

console.log(gestor.buscarContactoPorNombre('María López'));
console.log(gestor.mostrarListaCompleta());
