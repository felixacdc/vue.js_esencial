Vue.filter('mayusculas', function(value) {
    return value.toUpperCase();
});

Vue.filter('formal', function(value, hombre) {
    titulo = hombre ? 'Sr. ' : 'Sra. ';
    return titulo + value.split(' ').reverse().join(' ');
});

new Vue({
    el: 'body',
    data: {
        miNombre: 'Pablo Félix Méndez Argueta',
        datos: {
            nombre: 'Felix',
            profesion: 'dev'
        }
    }
});