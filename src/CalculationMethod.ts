/**
 * This file is part of the komtet/kassa-sdk library
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/**
* Cпособ рассчета
*/
export class CalculationMethod
{
    /**
     * Полная предварительная оплата до момента передачи предмета расчета «ПРЕДОПЛАТА 100 %»
     */
    public  static  PRE_PAYMENT_FULL = 'pre_payment_full';

    /**
     *  Частичная предварительная оплата до момента передачи предмета расчета - «ПРЕДОПЛАТА»
     */
    public  static  PRE_PAYMENT_PART = 'pre_payment_part';

    /**
     * Полная оплата, в том числе с учетом аванса (предварительной оплаты) в момент передачи
     * предмета расчета - «ПОЛНЫЙ РАСЧЕТ»
     */
    public  static  FULL_PAYMENT = 'full_payment';

    /**
     * Аванс
     */
    public  static  ADVANCE = 'advance';

    /**
     * Частичная оплата предмета расчета в момент его передачи с последующей оплатой в кредит -
     * «ЧАСТИЧНЫЙ РАСЧЕТ И КРЕДИТ»
     */
    public  static  CREDIT_PART = 'credit_part';

    /**
     * Оплата предмета расчета после его передачи с оплатой в кредит (оплата кредита) -
     * «ОПЛАТА КРЕДИТА»
     */
    public  static  CREDIT_PAY = 'credit_pay';

    /**
     * Передача предмета расчета без его оплаты в момент его передачи с последующей оплатой в
     * кредит - «ПЕРЕДАЧА В КРЕДИТ»
     */
    public  static  CREDIT = 'credit';
}
