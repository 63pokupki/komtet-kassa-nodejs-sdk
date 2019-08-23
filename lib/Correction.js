"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Correction {
    constructor(type, date, document, description) {
        this.type = type;
        this.date = date;
        this.document = document;
        this.description = description;
    }
    static createSelf(type, date, document, description) {
        return new Correction(Correction.TYPE_SELF, date, document, description);
    }
    static createForced(type, date, document, description) {
        return new Correction(Correction.TYPE_FORCED, date, document, description);
    }
    asArray() {
        return {
            'type': this.type,
            'date': this.date,
            'document': this.document,
            'description': this.description
        };
    }
}
Correction.TYPE_SELF = 'self';
Correction.TYPE_FORCED = 'forced';
exports.Correction = Correction;
//# sourceMappingURL=Correction.js.map