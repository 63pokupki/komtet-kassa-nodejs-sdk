import { OrderPosition } from "./OrderPosition";
import { Payment } from './Payment';


/**
 * This file is part of the komtet/kassa-sdk library
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */



export class Order {
    /**
     * @var int
     */
    private order_id: number;

    /**
     * @var string
     */
    private state: string;

    /**
     * @var string
     */
    private sno: string;

    /**
     * @var bool
     */
    private is_paid: boolean = false;

    /**
     * @var string
     */
    private description: string = '';

    /**
     * @var OrderPosition[]
     */
    private items: OrderPosition[] = [];

    /**
     * @var string
     */
    private client_name: string;

    /**
     * @var string
     */
    private client_address: string;

    /**
     * @var string
     */
    private client_phone: string;

    /**
     * @var string
     */
    private client_email: string;

    /**
     * @var string
     */
    private date_start: string;

    /**
     * @var string
     */
    private date_end: string;

    /**
     * @var string
     */
    private callback_url: string;

    /**
     * @var int
     */
    private courier_id: number;

    /**
     * @var Payment
     */
    private payment_type: string;

    /**
     * @var int|float
     */
    private prepayment: number;

    /**
     * @param int oid A unique order id in a shop
     * @param string state Order status
     * @param string sno Tax system
     * @param bool is_paid Payment status
     * @param int|float prepayment Prepayment
     * @param Payment payment_type Payment type
     *
     * @return Order
     */
    constructor(order_id: number, state: string, sno: string, is_paid: boolean,
        prepayment: number = 0, payment_type = Payment.TYPE_CARD) {
        this.order_id = order_id;
        this.is_paid = is_paid;

        this.state = state;
        this.sno = sno;

        this.prepayment = prepayment;
        this.payment_type = payment_type;
    }

    /**
     * @param string address Address of the recipient
     * @param string phone Phone of the recipient
     * @param string email Email of the recipient
     * @param string name Name of the recipient
     *
     */
    public setClient(address: string, phone: string, email: string, name: string) {
        this.client_address = address;
        this.client_phone = phone;

        this.client_email = email;
        this.client_name = name;
    }
    /**
     * @param string date_start Initial order delivery time
     * @param string date_end Final order delivery time
     *
     */
    public setDeliveryTime(date_start: string, date_end: string) {
        this.date_start = date_start;
        this.date_end = date_end;
    }

    /**
     * @param string description Order comment
     *
     */
    public setDescription(description: string) {
        this.description = description;
    }

    /**
     * @param string oid Item identifier
     * @param string name Item
     * @param int|float price Item price in the check
     * @param int|float quantity Number of items
     * @param int|float total Item total value
     * @param string vat Tax rate
     * @param string type Order type
     *
     */
    public addPosition(orderPosition: OrderPosition) {
        this.items.push(orderPosition)
    }

    /**
     * @param string callback_url callback url for Order
     *
     */
    public setCallbackUrl(callback_url: string) {
        this.callback_url = callback_url;
    }

    /**
     * @param int courier_id ID courier
     *
     */
    public setCourierId(courier_id: number) {
        this.courier_id = courier_id;
    }

    /**
     * @return array
     */
    public getPositions(): OrderPosition[] {
        return this.items;
    }

    /**
     * @return int|float
     */
    public getTotalPositionsSum(): number {
        let positionsTotal = 0;
        for (let i = 0; i < this.items.length; i++) {
            positionsTotal += this.items[i].getTotal();
        }

        return positionsTotal;
    }

    /**
     *
     * Применение к позициям единой общей скидки на чек (например скидочного купона)
     *
     * @param float checkDiscount
     *
     * @return Order
     */
    public applyDiscount(checkDiscount): Order {
        let positionsTotal = this.getTotalPositionsSum();
        let checkPositions = this.getPositions();

        let positionsCount = checkPositions.length;
        let accumulatedDiscount = 0;

        let curPositionDiscount = 0;

        /* TODO: вохможно тут не правильно округляется */
        for (let index = 0; index < checkPositions.length; index++) {
            if (index < positionsCount - 1) {
                let positionPricePercent = checkPositions[index].getTotal() / positionsTotal * 100;
                curPositionDiscount = Number((checkDiscount * positionPricePercent / 100).toFixed(2));
                accumulatedDiscount += curPositionDiscount;
            } else {
                curPositionDiscount = Number((checkDiscount - accumulatedDiscount).toFixed(2));
            }

            checkPositions[index].setTotal(checkPositions[index].getTotal() - curPositionDiscount);
        }

        return this;
    }

    /**
     * @return array
     */
    public asArray() {
        let result = {
            'order_id': this.order_id,
            'client_address': this.client_address,
            'client_phone': this.client_phone,
            'is_paid': this.is_paid,
            'description': this.description,
            'date_start': this.date_start,
            'date_end': this.date_end,
            'items': this.items.map((item: OrderPosition, key) => {
                return item.asArray();
            }),
        };

        if (this.client_email !== null) {
            result['client_email'] = this.client_email;
        }

        if (this.client_name !== null) {
            result['client_name'] = this.client_name;
        }

        if (this.sno !== null) {
            result['sno'] = this.sno;
        }

        if (this.state !== null) {
            result['state'] = this.state;
        }

        if (this.courier_id !== null) {
            result['courier_id'] = this.courier_id;
        }

        if (this.callback_url !== null) {
            result['callback_url'] = this.callback_url;
        }

        if (this.payment_type !== null) {
            result['payment_type'] = this.payment_type;
        }

        if (this.prepayment !== null) {
            result['prepayment'] = this.prepayment;
        }

        return result;
    }
}
