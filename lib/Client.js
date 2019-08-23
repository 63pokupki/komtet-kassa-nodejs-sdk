"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const crypto = require('crypto');
const axios_1 = require("axios");
class Client {
    constructor(errorSys, key, secret) {
        this.host = 'https://kassa.komtet.ru';
        this.partner = null;
        this.maskedHeaders = ['Authorization', 'X-HMAC-Signature'];
        this.key = key;
        this.secret = secret;
        this.errorSys = errorSys;
    }
    setHost(value) {
        this.host = value;
        return this;
    }
    setPartner(value) {
        this.partner = value;
        return this;
    }
    hash_hmac(str, key) {
        return crypto.createHmac('sha1', key).update(str).hmac.digest('binary');
    }
    async sendRequest(path, data, method) {
        let resp;
        let url;
        let signature;
        url = this.host + `/` + path;
        data = JSON.stringify(data);
        if (!method) {
            method = (data !== null) ? 'POST' : 'GET';
        }
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
            resp = await axios_1.default({
                method: method,
                url: url,
                headers: headers,
                data: data
            });
        }
        catch (e) {
            this.errorSys.error('Komtet.Client.sendRequest', e);
        }
        return resp.data;
    }
}
exports.Client = Client;
//# sourceMappingURL=Client.js.map