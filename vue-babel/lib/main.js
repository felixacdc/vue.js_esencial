"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var saludar = function saludar(nombre) {
    return console.log(nombre);
};

var Gato = function () {
    function Gato() {
        var nombre = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Guizmo';

        _classCallCheck(this, Gato);

        this.nombre = nombre;
    }

    _createClass(Gato, [{
        key: "curarse",
        value: function curarse() {
            return this.nombre + " se esta curando";
        }
    }, {
        key: "hola",
        value: function hola() {
            return "hola";
        }
    }]);

    return Gato;
}();

var Guizmo = new Gato();
console.log(Guizmo.curarse());