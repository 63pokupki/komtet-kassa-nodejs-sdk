/**
 * This file is part of the komtet/kassa-sdk library
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/**
* Признак рассчета
*/
export class CalculationSubject
{
    /**
     * Товар, за исключением подакцизного товара
     */
    public  static  PRODUCT = 'product';

    /**
     * Подакцизный товар
     */
    public  static  PRODUCT_PRACTICAL = 'product_practical';

    /**
     * Работа
     */
    public  static  WORK = 'work';

    /**
     * Услуга
     */
    public  static  SERVICE = 'service';

    /**
     * Прием ставок при осуществлении деятельности по проведению азартных игр
     */
    public  static  GAMBLING_BET = 'gambling_bet';

    /**
     * Выплата денежных средств в виде выигрыша при осуществлении деятельности по проведению
     * азартных игр
     */
    public  static  GAMBLING_WIN = 'gambling_win';

    /**
     * Прием денежных средств при реализации лотерейных билетов, электронных лотерейных билетов,
     * приеме лотерейных ставок при осуществлении деятельности по проведению лотерей
     */
    public  static  LOTTERY_BET = 'lottery_bet';

    /**
     * Выплате денежных средств в виде выигрыша при осуществлении деятельности по проведению
     * лотерей
     */
    public  static  LOTTERY_WIN = 'lottery_win';

    /**
     * Предоставление прав на использование результатов интеллектуальной деятельности или средств
     * индивидуализации «ПРЕДОСТАВЛЕНИЕ РИД» или «РИД»
     */
    public  static  RID = 'rid';

    /**
     * Об авансе, задатке, предоплате, кредите, взносе в счет оплаты, пени, штрафе, вознаграждении,
     * бонусе и ином аналогичном предмете расчета
     */
    public  static  PAYMENT = 'payment';

    /**
     * Вознаграждении пользователя, являющегося платежным агентом (субагентом), банковским
     * платежным агентом (субагентом), комиссионером, поверенным или иным агентом
     */
    public  static  COMMISSION = 'commission';

    /**
     * О предмете расчета, состоящем из предметов, каждому из которых может быть присвоено
     * значение от «0» до «11» (0-11 -- это вышеперечисленные)
     */
    public  static  COMPOSITE = 'composite';

    /**
     * О предмете расчета, не относящемуся к предметам расчета, которым может быть присвоено
     * значение от «0» до «12» (0-12 -- это вышеперечисленные)
     */
    public  static  OTHER = 'other';

    /**
     * Передача имущественного права
     */
    public  static  PROPERTY_RIGHT = 'property_right';

    /**
     * Внереализационный доход
     */
    public  static  NON_OPERATING = 'non_operating';

    /**
     * Страховые взносы
     */
    public  static  INSURANCE = 'insurance';

    /**
     * Торговый сбор
     */
    public  static  SALES_TAX = 'sales_tax';

    /**
     * Курортный сбор
     */
    public  static  RESORT_FEE = 'resort_fee';
}
