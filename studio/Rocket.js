"use strict";
exports.__esModule = true;
exports.Rocket = void 0;
var Rocket = /** @class */ (function () {
    function Rocket(name, totalCapacityKg) {
        this.cargoItems = [];
        this.astronuts = [];
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }
    Rocket.prototype.sumMass = function (items) {
        var sum = 0;
        for (var i = 0; i < items.length; i++) {
            sum = sum + items[i].massKg;
        }
        return sum;
    };
    Rocket.prototype.currentMassKg = function () {
        return this.sumMass(this.cargoItems) + this.sumMass(this.astronuts);
    };
    Rocket.prototype.canAdd = function (item) {
        if (this.currentMassKg() + item.massKg <= this.totalCapacityKg) {
            return true;
        }
        else {
            return false;
        }
    };
    Rocket.prototype.addCargo = function (cargo) {
        var added = false;
        if (this.canAdd(cargo)) {
            this.cargoItems.push(cargo);
            added = true;
        }
        return added;
    };
    Rocket.prototype.addAstronaut = function (astronaut) {
        var added = false;
        if (this.canAdd(astronaut)) {
            this.astronuts.push(astronaut);
            added = true;
        }
        return added;
    };
    return Rocket;
}());
exports.Rocket = Rocket;
