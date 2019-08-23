"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AuthorisedPerson {
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
exports.AuthorisedPerson = AuthorisedPerson;
//# sourceMappingURL=AuthorisedPerson.js.map