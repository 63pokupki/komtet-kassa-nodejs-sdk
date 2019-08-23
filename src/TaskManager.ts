import { Client } from './Client';
/**
* This file is part of the komtet/kassa-sdk library
*
* For the full copyright and license information, please view the LICENSE
* file that was distributed with this source code.
*/


export  class TaskManager
{
    /**
     * @var Client
     */
    private client: Client;

    /**
     * @param Client $client
     */
    constructor(client: Client)
    {
        this.client = client;
    }

    /**
     * Returns info about the task
     *
     * @param string $taskId Task ID
     *
     * @return mixed
     */
    public  async getTaskInfo(taskId: string): Promise<any>
    {
        return this.client.sendRequest(`api/shop/v1/tasks/` + taskId);
    }
}
