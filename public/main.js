"use strict";
//import{Persona} from './persona'
var butadd = document.querySelector('#butadd');
var nombre = document.querySelector('#nombre');
var edad = document.querySelector('#edad');
var apellido = document.querySelector('#apellido');
var dni = document.querySelector('#dni');
var cumple = document.querySelector('#cumple');
var colorf = document.querySelector('#colorf');
var genero = document.querySelector('#genero');
var nota = document.querySelector('#nota');
var persondata = new Persona();
butadd.addEventListener('click', function (e) {
    if (nombre.value != '' && apellido.value != '' && edad.value != '' && !isNaN(parseFloat(edad.value))) {
        var nombres = nombre.value;
        var apellidos = apellido.value;
        var edades = parseFloat(edad.value);
        var dnis = dni.value;
        var cumples = cumple.value;
        var colorfs = colorf.value;
        var generos = genero.value;
        var notas = nota.value;
        persondata.add({ _nombre: nombres, _apellido: apellidos, _edad: edades, _dni: dnis, _cumple: cumples, _colorf: colorfs, _genero: generos, _nota: notas, });
        render();
    }
    else {
        alert('falta algo');
    }
});
function render() {
    var html = '';
    persondata.getItems().forEach(function (item) {
        var _id = item._id, _nombre = item._nombre, _apellido = item._apellido, _edad = item._edad, _dni = item._dni, _cumple = item._cumple, _colorf = item._colorf, _genero = item._genero, _nota = item._nota;
        html += "\n        <div class=\"item\">\n            <div><span class=\"pdata\">" + _nombre + "</span></div>\n            <div>" + _apellido + "</div>\n            <div>" + _edad + "</div>\n            <div>" + _dni + "</div>\n            <div>" + _cumple + "</div>\n            <div>" + _colorf + "</div>\n            <div>" + _genero + "</div>\n            <div>" + _nota + "</div>\n            <div><button class=\"bEliminar\" data-id=\"" + _id + "\">Quitar</button><div>\n            <div><button class=\"bModificar\" data-id=\"" + _id + "\">Modificar</button><div>\n        </div>\n        ";
    });
    console.log(apellido);
    $('#items').innerHTML = html;
    // $('#display').textContent = persondata.getAll();
    $$('.bEliminar').forEach(function (bEliminar) {
        bEliminar.addEventListener('click', function (e) {
            var id = e.target.getAttribute('data-id');
            persondata.remove(parseInt(id));
            render();
        });
    });
}
function $(selector) {
    return document.querySelector(selector);
}
function $$(selector) {
    return document.querySelectorAll(selector);
}
