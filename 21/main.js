var Persona = function(nombre, apellido, ciudad) {
	this.nombre = nombre;
	this.apellido = apellido;
	this.ciudad = ciudad;
};

Persona.prototype.saludar = function() {
	console.log('Hola soy ' + this.nombre + ' y vivo en ' + this.ciudad);
};

var juan = new Persona('Juan', 'Nuñez', 'Valencia');
console.dir(juan);
juan.saludar();