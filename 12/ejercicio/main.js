/*
1- Crea una instancia Vue.
2- Crea una propiedad en el modelo para guardar tareas.
3- Usando un evento de la instancia (complete o ready), crea un método que se conecte a esta API "http://jsonplaceholder.typicode.com/todos" usando Vue Resource.
4- Muestra en la vista todas las tareas a través de una directiva-bucle
BONUS: Busca la forma de poder filtrar las tareas por nombre a través de un input de texto (búsqueda contextual)
*/
var urlAPI = 'http://jsonplaceholder.typicode.com/todos';

new Vue({
    el: 'body',
    created: function() {
        this.consultarAPI();
    },
    data: {
        tareas: [],
        tareas_filtradas: [],
        busqueda: ""
    },
    methods: {
        consultarAPI: function() {
            let _this = this;
            this.$http.get(urlAPI)
                .then(function(respuesta) {
                    _this.tareas = respuesta.data;
                    _this.tareas_filtradas = _this.tareas;
                });
        },
        buscar: function() {

        }
    }
});