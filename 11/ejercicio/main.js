/*
1- Crea una instancia Vue.
2- Crea propiedades en el modelo para un nombre, una ciudad y una dirección.
3- Crea un formulario que tenga un input para el nombre y otro para la ciudad.
4- Añade un checkbox cuyo label diga "¿Añadir una dirección?.
5- Al activar el checkbox debe mostrarse un textarea asociado a la dirección. Si el checkbox está desactivado, no debe mostrarse.
5- Captura el evento submit del formulario usando Vue.
6- Muestra por consola el contenido del modelo, que es el del formulario.
*/

new Vue({
    el: 'body',
    data: {
        nombre: null,
        ciudad: null,
        direccion: null,
        boolDireccion: false
    },
    methods: {
        sendForm: function() {
            console.log('Nombre: ' + this.nombre);
            console.log('Ciudad: ' + this.ciudad);
            console.log('Direccion: ' + this.direccion);
        }
    }
});