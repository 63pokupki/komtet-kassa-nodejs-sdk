"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CourierManager {
    constructor(client) {
        this.client = client;
    }
    getCouriers(start = '0', limit = '10') {
        let path = `api/shop/v1/couriers?start=${start}&limit=${limit}`;
        return this.client.sendRequest(path);
    }
}
exports.CourierManager = CourierManager;
//# sourceMappingURL=CourierManager.js.map