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
        },

        // Estilos directos
        colorFuente: 'green',
        tamanoFuente: '60px',

        // Estilos directos, a través de objeto
        objetoEstilo: {
            color: 'green',
            fontSize: '60px'
        },
        otroObjetoEstilo: {
            textDecoration: 'underline',
            transform: 'rotate(30deg)',
        }
    }
});