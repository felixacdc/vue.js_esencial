var nombre = "Felix";
/*var template = "<h1>Hola que tal <span>" + nombre + "</span></h1>";
console.log(template);*/

var template = [
    '<h1>',
        '<span>',
            nombre,
        '</span>',
    '</h1>'
].join('');

console.log(template);