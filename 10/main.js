Vue.transition('rotate', {
    enterClass: 'rotateInDownLeft',
    leaveClass: 'rotateOutDownRight'
});

new Vue({
    el: 'body',
    data: {
        mensaje: 'Transición',
        visible: true
    }
});