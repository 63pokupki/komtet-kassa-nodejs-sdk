import { Client } from './Client';
import { Order } from './Order';


/**
* This file is part of the komtet/kassa-sdk library
*
* For the full copyright and license information, please view the LICENSE
* file that was distributed with this source code.
*/



export class OrderManager {
    /**
     * @var Client
     */
    private client: Client;

    /**
     * @param Client client
     */
    constructor(client: Client) {
        this.client = client;
    }


    /**
     * Order making for delivery
     *
     * @param Order order Order
     *
     * @return mixed
     */
    public createOrder(order: Order) {
        return this.client.sendRequest('api/shop/v1/orders', order.asArray());
    }


    /**
     * Updating order for delivery
     *
     * @param int oid Order ID
     * @param Order order Order
     *
     * @return mixed
     */
    public updateOrder(oid: number, order: Order) {
        return this.client.sendRequest(`api/shop/v1/orders/${oid}`, order.asArray(), 'PUT');
    }


    /**
     * Viewing order information
     *
     * @param int oid Order ID
     *
     * @return mixed
     */
    public getOrderInfo(oid: number) {
        return this.client.sendRequest(`api/shop/v1/orders/${oid}`);
    }


    /**
     * Delete order
     *
     * @param int oid Order ID
     *
     * @return mixed
     */
    public deleteOrder(oid: number) {
        return this.client.sendRequest(`api/shop/v1/orders/${oid}`, null, 'DELETE');
    }

    /**
     * Feed the order information back
     *
     * @param string courier_id Courier ID
     * @param string date_start Delivery date and time
     * @param string start Launch the order input from "start"
     * @param string limit Bound the order input to the "limit" elements
     *
     * @return mixed
     */
    public getOrders(start = '0', limit = '10', courier_id: string, date_start: string) {

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
