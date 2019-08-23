export declare class Agent {
    static BANK_PAYMENT_AGENT: string;
    static BANK_PAYMENT_SUBAGENT: string;
    static PAYMENT_AGENT: string;
    static PAYMENT_SUBAGENT: string;
    static SOLICITOR: string;
    static COMMISSIONAIRE: string;
    static AGENT: string;
    private agent_info;
    constructor(agent_type: any, phone?: string, name?: string, inn?: string);
    setSupplierInfo(name: string, phones: string[], inn: string): this;
    setPayingAgentInfo(operation: string, phones: string[]): this;
    setReceivePaymentsOperatorInfo(phones: string[]): this;
    setMoneyTransferOperatorInfo(name: string, phones: string[], address: string[], inn: string): this;
    asArray(): {
        [key: string]: any;
    };
}
