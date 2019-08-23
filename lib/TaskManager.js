"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TaskManager {
    constructor(client) {
        this.client = client;
    }
    async getTaskInfo(taskId) {
        return this.client.sendRequest(`api/shop/v1/tasks/` + taskId);
    }
}
exports.TaskManager = TaskManager;
//# sourceMappingURL=TaskManager.js.map