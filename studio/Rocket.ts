import { Cargo } from "./Cargo";
import { Astronaut } from "./Astronaut"
import { Payload } from "./Payload";

export class Rocket {
    name: string;
    totalCapacityKg: number;
    cargoItems: Cargo[] = [];
    astronuts: Astronaut[] = [];

    constructor(name: string, totalCapacityKg: number) {
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }

    sumMass(items: Payload[] ) : number {
        let sum: number = 0;
        for (let i=0; i < items.length; i++) {
            sum = sum + items[i].massKg;
        }

        return sum;        
    }

    currentMassKg(): number {
        return this.sumMass(this.cargoItems) + this.sumMass(this.astronuts);
    }

    canAdd(item:Payload): boolean {
        if (this.currentMassKg() + item.massKg <= this.totalCapacityKg) {
            return true;
        } else {
            return false;
        }
    }

    addCargo(cargo: Cargo): boolean {
        let added = false;

        if (this.canAdd(cargo)) {
            this.cargoItems.push(cargo);
            added = true;
        }

        return added;
    }

    addAstronaut(astronaut: Astronaut): boolean {
        let added = false;

        if (this.canAdd(astronaut)) {
            this.astronuts.push(astronaut);
            added = true;
        }

        return added;
    }
}

