new Vue({
    el: 'body',
    methods: {
        saludar: function(_evt) {
            console.log(_evt);
            alert('Buenas tardes');
        }
    }
});