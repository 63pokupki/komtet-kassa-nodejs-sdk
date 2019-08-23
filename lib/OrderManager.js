"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class OrderManager {
    constructor(client) {
        this.client = client;
    }
    createOrder(order) {
        return this.client.sendRequest('api/shop/v1/orders', order.asArray());
    }
    updateOrder(oid, order) {
        return this.client.sendRequest(`api/shop/v1/orders/${oid}`, order.asArray(), 'PUT');
    }
    getOrderInfo(oid) {
        return this.client.sendRequest(`api/shop/v1/orders/${oid}`);
    }
    deleteOrder(oid) {
        return this.client.sendRequest(`api/shop/v1/orders/${oid}`, null, 'DELETE');
    }
    getOrders(start = '0', limit = '10', courier_id, date_start) {
        let path = `api/shop/v1/orders?start=${start}&limit=${limit}`;
        if (courier_id !== null) {
            path += `&courier_id=${courier_id}`;
        }
        if (date_start !== null) {
            path += `&date_start=${date_start}`;
        }
        return this.client.sendRequest(path);
    }
}
exports.OrderManager = OrderManager;
//# sourceMappingURL=OrderManager.js.map