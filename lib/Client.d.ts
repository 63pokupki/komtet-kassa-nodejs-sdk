import { ErrorSys } from './ErrorSys';
export declare class Client {
    private host;
    private partner;
    private key;
    private secret;
    private logger;
    private maskedHeaders;
    private errorSys;
    constructor(errorSys: ErrorSys, key: string, secret: string);
    setHost(value: string): this;
    setPartner(value: string): this;
    private hash_hmac;
    sendRequest(path: string, data?: any, method?: any): Promise<any>;
}
