new Vue({
    el: 'body',
    data: {
        // Objeto
        persona: {
            nombre: "Juan",
            profesion: "Dev",
            ciudad: "Valencia"
        },

        // Matriz simple
        numeros: [
            1,2,3,4,5
        ],

        // Matrices de objetos
        semana: [
            {nombre: "Lunes", numero: 1},
            {nombre: "Martes", numero: 2},
            {nombre: "Miercoles", numero: 3},
            {nombre: "Jueves", numero: 4},
            {nombre: "Viernes", numero: 5},
            {nombre: "Sabado", numero: 6},
            {nombre: "Domingo", numero: 7}
        ]
    }
});