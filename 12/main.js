var urlAPI = 'https://randomuser.me/api/?results=50';

new Vue({
    el: 'body',
    created: function() {
        this.consultarAPI();
    },
    data: {
        personas: []
    },
    methods: {
        consultarAPI: function() {
            let _this = this;
            this.$http.get(urlAPI)
                .then(function(respuesta) {
                    _this.personas = respuesta.data.results;
                });
        }
    }
});