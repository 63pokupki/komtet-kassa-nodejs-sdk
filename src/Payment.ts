

/**
 * This file is part of the komtet/kassa-sdk library
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */



export class Payment {
    /**
     * Электронными
     */
    public  static TYPE_CARD = 'card';

    /**
     * Наличными
     */
    public  static TYPE_CASH = 'cash';

    /**
     * Cумма предоплатой (зачет аванса и/или предыдущих платежей)
     */
    public  static TYPE_PREPAYMENT = 'prepayment';

    /**
     * Cумма постоплатой (кредит)
     */
    public  static TYPE_CREDIT = 'credit';

    /**
     * Cумма встречным предлжением
     */
    public  static TYPE_COUNTER_PROVISIONING = 'counter_provisioning';

    /**
     * @var string
     */
    private type;

    /**
     * @var int|float
     */
    private sum;

    /**
     * @param string type Form of payment
     * @param int|float sum Amount
     *
     * @return Payment
     */
    constructor(type, sum) {
        this.type = type;
        this.sum = sum;
    }

    /**
     * @return int|float
     */
    public  getSum() {
        return this.sum;
    }

    /**
     * @return array
     */
    public  asArray() {
        return {
            'type': this.type,
            'sum': this.sum
        };
    }
}
