Vue.filter('mayusculas', function(value) {
    return value.toUpperCase();
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