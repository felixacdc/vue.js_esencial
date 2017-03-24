var Persona = function(nombre, apellido, ciudad) {
	this.nombre = nombre;
	this.apellido = apellido;
	this.ciudad = ciudad;
};

Persona.prototype.saludar = function() {
	console.log('Hola soy ' + this.nombre + ' y vivo en ' + this.ciudad);
};

// var juan = new Persona('Juan', 'Nuñez', 'Valencia');
// console.dir(juan);
// juan.saludar();

class Humano {
	constructor(nombre, apellido, ciudad) {
		this.nombre = nombre;
		this.apellido = apellido;
		this.ciudad = ciudad;
	}

	saludar() {
		console.log('Hola soy ' + this.nombre + ' y vivo en ' + this.ciudad);
	}

	get nombreCompleto() {
		return this.nombre + " " + this.apellido;
	}

	set cambiarCiudad(ciudad) {
		this.ciudad = ciudad;
	}

	static caminar() {
		console.log('Estoy caminando...');
	}
}

// let andres = new Humano('Andres', 'Nuñez', 'Valencia');
// console.dir(andres);
// console.log(andres.nombreCompleto)
// andres.cambiarCiudad = 'Ponferrada';
// console.dir(andres);
let andres = new Humano('Andres', 'Nuñez', 'Valencia');
andres.saludar();
Humano.caminar();

class Aleman extends Humano {
	hablar() {
		console.log('Guten Abend');
	}

	saludar() {
		console.log('Hallo, ich bin ' + this.nombre + ' und ich lebe in ' + this.ciudad);
	}
}

let helmut = new Aleman('Helmut', 'Franz', 'Munich');
helmut.hablar();
helmut.saludar();