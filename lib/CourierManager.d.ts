import { Client } from "./Client";
export declare class CourierManager {
    private client;
    constructor(client: Client);
    getCouriers(start?: string, limit?: string): Promise<any>;
}
