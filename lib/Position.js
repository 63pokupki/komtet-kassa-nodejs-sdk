"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Position {
    constructor(name, price, quantity, total, discount, vat) {
        this.id = null;
        this.measureName = null;
        this.calcMethod = null;
        this.calcSubject = null;
        this.excise = null;
        this.countryCode = null;
        this.declarationNumber = null;
        this.agent = null;
        this.nomenclature = null;
        this.name = name;
        this.price = price;
        this.quantity = quantity;
        this.total = total;
        this.discount = discount;
        this.vat = vat;
    }
    setId(value) {
        this.id = value;
        return this;
    }
    setMeasureName(value) {
        this.measureName = value;
        return this;
    }
    setCalculationMethod(calc_method) {
        this.calcMethod = calc_method;
        return this;
    }
    setCalculationSubject(calc_subject) {
        this.calcSubject = calc_subject;
        return this;
    }
    setExcise(value) {
        this.excise = value;
        return this;
    }
    setCountryCode(value) {
        this.countryCode = value;
        return this;
    }
    setDeclarationNumber(value) {
        this.declarationNumber = value;
        return this;
    }
    setAgent(agent) {
        this.agent = agent;
        return this;
    }
    setNomenclature(nomenclature) {
        this.nomenclature = nomenclature;
        return this;
    }
    getTotal() {
        return this.total;
    }
    setTotal(total) {
        this.total = total;
        return this;
    }
    asArray() {
        let result = {
            'name': this.name,
            'price': this.price,
            'quantity': this.quantity,
            'total': this.total,
            'discount': this.discount,
            'vat': this.vat.getRate()
        };
        if (this.id !== null) {
            result['id'] = this.id;
        }
        if (this.measureName !== null) {
            result['measure_name'] = this.measureName;
        }
        if (this.calcMethod !== null) {
            result['calculation_method'] = this.calcMethod;
        }
        if (this.calcSubject !== null) {
            result['calculation_subject'] = this.calcSubject;
        }
        if (this.excise !== null) {
            result['excise'] = this.excise;
        }
        if (this.countryCode !== null) {
            result['country_code'] = this.countryCode;
        }
        if (this.declarationNumber !== null) {
            result['declaration_number'] = this.declarationNumber;
        }
        if (this.agent !== null) {
            result['agent_info'] = this.agent.asArray();
            try {
                if (result['agent_info']['supplier_info']) {
                    result['supplier_info'] = result['agent_info']['supplier_info'];
                    delete result['agent_info']['supplier_info'];
                }
            }
            catch (e) {
            }
        }
        if (this.nomenclature !== null) {
            result['nomenclature_code'] = this.nomenclature.asArray();
        }
        return result;
    }
}
exports.Position = Position;
//# sourceMappingURL=Position.js.map