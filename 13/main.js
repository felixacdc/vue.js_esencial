// Initialize Firebase
var config = {
    apiKey: "AIzaSyAN5oeJvB2rTGjwr2zfkk0YRZHV1AA5CQc",
    authDomain: "vuefiredo-14aa4.firebaseapp.com",
    databaseURL: "https://vuefiredo-14aa4.firebaseio.com",
    storageBucket: "vuefiredo-14aa4.appspot.com",
    messagingSenderId: "581245354999"
};

firebase.initializeApp(config);

var db = firebase.database();

Vue.component('todo-list', {
    template: '#todo-template',
    data: function() {
        return {
            nuevaTarea: null,
            editandoTarea: null
        }
    },
    props:['tareas'],
    methods: {
        agregarTarea: function(tarea) {
            db.ref('tareas/').push({
                titulo: tarea,
                completado: false
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

new Vue({
    el: 'body',
    data: {
        /*tareas: [
            {titulo: 'Salir a correr', completado: false},
            {titulo: 'Ir al gimnasio', completado: true},
            {titulo: 'Limpiar el coche', completado: false},
            {titulo: 'Hacer la compra', completado: false},
            {titulo: 'Aprender VueJs & Firebase', completado: false}
        ]*/
        tareas: []
    }
});