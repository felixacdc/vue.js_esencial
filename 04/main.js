new Vue({
    el: 'body',
    data: {
        nombre: "Pablo"
    },
    methods: {
        saludar: function(nombre, _evt) {
            console.log(_evt);
            alert('Buenas tardes ' + nombre);
            alert('Buenas tardes ' + this.nombre);
        }
    }
});