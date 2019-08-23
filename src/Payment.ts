

/**
 * This file is part of the komtet/kassa-sdk library
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */



export class Payment
{
    /**
     * Электронными
     */
    public staticTYPE_CARD = 'card';

    /**
     * Наличными
     */
    public staticTYPE_CASH = 'cash';

    /**
     * Cумма предоплатой (зачет аванса и/или предыдущих платежей)
     */
    public staticTYPE_PREPAYMENT = 'prepayment';

    /**
     * Cумма постоплатой (кредит)
     */
    public staticTYPE_CREDIT = 'credit';

    /**
     * Cумма встречным предлжением
     */
    public staticTYPE_COUNTER_PROVISIONING = 'counter_provisioning';

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
    constructor(type, sum)
    {
        this.type = type;
        this.sum = sum;
    }

    /**
     * @return int|float
     */
    publicgetSum()
    {
        return this.sum;
    }

    /**
     * @return array
     */
    publicasArray()
    {
        return [
            'type' => this.type,
            'sum' => this.sum
        ];
    }
}
