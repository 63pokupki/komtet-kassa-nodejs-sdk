import { Vat } from './Vat';


/**
 * This file is part of the komtet/kassa-sdk library
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */



export class OrderPosition {
    /**
     * @var string
     */
    private oid: string;

    /**
     * @var string
     */
    private name: string;

    /**
     * @var int|float
     */
    private price: number;

    /**
     * @var int|float
     */
    private quantity: number;

    /**
     * @var int|float
     */
    private total: number;

    /**
     * @var Vat
     */
    private vat: Vat;

    /**
     * @var string
     */
    private type: string;

    /**
     * @var string
     */
    private measure_name: string;

    /**
     * @param string oid Item identifier
     * @param string name Item
     * @param int|float price Item price in the check
     * @param int|float quantity Number of items
     * @param int|float total Item total value
     * @param string vat Tax rate
     * @param string type Order type
     *
     * @return OrderPosition
     */
    constructor(args: {
        vat: string,
        total: number,
        measure_name: string,
        type: string,
        quantity: number,
        oid: string,
        name: string,
        price: number,
    }) {


        if (args['total'] == null) {
            args['total'] = args['price'] * args['quantity'];
        }

        this.oid = args['oid'];
        this.name = args['name'];
        this.price = args['price'];
        this.quantity = args['quantity'];
        this.total = args['total'];
        this.vat = new Vat(args['vat']);

        if (args['measure_name'] !== null) {
            this.measure_name = args['measure_name'];
        }

        if (args['type'] !== null) {
            this.type = args['type'];
        }
    }

    /**
     * @return int|float
     */
    public getTotal(): number {
        return this.total;
    }

    /**
     * @param float total
     *
     * @return OrderPosition
     */
    public setTotal(total: number): OrderPosition {
        this.total = total;

        return this;
    }

    /**
     * @return array
     */
    public asArray() {
        let result: {[key: string]: any;} = {
            'order_item_id': this.oid,
            'name': this.name,
            'price': this.price,
            'quantity': this.quantity,
            'total': this.total,
            'vat': this.vat.getRate()
        };

        if (this.measure_name !== null) {
            result['measure_name'] = this.measure_name;
        }

        if (this.type !== null) {
            result['type'] = this.type;
        }

        return result;
    }
}
