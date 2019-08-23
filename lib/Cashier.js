"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Cashier {
    constructor(name, inn) {
        this.name = name;
        this.inn = inn;
    }
    asArray() {
        return {
            'name': this.name,
            'inn': this.inn
        };
    }
}
exports.Cashier = Cashier;
//# sourceMappingURL=Cashier.js.map