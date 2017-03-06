new Vue({
    el: 'body',
    data: {
        nuevaTarea: null,
        editandoTarea: null,
        tareas: [
            {titulo: 'Salir a correr', completado: false},
            {titulo: 'Ir al gimnasio', completado: true},
            {titulo: 'Limpiar el coche', completado: false},
            {titulo: 'Hacer la compra', completado: false},
            {titulo: 'Aprender VueJs & Firebase', completado: false}
        ]
    },
    methods: {
        agregarTarea: function(tarea) {
            this.tareas.unshift({
                titulo: tarea, completado: false
            });
            this.nuevaTarea = "";
        },
        editarTarea: function(tarea) {
            console.info(tarea)
        },
        eliminarTarea: function(indice) {
            this.tareas.splice(indice, 1);
        }
    }
});