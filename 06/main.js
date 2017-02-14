new Vue({
    el: "body",
    data: {
        // Objeto
        azul: true,
        subrayado: false,
        // myValor: true,

        // Objeto sintaxis directa
        objetoConClases: {
            'azul': true,
            'subrayado': true
        },

        // Sintaxis de Array
        listadoDeClases: {
            azul: 'azul',
            subrayado: 'subrayado'
        }
    }
});