let saludar = nombre => console.log(nombre);

class Gato {
    constructor(nombre = 'Guizmo') {
        this.nombre = nombre;
    }

    curarse() {
        return `${this.nombre} se esta curando`;
    }

    hola() {
        return "hola";
    }
}

let Guizmo = new Gato();
console.log(Guizmo.curarse());