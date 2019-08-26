const crypto = require('crypto');
import axios from 'axios';
import { ErrorSys } from "@a-a-game-studio/aa-components/aLib";

export class Client {
    /**
     * @var string
     */
    private host: string = 'https://kassa.komtet.ru';

    /**
     * @var string
     */
    private partner: string = null;

    /**
     * @var string
     */
    private key: string;

    /**
     * @var string
     */
    private secret: string;

    /**
     * @var LoggerInterface
     */
    private logger: any;

    /**
     * @var array A list of headers to be masked in logs
     */
    private maskedHeaders: string[] = ['Authorization', 'X-HMAC-Signature'];

    private errorSys: ErrorSys;

    /**
     * @param string $key Shop ID
     * @param string $secret Secret key
     * @param LoggerInterface $logger PSR Logger
     *
     * @return Client
     */
    constructor(errorSys: ErrorSys, key: string, secret: string) {
        this.key = key;
        this.secret = secret;
        this.errorSys = errorSys;

    }

    /**
     * @param string value
     *
     * @return Client
     */
    public  setHost(value: string) {
        this.host = value;

        return this;
    }

    /**
     * @param string value
     *
     * @return Client
     */
    public  setPartner(value: string) {
        this.partner = value;

        return this;
    }

    /**
     * Аналог из php
     * @param str 
     * @param key 
     */
    private hash_hmac(str: string, key: string): string {
        return crypto.createHmac('sha1', key).update(str).hmac.digest('binary');
    }

    /**
     * @param string $path
     * @param mixed $data
     *
     * @return mixed
     */
    public  async sendRequest(path: string, data?: any, method?: any) {

        let resp: any;
        let url: string;
        let signature: string;

        url = this.host + `/` + path;

        data = JSON.stringify(data);

        if (!method) {
            method = (data !== null) ? 'POST' : 'GET';
        }


        //$signature = hash_hmac('md5', $method.$url. ($data ? $data : ''), this.secret);
        signature = this.hash_hmac(method + url + (data ? data : ''), this.secret);

        let headers = [
            'Accept: application/json',
            `Authorization: ${this.key}`,
            `X-HMAC-Signature: ${signature}`
        ];

        if (this.partner) {
            headers.push(`X-Partner-ID: ${this.partner}`);
        }

        if (['POST', 'PUT'].includes(method)) {
            headers.push(`Content-Type: application/json`);
        }

        try {

            resp = await axios({
                method: method,
                url: url,
                headers: headers,
                data: data
            });

        } catch (e) {
            this.errorSys.error('Komtet.Client.sendRequest', String(e));
        }


        return resp.data;
    }



}
