var urlAPI = 'https://randomuser.me/api/?results=50';

new Vue({
    el: 'body',
    created: function() {
        this.consultarAPI();
    },
    methods: {
        consultarAPI: function() {
            this.$http.get(urlAPI)
                .then(function(respuesta) {
                    console.log(respuesta);
                });
        }
    }
});