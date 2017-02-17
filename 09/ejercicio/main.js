Vue.filter('menosDe', function(value, time) {
    
    let newValue = value.filter(function(element) {
        if(element.tiempo < time)
            return element;
    });

    return newValue;
});

new Vue({
    el: 'body',
    data: {
        datos: [
            {nombre: 'Hacer la compra', tiempo: 12},
            {nombre: 'Aprender Vue.js', tiempo: 5},
            {nombre: 'Lavar el coche', tiempo: 22},
        ]
    }
});