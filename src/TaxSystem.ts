

/**
 * This file is part of the komtet/kassa-sdk library
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */



export class TaxSystem {
    /**
     * Common tax system
     */
    public static COMMON = 0;

    /**
    * Simplified tax system: Income
    */
    public static SIMPLIFIED_IN = 1;

    /**
     * Simplified tax system: Income - Outgo
     */
    public static SIMPLIFIED_IN_OUT = 2;

    /**
     * An unified tax on imputed income
     */
    public static UTOII = 3;

    /**
     * Unified social tax
     */
    public static UST = 4;

    /**
     * Patent
     */
    public static PATENT = 5;
}
