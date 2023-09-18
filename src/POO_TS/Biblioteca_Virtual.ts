class Libro {
    titulo: string;
    autor: string;
    prestado: boolean;

    constructor(titulo: string, autor: string) {
        this.titulo = titulo;
        this.autor = autor;
        this.prestado = false;
    }

    prestar() {
        if (!this.prestado) {
            this.prestado = true;
        }
    }

    devolver() {
        if (this.prestado) {
            this.prestado = false;
        }
    }
}

// Ejemplo de uso
const libro1 = new Libro('El Principito', 'Antoine de Saint-Exupéry');
const libro2 = new Libro('Cien años de soledad', 'Gabriel García Márquez');

libro1.prestar();
libro2.prestar();

console.log(libro1);
console.log(libro2);

libro1.devolver();

console.log(libro1);
