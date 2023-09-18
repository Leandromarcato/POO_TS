class Mascota {
    nombre: string;
    nivelFelicidad: number;

    constructor(nombre: string) {
        this.nombre = nombre;
        this.nivelFelicidad = 50; // Inicializamos el nivel de felicidad en 50
    }

    alimentar() {
        this.nivelFelicidad += 10;
    }

    jugar() {
        this.nivelFelicidad += 20;
    }

    cuidar() {
        this.nivelFelicidad += 5;
    }
}

// Ejemplo de uso
const perro = new Mascota('Fido');
const gato = new Mascota('Whiskers');

perro.alimentar();
gato.jugar();

console.log(perro);
console.log(gato);
