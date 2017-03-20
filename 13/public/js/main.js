// Initialize Firebase
var config = {
    apiKey: "AIzaSyAN5oeJvB2rTGjwr2zfkk0YRZHV1AA5CQc",
    authDomain: "vuefiredo-14aa4.firebaseapp.com",
    databaseURL: "https://vuefiredo-14aa4.firebaseio.com",
    storageBucket: "vuefiredo-14aa4.appspot.com",
    messagingSenderId: "581245354999"
};

firebase.initializeApp(config);

var db = firebase.database(),
    auth = firebase.auth(),
    proveedor = new firebase.auth.GoogleAuthProvider();

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
            db.ref('tareas/' + tarea['.key']).update({
                titulo: tarea.titulo
            });
        },
        actualizarEstadoTarea: function(estado, tarea) {
            db.ref('tareas/' + tarea['.key']).update({
                completado: estado ? true : false
            });
        },
        eliminarTarea: function(tarea) {
            db.ref('tareas/' + tarea['.key']).remove();
        }
    }
});

var vm = new Vue({
    el: 'body',
    data: {
        autentificado: false,
        usuarioActivo: null,
        tareas: []
    },
    ready: function() {
        // RT Database
        db.ref('tareas/').on('value', function(snapshot) {
            vm.tareas = [];
            var objeto = snapshot.val();
            
            for(var propiedad in objeto) {
                vm.tareas.unshift({
                    '.key': propiedad,
                    completado: objeto[propiedad].completado,
                    titulo: objeto[propiedad].titulo
                });
            }
        });
        
        // Auth
        auth.onAuthStateChanged(function(user) {
            if (user) {
                console.info('Conectado: ' + user)
                vm.autentificado = true;
                vm.usuarioActivo = user;
            } else {
                console.info('No conectado: ' + user)
                vm.autentificado = false;
                vm.usuarioActivo = null;
            }
        });
    },
    methods: {
        conectar: function () {
            auth.signInWithPopup(proveedor).catch(function (error) {
                console.error('Error haciendo logIn: ', error);
            });
        },
        desconectar: function () {
            auth.signOut().catch(function (error) {
                console.error('Error haciendo logOut: ', error);
            });
        }
    }
});