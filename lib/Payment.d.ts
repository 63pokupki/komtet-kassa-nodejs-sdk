export declare class Payment {
    static TYPE_CARD: string;
    static TYPE_CASH: string;
    static TYPE_PREPAYMENT: string;
    static TYPE_CREDIT: string;
    static TYPE_COUNTER_PROVISIONING: string;
    private type;
    private sum;
    constructor(type: string, sum: number);
    getSum(): number;
    asArray(): {
        'type': string;
        'sum': number;
    };
}
