import { Client } from './Client';
export declare class TaskManager {
    private client;
    constructor(client: Client);
    getTaskInfo(taskId: string): Promise<any>;
}
