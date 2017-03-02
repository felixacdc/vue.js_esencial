new Vue({
    el: 'body',
    data: {
        nuevaTarea: null,
        tareas: [
            {titulo: 'Salir a correr', completado: false},
            {titulo: 'Ir al gimnasio', completado: false},
            {titulo: 'Limpiar el coche', completado: false},
            {titulo: 'Hacer la compra', completado: false},
            {titulo: 'Aprender VueJs & Firebase', completado: false}
        ]
    },
    methods: {
        agregarTarea: function(tarea) {
            console.info(tarea);
        }
    }
});