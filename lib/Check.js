"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Check {
    constructor(id, userContact, intent, taxSystem, paymentAddress) {
        this.shouldPrint = false;
        this.payments = [];
        this.positions = [];
        this.id = id;
        this.userContact = userContact;
        this.intent = intent;
        this.taxSystem = taxSystem;
        this.paymentAddress = paymentAddress;
    }
    static createSell(id, userContact, taxSystem, paymentAddress) {
        return new Check(id, userContact, Check.INTENT_SELL, taxSystem, paymentAddress);
    }
    static createSellReturn(id, userContact, taxSystem, paymentAddress) {
        return new Check(id, userContact, Check.INTENT_SELL_RETURN, taxSystem, paymentAddress);
    }
    static createBuy(id, userContact, taxSystem, paymentAddress) {
        return new Check(id, userContact, Check.INTENT_BUY, taxSystem, paymentAddress);
    }
    static createBuyReturn(id, userContact, taxSystem, paymentAddress) {
        return new Check(id, userContact, Check.INTENT_BUY_RETURN, taxSystem, paymentAddress);
    }
    setShouldPrint(value) {
        this.shouldPrint = Boolean(value);
        return this;
    }
    addPayment(payment) {
        this.payments.push(payment);
        return this;
    }
    addBuyer(buyer) {
        this.buyer = buyer;
        return this;
    }
    addCashier(cashier) {
        this.cashier = cashier;
        return this;
    }
    addPosition(position) {
        this.positions.push(position);
        return this;
    }
    getTotalPositionsSum() {
        let positionsTotal = 0;
        for (let i = 0; i < this.positions.length; i++) {
            positionsTotal += this.positions[i].getTotal();
        }
        return positionsTotal;
    }
    getPositions() {
        return this.positions;
    }
    applyDiscount(checkDiscount) {
        let curPositionDiscount;
        let positionsTotal = this.getTotalPositionsSum();
        let checkPositions = this.getPositions();
        let positionsCount = checkPositions.length;
        let accumulatedDiscount = 0;
        for (let index = 0; index < positionsCount; index++) {
            if (index < positionsCount - 1) {
                let positionPricePercent = this.positions[index].getTotal() / positionsTotal * 100;
                curPositionDiscount = Number((checkDiscount * positionPricePercent / 100).toFixed(2));
                accumulatedDiscount += curPositionDiscount;
            }
            else {
                curPositionDiscount = Number((checkDiscount - accumulatedDiscount).toFixed(2));
            }
            this.positions[index].setTotal(this.positions[index].getTotal() - curPositionDiscount);
        }
        return this;
    }
    asArray() {
        let result = {
            'task_id': this.id,
            'user': this.userContact,
            'print': this.shouldPrint,
            'intent': this.intent,
            'sno': this.taxSystem,
            'payments': this.payments.map((payment, key) => {
                return payment.asArray();
            }),
            'positions': this.positions.map((position, key) => {
                return position.asArray();
            }),
        };
        if (this.buyer !== null) {
            result['client'] = this.buyer.asArray();
        }
        if (this.cashier !== null) {
            result['cashier'] = this.cashier.asArray();
        }
        if (this.paymentAddress !== null) {
            result['payment_address'] = this.paymentAddress;
        }
        return result;
    }
}
Check.INTENT_SELL = 'sell';
Check.INTENT_SELL_RETURN = 'sellReturn';
Check.INTENT_BUY = 'buy';
Check.INTENT_BUY_RETURN = 'buyReturn';
exports.Check = Check;
//# sourceMappingURL=Check.js.map