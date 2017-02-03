new Vue({
    el: '#body',
    data: {
        nombre: 'Juan',
        clase: 'color-azul',
        autentificado: false,
        direccion: 'http://www.google.es'
    },
    methods: {
        accion: function(_evt) {
            _evt.preventDefault();
            alert('Click');
        }
    }
});