import { Client } from './Client';
import { Order } from './Order';
export declare class OrderManager {
    private client;
    constructor(client: Client);
    createOrder(order: Order): Promise<any>;
    updateOrder(oid: number, order: Order): Promise<any>;
    getOrderInfo(oid: number): Promise<any>;
    deleteOrder(oid: number): Promise<any>;
    getOrders(start: string, limit: string, courier_id: string, date_start: string): Promise<any>;
}
