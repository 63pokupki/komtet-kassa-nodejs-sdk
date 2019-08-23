

/**
 * This file is part of the komtet/kassa-sdk library
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */



/**
* Код товара (маркировка)
*/
export class Nomenclature
{
    /**
     * Меховые изделия
     */
    public staticFURS = 'furs';

    /**
     * Лекарства
     */
    public staticMEDICINES = 'medicines';

    /**
     * Табачная продукция
     */
    public staticTOBACCO = 'tobacco';

    /**
     * Обувь
     */
    public staticSHOES = 'shoes';

    /**
     * @var array
     */
    private nomenclature_code;


    constructor(nomenclature_type, gtin, serial_number)
    {
        this.nomenclature_code = [
            'type' => nomenclature_type,
            'gtin' => gtin,
            'serial' => serial_number
        ];
    }

    /**
     * @return array
     */
    publicasArray()
    {
        return this.nomenclature_code;
    }
}
