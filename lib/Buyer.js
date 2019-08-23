"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Buyer {
    constructor(name, inn) {
        this.name = name;
        this.inn = inn;
    }
    setName(name) {
        this.name = name;
        return this;
    }
    setINN(inn) {
        this.inn = inn;
        return this;
    }
    asArray() {
        let data = {};
        if (this.name) {
            data['name'] = this.name;
        }
        if (this.inn) {
            data['inn'] = this.inn;
        }
        return data;
    }
}
exports.Buyer = Buyer;
//# sourceMappingURL=Buyer.js.map