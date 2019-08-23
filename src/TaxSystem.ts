

/**
 * This file is part of the komtet/kassa-sdk library
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */



export class TaxSystem
{
    /**
     * Common tax system
     */
    public staticCOMMON = 0;

    /**
    * Simplified tax system: Income
    */
    public staticSIMPLIFIED_IN = 1;

    /**
     * Simplified tax system: Income - Outgo
     */
    public staticSIMPLIFIED_IN_OUT = 2;

    /**
     * An unified tax on imputed income
     */
    public staticUTOII = 3;

    /**
     * Unified social tax
     */
    public staticUST = 4;

    /**
     * Patent
     */
    public staticPATENT = 5;
}
