"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Vat_1 = require("./Vat");
class OrderPosition {
    constructor(args) {
        if (args['total'] == null) {
            args['total'] = args['price'] * args['quantity'];
        }
        this.oid = args['oid'];
        this.name = args['name'];
        this.price = args['price'];
        this.quantity = args['quantity'];
        this.total = args['total'];
        this.vat = new Vat_1.Vat(args['vat']);
        if (args['measure_name'] !== null) {
            this.measure_name = args['measure_name'];
        }
        if (args['type'] !== null) {
            this.type = args['type'];
        }
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
            'order_item_id': this.oid,
            'name': this.name,
            'price': this.price,
            'quantity': this.quantity,
            'total': this.total,
            'vat': this.vat.getRate()
        };
        if (this.measure_name !== null) {
            result['measure_name'] = this.measure_name;
        }
        if (this.type !== null) {
            result['type'] = this.type;
        }
        return result;
    }
}
exports.OrderPosition = OrderPosition;
//# sourceMappingURL=OrderPosition.js.map