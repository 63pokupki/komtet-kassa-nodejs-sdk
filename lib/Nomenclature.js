"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Nomenclature {
    constructor(nomenclature_type, gtin, serial_number) {
        this.nomenclature_code = {
            'type': nomenclature_type,
            'gtin': gtin,
            'serial': serial_number
        };
    }
    asArray() {
        return this.nomenclature_code;
    }
}
Nomenclature.FURS = 'furs';
Nomenclature.MEDICINES = 'medicines';
Nomenclature.TOBACCO = 'tobacco';
Nomenclature.SHOES = 'shoes';
exports.Nomenclature = Nomenclature;
//# sourceMappingURL=Nomenclature.js.map