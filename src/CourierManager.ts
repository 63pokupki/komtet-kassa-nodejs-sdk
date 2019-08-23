import { Client } from "./Client";


/**
* This file is part of the komtet/kassa-sdk library
*
* For the full copyright and license information, please view the LICENSE
* file that was distributed with this source code.
*/



export class CourierManager {
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
     * Feed back the information about  couriers
     *
     * @param string start Launch the couriers input from "start"
     * @param string limit Bound the couriers input to the "limit" elements
     *
     * @return mixed
     */
    public getCouriers(start = '0', limit = '10') {
        let path = `api/shop/v1/couriers?start=${start}&limit=${limit}`;
        return this.client.sendRequest(path);
    }

}
