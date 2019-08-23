

/**
 * This file is part of the komtet/kassa-sdk library
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */



/**
* Код товара (маркировка)
*/
export class Nomenclature {
    /**
     * Меховые изделия
     */
    public static FURS = 'furs';

    /**
     * Лекарства
     */
    public static MEDICINES = 'medicines';

    /**
     * Табачная продукция
     */
    public static TOBACCO = 'tobacco';

    /**
     * Обувь
     */
    public static SHOES = 'shoes';

    /**
     * @var array
     */
    private nomenclature_code: {};


    constructor(nomenclature_type: string, gtin: string, serial_number: string) {
        this.nomenclature_code = {
            'type': nomenclature_type,
            'gtin': gtin,
            'serial': serial_number
        };
    }

    /**
     * @return array
     */
    public asArray(): {} {
        return this.nomenclature_code;
    }
}
