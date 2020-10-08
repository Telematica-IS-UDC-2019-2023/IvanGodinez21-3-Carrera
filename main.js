class Dado {
    lanzarDado() {
        let cara = Math.ceil(Math.random() * 6);
        if (cara == 1) {
            return 3
        } else if (cara <= 3) {
            return 1
        } else if (cara <= 6) {
            return 2
        }
    }
}
class Corredor {
    constructor(nombre) {
        this.nombre = nombre
        this.posicion = 0
        this.dado = new Dado
    }
    correr() {
        return this.posicion += this.dado.lanzarDado();
    }
}
let C1 = new Corredor('Pablo');
let C2 = new Corredor('Josue');
while (C1.posicion < 100 && C2.posicion < 100) {
    C1.correr();
    console.log(`${C1.nombre} avanzó a: ${C1.posicion}`)
    C2.correr();
    console.log(`${C2.nombre} avanzó a: ${C2.posicion}`)
}
if (C1.posicion >= 100 && C2.posicion >= 100) {
    console.log('Ambos empataron');
} else if (C1.posicion >= 100) {
    console.log(`${C1.nombre} ganó`);
} else if (C2.posicion >= 100) {
    console.log(`${C2.nombre} ganó`);
}