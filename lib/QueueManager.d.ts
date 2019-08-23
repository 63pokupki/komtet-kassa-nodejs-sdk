import { Client } from './Client';
import { CorrectionCheck } from './CorrectionCheck';
export declare class QueueManager {
    private client;
    private queues;
    private defaultQueue;
    constructor(client: Client);
    registerQueue(name: string, id: string): this;
    setDefaultQueue(name: string): QueueManager;
    hasQueue(name: string): boolean;
    putCheck(check: CorrectionCheck, queueName: string): Promise<any>;
    isQueueActive(name: string): Promise<boolean>;
}
