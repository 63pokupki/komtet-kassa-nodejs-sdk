

/**
 * This file is part of the komtet/kassa-sdk library
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */



export class Correction {

    public static TYPE_SELF = 'self';
    public static TYPE_FORCED = 'forced';

    /**
     * @var string
     */
    private type: string;

    /**
     * @var string
     */
    private date: string;

    /**
     * @var string
     */
    private document: string;

    /**
     * @var string
     */
    private description: string;

    /**
     * @param string type Correction type (Correction::TYPE_*)
     * @param string date Document date (yyyy-mm-dd)
     * @param string document Document number
     * @param string description Description
     *
     * @return Correction
     */
    constructor(type: string, date: string, document: string, description: string) {
        this.type = type;
        this.date = date;
        this.document = document;
        this.description = description;
    }

    /**
     * @param string date Document date (yyyy-mm-dd)
     * @param string document Document number
     * @param string description Description
     *
     * @return Correction
     */
    public static createSelf(type: string, date: string, document: string, description: string) {
        return new Correction(Correction.TYPE_SELF, date, document, description);
    }

    /**
     * @param string date Document date (yyyy-mm-dd)
     * @param string document Document number
     * @param string description Description
     *
     * @return Correction
     */
    public static createForced(type: string, date: string, document: string, description: string) {
        return new Correction(Correction.TYPE_FORCED, date, document, description);
    }

    /**
     * @return array
     */
    public asArray() {
        return {
            'type': this.type,
            'date': this.date,
            'document': this.document,
            'description': this.description
        };
    }
}
