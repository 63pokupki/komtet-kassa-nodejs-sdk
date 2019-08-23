"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Payment {
    constructor(type, sum) {
        this.type = type;
        this.sum = sum;
    }
    getSum() {
        return this.sum;
    }
    asArray() {
        return {
            'type': this.type,
            'sum': this.sum
        };
    }
}
Payment.TYPE_CARD = 'card';
Payment.TYPE_CASH = 'cash';
Payment.TYPE_PREPAYMENT = 'prepayment';
Payment.TYPE_CREDIT = 'credit';
Payment.TYPE_COUNTER_PROVISIONING = 'counter_provisioning';
exports.Payment = Payment;
//# sourceMappingURL=Payment.js.map