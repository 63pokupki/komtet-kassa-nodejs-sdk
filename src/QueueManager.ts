import { Client } from './Client';
import { CorrectionCheck } from './CorrectionCheck';


/**
* This file is part of the komtet/kassa-sdk library
*
* For the full copyright and license information, please view the LICENSE
* file that was distributed with this source code.
*/



export class QueueManager {
    /**
     * @var Client
     */
    private client: Client;

    /**
     * @var array List of registered queues
     */
    private queues: {[key: string]: any;} = {}

    /**
     * @var string|null Name of the default queue
     */
    private defaultQueue: string = null;

    /**
     * @param Client client
     */
    constructor(client: Client) {
        this.client = client;
    }

    /**
     * Registers an queue
     *
     * @param string name Queue name
     * @param string id Queue ID
     *
     * @return QueueManager
     */
    public registerQueue(name: string, id: string) {
        this.queues[name] = id;

        return this;
    }

    /**
     * Sets default queue
     *
     * @param string name Queue name
     *
     * @return QueueManager
     */
    public setDefaultQueue(name: string): QueueManager {
        if (!this.hasQueue(name)) {
            throw `Unknown queue "${name}"`;
        }

        this.defaultQueue = name;

        return this;
    }

    /**
     * Whether queue registered
     *
     * @param string name Queue name
     *
     * @return bool
     */
    public hasQueue(name: string): boolean {
        return this.queues.includes(name);
    }

    /**
     * Sends a check to queue
     *
     * @param Check|CorrectionCheck check Check instance
     * @param string queueName Queue name
     *
     * @return mixed
     */
    public async putCheck(check: CorrectionCheck, queueName: string) {
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

    /**
     * Whether queue active
     *
     * @param string name Queue name
     *
     * @return bool
     */
    public async isQueueActive(name: string): Promise<boolean> {

        let resp = false

        if (!this.hasQueue(name)) {
            throw `Unknown queue "${name}"`;
        }
        let path = `api/shop/v1/queues/${this.queues[name]}`;

        try {
            let data = await this.client.sendRequest(path);

            if (data['state']) {
                resp = true;
            }

        } catch (e) {

        }


        return resp;
    }
}
