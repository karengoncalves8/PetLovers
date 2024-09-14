"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prompt_sync_1 = require("prompt-sync");
var Entrada = /** @class */ (function () {
    function Entrada() {
    }
    Entrada.prototype.receberNumero = function (mensagem) {
        var prompt = (0, prompt_sync_1.default)();
        var valor = prompt(mensagem);
        var numero = Number(valor);
        return numero;
    };
    Entrada.prototype.receberTexto = function (mensagem) {
        var prompt = (0, prompt_sync_1.default)();
        var valor = prompt(mensagem);
        return valor;
    };
    return Entrada;
}());
exports.default = Entrada;
