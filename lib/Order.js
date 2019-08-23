"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Payment_1 = require("./Payment");
class Order {
    constructor(order_id, state, sno, is_paid, prepayment = 0, payment_type = Payment_1.Payment.TYPE_CARD) {
        this.is_paid = false;
        this.description = '';
        this.items = [];
        this.order_id = order_id;
        this.is_paid = is_paid;
        this.state = state;
        this.sno = sno;
        this.prepayment = prepayment;
        this.payment_type = payment_type;
    }
    setClient(address, phone, email, name) {
        this.client_address = address;
        this.client_phone = phone;
        this.client_email = email;
        this.client_name = name;
    }
    setDeliveryTime(date_start, date_end) {
        this.date_start = date_start;
        this.date_end = date_end;
    }
    setDescription(description) {
        this.description = description;
    }
    addPosition(orderPosition) {
        this.items.push(orderPosition);
    }
    setCallbackUrl(callback_url) {
        this.callback_url = callback_url;
    }
    setCourierId(courier_id) {
        this.courier_id = courier_id;
    }
    getPositions() {
        return this.items;
    }
    getTotalPositionsSum() {
        let positionsTotal = 0;
        for (let i = 0; i < this.items.length; i++) {
            positionsTotal += this.items[i].getTotal();
        }
        return positionsTotal;
    }
    applyDiscount(checkDiscount) {
        let positionsTotal = this.getTotalPositionsSum();
        let checkPositions = this.getPositions();
        let positionsCount = checkPositions.length;
        let accumulatedDiscount = 0;
        let curPositionDiscount = 0;
        for (let index = 0; index < checkPositions.length; index++) {
            if (index < positionsCount - 1) {
                let positionPricePercent = checkPositions[index].getTotal() / positionsTotal * 100;
                curPositionDiscount = Number((checkDiscount * positionPricePercent / 100).toFixed(2));
                accumulatedDiscount += curPositionDiscount;
            }
            else {
                curPositionDiscount = Number((checkDiscount - accumulatedDiscount).toFixed(2));
            }
            checkPositions[index].setTotal(checkPositions[index].getTotal() - curPositionDiscount);
        }
        return this;
    }
    asArray() {
        let result = {
            'order_id': this.order_id,
            'client_address': this.client_address,
            'client_phone': this.client_phone,
            'is_paid': this.is_paid,
            'description': this.description,
            'date_start': this.date_start,
            'date_end': this.date_end,
            'items': this.items.map((item, key) => {
                return item.asArray();
            }),
        };
        if (this.client_email !== null) {
            result['client_email'] = this.client_email;
        }
        if (this.client_name !== null) {
            result['client_name'] = this.client_name;
        }
        if (this.sno !== null) {
            result['sno'] = this.sno;
        }
        if (this.state !== null) {
            result['state'] = this.state;
        }
        if (this.courier_id !== null) {
            result['courier_id'] = this.courier_id;
        }
        if (this.callback_url !== null) {
            result['callback_url'] = this.callback_url;
        }
        if (this.payment_type !== null) {
            result['payment_type'] = this.payment_type;
        }
        if (this.prepayment !== null) {
            result['prepayment'] = this.prepayment;
        }
        return result;
    }
}
exports.Order = Order;
//# sourceMappingURL=Order.js.map