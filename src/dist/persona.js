// import { Mail } from './mail';
// import { Telefono } from './telefono';
//import{direccion} from "./direccion"
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var ArrayList = /** @class */ (function () {
    function ArrayList() {
        this.items = [];
    }
    ArrayList.prototype.add = function (item) {
        this.items.push(item);
    };
    ArrayList.prototype.get = function (index) {
        var item = this.items.filter(function (x, i) {
            return i === index;
        });
        if (item.length === 0) {
            return null;
        }
        else {
            return item[0];
        }
    };
    ArrayList.prototype.createFrom = function (value) {
        this.items = __spreadArrays(value);
    };
    ArrayList.prototype.getAll = function () {
        return this.items;
    };
    return ArrayList;
}());
var Persona = /** @class */ (function () {
    function Persona() {
        this.count = 0;
        this.personadata = new ArrayList();
    }
    Persona.prototype.add = function (item) {
        item._id = this.count;
        this.count++;
        this.personadata.add(item);
        return true;
    };
    Persona.prototype.get = function (index) {
        return this.personadata.get(index);
    };
    Persona.prototype.getItems = function () {
        return this.personadata.getAll();
    };
    Persona.prototype.remove = function (id) {
        var items = this.getItems().filter(function (item) {
            return item._id != id;
        });
        this.personadata.createFrom(items);
        return true;
    };
    return Persona;
}());
