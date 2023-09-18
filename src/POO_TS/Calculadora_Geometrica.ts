interface FiguraGeometrica {
    calcularArea(): number;
    calcularPerimetro(): number;
}

class Circulo implements FiguraGeometrica {
    radio: number;

    constructor(radio: number) {
        this.radio = radio;
    }

    calcularArea() {
        return Math.PI * Math.pow(this.radio, 2);
    }

    calcularPerimetro() {
        return 2 * Math.PI * this.radio;
    }
}

class Rectangulo implements FiguraGeometrica {
    ancho: number;
    alto: number;

    constructor(ancho: number, alto: number) {
        this.ancho = ancho;
        this.alto = alto;
    }

    calcularArea() {
        return this.ancho * this.alto;
    }

    calcularPerimetro() {
        return 2 * (this.ancho + this.alto);
    }
}

class Triangulo implements FiguraGeometrica {
    base: number;
    altura: number;

    constructor(base: number, altura: number) {
        this.base = base;
        this.altura = altura;
    }

    calcularArea() {
        return (this.base * this.altura) / 2;
    }

    calcularPerimetro() {
        // No es posible calcular el perímetro de un triángulo solo con la base y altura
        return NaN;
    }
}

// Ejemplo de uso
const circulo = new Circulo(5);
const rectangulo = new Rectangulo(4, 6);
const triangulo = new Triangulo(3, 4);

console.log(circulo.calcularArea(), circulo.calcularPerimetro());
console.log(rectangulo.calcularArea(), rectangulo.calcularPerimetro());
console.log(triangulo.calcularArea(), triangulo.calcularPerimetro());
