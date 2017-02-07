new Vue({
    el: "#main",
    data: {
        nombre: null,
        edad: null,
        sexo: null,
        correo: null
    },
    methods: {
        enviarDatos: function() {
            if(this.nombre && this.edad && this.sexo && this.correo)
                alert('enviando mensaje');
            else
                alert('Rellena todos los campos');
        }
    }
});