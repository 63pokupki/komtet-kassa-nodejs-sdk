/**
 * This file is part of the komtet/kassa-sdk library
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/**
* Агент по предмету расчета
*/
export class Agent {
    /**
     * Оказание услуг покупателю (клиенту) пользователем, являющимся банковским платежным агентом
     * банковским платежным агентом
     */
    public static BANK_PAYMENT_AGENT = 'bank_payment_agent';

    /**
     * Оказание услуг покупателю (клиенту) пользователем, являющимся банковским платежным агентом
     * банковским платежным субагентом
     */
    public static BANK_PAYMENT_SUBAGENT = 'bank_payment_subagent';

    /**
     * Оказание услуг покупателю (клиенту) пользователем, являющимся платежным агентом
     */
    public static PAYMENT_AGENT = 'payment_agent';

    /**
     * Оказание услуг покупателю (клиенту) пользователем, являющимся платежным субагентом
     */
    public static PAYMENT_SUBAGENT = 'payment_subagent';

    /**
     * Осуществление расчета с покупателем (клиентом) пользователем, являющимся поверенным
     */
    public static SOLICITOR = 'solicitor';

    /**
     * Осуществление расчета с покупателем (клиентом) пользователем, являющимся комиссионером
     */
    public static COMMISSIONAIRE = 'commissionaire';

    /**
     * Осуществление расчета с покупателем (клиентом) пользователем, являющимся агентом и не
     * являющимся банковским платежным агентом (субагентом), платежным агентом (субагентом),
     * поверенным, комиссионером
     */
    public static AGENT = 'agent';

    /**
     * @var array
     */
    private agent_info: {};


    constructor(agent_type: any, phone?: string, name?: string, inn?: string) {
        this.agent_info = {
            'type': agent_type
        }

        if (name) {
            this.setSupplierInfo(name, [phone], inn);
        }
    }

    /**
     * Передача атрибутов поставщика
     *
     * @param string $name
     * @param array $phones
     * @param string $inn
     *
     * @return Agent
     */
    public setSupplierInfo(name: string, phones: string[], inn: string) {
        this.agent_info['supplier_info'] = {
            'phones': phones,
            'name': name,
            'inn': inn
        }
        return this;
    }

    /**
     * Передача атрибутов платежного агента
     *
     * @param string $operation
     * @param array $phones
     *
     * @return Agent
     */
    public setPayingAgentInfo(operation: string, phones: string[]) {

        this.agent_info['paying_agent'] = {
            'operation': operation,
            'phones': phones
        };
        return this;
    }


    /**
     * Передача атрибутов оператора по приему платежей
     *
     * @param array $phones
     *
     * @return Agent
     */
    public setReceivePaymentsOperatorInfo(phones: string[]) {

        this.agent_info['receive_payments_operator'] = {
            'phones': phones
        };

        return this;
    }

    /**
     * Передача атрибутов оператора перевода
     *
     * @param string $name
     * @param array $phones
     * @param string $address
     * @param string $inn
     *
     * @return Agent
     */
    public setMoneyTransferOperatorInfo(name: string, phones: string[], address: string[], inn: string) {

        this.agent_info['money_transfer_operator'] = {
            'name': name,
            'phones': phones,
            'address': address,
            'inn': inn,
        };

        return this;
    }

    /**
     * @return array
     */
    public asArray() {
        return this.agent_info;
    }
}
