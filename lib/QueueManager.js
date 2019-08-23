"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class QueueManager {
    constructor(client) {
        this.queues = {};
        this.defaultQueue = null;
        this.client = client;
    }
    registerQueue(name, id) {
        this.queues[name] = id;
        return this;
    }
    setDefaultQueue(name) {
        if (!this.hasQueue(name)) {
            throw `Unknown queue "${name}"`;
        }
        this.defaultQueue = name;
        return this;
    }
    hasQueue(name) {
        return this.queues.includes(name);
    }
    async putCheck(check, queueName) {
        if (!queueName) {
            if (this.defaultQueue === null) {
                throw 'Default queue is not set';
            }
            queueName = this.defaultQueue;
        }
        if (!this.hasQueue(queueName)) {
            throw `Unknown queue "${queueName}"`;
        }
        return await this.client.sendRequest(`api/shop/v1/queues/${this.queues[queueName]}/task`, check.asArray());
    }
    async isQueueActive(name) {
        let resp = false;
        if (!this.hasQueue(name)) {
            throw `Unknown queue "${name}"`;
        }
        let path = `api/shop/v1/queues/${this.queues[name]}`;
        try {
            let data = await this.client.sendRequest(path);
            if (data['state']) {
                resp = true;
            }
        }
        catch (e) {
        }
        return resp;
    }
}
exports.QueueManager = QueueManager;
//# sourceMappingURL=QueueManager.js.map