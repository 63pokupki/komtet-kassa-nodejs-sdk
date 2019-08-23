"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Agent {
    constructor(agent_type, phone, name, inn) {
        this.agent_info = {
            'type': agent_type
        };
        if (name) {
            this.setSupplierInfo(name, [phone], inn);
        }
    }
    setSupplierInfo(name, phones, inn) {
        this.agent_info['supplier_info'] = {
            'phones': phones,
            'name': name,
            'inn': inn
        };
        return this;
    }
    setPayingAgentInfo(operation, phones) {
        this.agent_info['paying_agent'] = {
            'operation': operation,
            'phones': phones
        };
        return this;
    }
    setReceivePaymentsOperatorInfo(phones) {
        this.agent_info['receive_payments_operator'] = {
            'phones': phones
        };
        return this;
    }
    setMoneyTransferOperatorInfo(name, phones, address, inn) {
        this.agent_info['money_transfer_operator'] = {
            'name': name,
            'phones': phones,
            'address': address,
            'inn': inn,
        };
        return this;
    }
    asArray() {
        return this.agent_info;
    }
}
Agent.BANK_PAYMENT_AGENT = 'bank_payment_agent';
Agent.BANK_PAYMENT_SUBAGENT = 'bank_payment_subagent';
Agent.PAYMENT_AGENT = 'payment_agent';
Agent.PAYMENT_SUBAGENT = 'payment_subagent';
Agent.SOLICITOR = 'solicitor';
Agent.COMMISSIONAIRE = 'commissionaire';
Agent.AGENT = 'agent';
exports.Agent = Agent;
//# sourceMappingURL=Agent.js.map