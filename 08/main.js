Vue.component('cita', {
    template: '#cita',
    ready: function() {
        this.elegirCita();
    },
    data: function() {
        return {
            votos: 0,
            citaElegida: '',
            citas: [
                '"It might help if we ran the MBAs out of Washington." -- Admiral Grace Hopper',
                '"Whether you think you can or you think you can’t, you’re right." -- Henry Ford',
                '"Every child is an artist.  The problem is how to remain an artist once he grows up." -- Pablo Picassor',
                '""If you can dream it, you can do it" -- Walt Disney',
                '"Genius is one percent inspiration, ninety nine percent perspiration" -- Thomas Edison'
            ]
        };
    },
    methods: {
        elegirCita: function() {
            let cita = this.citas[Math.floor(Math.random() * this.citas.length)];
            this.citaElegida = cita;
        },
        sumarVoto: function() {
            this.votos++;
        },
        restarVoto: function() {
            if(this.votos > 0)
                this.votos--;
        }
    }
});

new Vue({
    el: 'body'
});