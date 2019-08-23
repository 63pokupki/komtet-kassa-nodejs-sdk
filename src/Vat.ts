

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
    public  static RATE_NO = 'no';

    /**
     * 0%
     */
    public  static RATE_0 = '0';

    /**
     * 10%
     */
    public  static RATE_10 = '10';

    /**
     * 20%
     */
    public  static RATE_20 = '20';

    /**
     * 10/110
     */
    public  static RATE_110 = '110';

    /**
     * 20/120
     */
    public  static RATE_120 = '120';

    private rate;

    /**
     * @param string|int|float rate See Vat::RATE_*
     *
     * @return Vat
     */
    constructor(rate: any)
    {
        /* TODO: тут чтото странное очень */
        if (is_float(rate) && rate < 1 && rate != 0.0) {
            rate = number_format(rate, 2);
        }

        if (!is_string(rate)) {
            rate = (string) rate;
        }

        rate = str_replace(['0.', '%'], '', rate);

        switch (rate) {
            case '10/110':
                rate = Vat.RATE_110;
                break;
            case '18':
                rate = Vat.RATE_20;
                break;
            case '118':
                rate = Vat.RATE_120;
                break;
            case '18/118':
                rate = Vat.RATE_120;
                break;
            case '20/120':
                rate = Vat.RATE_120;
                break;
            default:
                if (!in_array(rate, [
                    Vat.RATE_NO,
                    Vat.RATE_0,
                    Vat.RATE_10,
                    Vat.RATE_20,
                    Vat.RATE_110,
                    Vat.RATE_120,
                ])) {
                    throw new \InvalidArgumentException(sprintf('Unknown VAT rate: %s', rate));
                }
        }

        this.rate = rate;
    }

    /**
     * @return string
     */
    public  getRate()
    {
        return this.rate;
    }
}
