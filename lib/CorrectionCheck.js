"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Position_1 = require("./Position");
class CorrectionCheck {
    constructor(id, intent, printerNumber, taxSystem, correction) {
        this.id = id;
        this.intent = intent;
        this.printerNumber = printerNumber;
        this.taxSystem = taxSystem;
        this.correction = correction;
    }
    static createSell(id, printerNumber, taxSystem, correction) {
        return new CorrectionCheck(id, CorrectionCheck.INTENT_SELL, printerNumber, taxSystem, correction);
    }
    static createSellReturn(id, printerNumber, taxSystem, correction) {
        return new CorrectionCheck(id, CorrectionCheck.INTENT_SELL_RETURN, printerNumber, taxSystem, correction);
    }
    setPayment(payment, vat) {
        let sum = payment.getSum();
        this.payment = payment;
        this.position = new Position_1.Position(this.intent == CorrectionCheck.INTENT_SELL
            ? 'Коррекция прихода'
            : 'Коррекция расхода', sum, 1, sum, vat.getRate(), vat);
        return this;
    }
    setAuthorisedPerson(authorised_person) {
        this.authorised_person = authorised_person;
        return this;
    }
    asArray() {
        return {
            'intent': this.intent,
            'task_id': this.id,
            'printer_number': this.printerNumber,
            'sno': this.taxSystem,
            'payments': [this.payment.asArray()],
            'positions': [this.position],
            'correction': this.correction.asArray(),
            'authorised_person': this.authorised_person.asArray()
        };
    }
}
CorrectionCheck.INTENT_SELL = 'sellCorrection';
CorrectionCheck.INTENT_SELL_RETURN = 'sellReturnCorrection';
exports.CorrectionCheck = CorrectionCheck;
//# sourceMappingURL=CorrectionCheck.js.map