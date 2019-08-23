/**
 * This file is part of the komtet/kassa-sdk library
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

export class Buyer {
    /**
     * @var string
     */
    private name: string;

    /**
     * @var string
     */
    private inn: string;

    /**
     * @param string name
     * @param string inn
     *
     * @return Buyer
     */
    constructor(name?: string, inn?: string) {
        this.name = name;
        this.inn = inn;
    }

    /**
     * @param string name
     *
     * @return Buyer
     */
    public  setName(name: string) {
        this.name = name;
        return this;
    }

    /**
     * @param string inn
     *
     * @return Buyer
     */
    public  setINN(inn: string) {
        this.inn = inn;
        return this;
    }

    /**
     * @return array
     */
    public  asArray() {
        let data: {[key: string]: any} = {};

        if (this.name) {
            data['name'] = this.name;
        }

        if (this.inn) {
            data['inn'] = this.inn;
        }

        return data;
    }
}
