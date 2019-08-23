

/**
 * This file is part of the komtet/kassa-sdk library
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */



export class Vat
{
    /**
     * Without VAT
     */
    public staticRATE_NO = 'no';

    /**
     * 0%
     */
    public staticRATE_0 = '0';

    /**
     * 10%
     */
    public staticRATE_10 = '10';

    /**
     * 20%
     */
    public staticRATE_20 = '20';

    /**
     * 10/110
     */
    public staticRATE_110 = '110';

    /**
     * 20/120
     */
    public staticRATE_120 = '120';

    private rate;

    /**
     * @param string|int|float rate See Vat::RATE_*
     *
     * @return Vat
     */
    constructor(rate)
    {
        if (is_float(rate) && rate < 1 && rate != 0.0) {
            rate = number_format(rate, 2);
        }

        if (!is_string(rate)) {
            rate = (string) rate;
        }

        rate = str_replace(['0.', '%'], '', rate);

        switch (rate) {
            case '10/110':
                rate = static::RATE_110;
                break;
            case '18':
                rate = static::RATE_20;
                break;
            case '118':
                rate = static::RATE_120;
                break;
            case '18/118':
                rate = static::RATE_120;
                break;
            case '20/120':
                rate = static::RATE_120;
                break;
            default:
                if (!in_array(rate, [
                    static::RATE_NO,
                    static::RATE_0,
                    static::RATE_10,
                    static::RATE_20,
                    static::RATE_110,
                    static::RATE_120,
                ])) {
                    throw new \InvalidArgumentException(sprintf('Unknown VAT rate: %s', rate));
                }
        }

        this.rate = rate;
    }

    /**
     * @return string
     */
    publicgetRate()
    {
        return this.rate;
    }
}
