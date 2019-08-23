import { Cashier } from "./Cashier";
import { Buyer } from './Buyer';
import { Payment } from "./Payment";
import { Position } from './Position';


/**
 * This file is part of the komtet/kassa-sdk library
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */



export class Check {
    public static INTENT_SELL = 'sell';
    public static INTENT_SELL_RETURN = 'sellReturn';
    public static INTENT_BUY = 'buy';
    public static INTENT_BUY_RETURN = 'buyReturn';

    /**
     * @var string
     */
    private id;

    /**
     * @var string
     */
    private userContact: string;

    /**
     * @var string
     */
    private intent: string;

    /**
     * @var int
     */
    private taxSystem: number;

    /**
     * @var string
     */
    private paymentAddress: string;

    /**
     * @var bool
     */
    private shouldPrint = false;

    /**
     * @var Payment[]
     */
    private payments: Payment[] = [];

    /**
     * @var Position[]
     */
    private positions = [];

    /**
     * @var buyer
     */
    private buyer: Buyer;

    /**
     * @var Cashier
     */
    private cashier: Cashier;

    /**
     * @param string id An unique ID provided by an online store
     * @param string userContact User E-Mail or phone
     * @param string intent Check::INTENT_SELL, Check::INTENT_SELL_RETURN, Check::INTENT_BUY, or Check::INTENT_BUY_RETURN
     * @param int    taxSystem See Check::TS_*
     * @param string paymentAddress
     *
     * @return Check
     */
    constructor(id: string, userContact: string, intent: string, taxSystem: number, paymentAddress: string) {
        this.id = id;
        this.userContact = userContact;
        this.intent = intent;
        this.taxSystem = taxSystem;
        this.paymentAddress = paymentAddress;
    }

    /**
     * @param string id
     * @param string userContact
     * @param int    taxSystem
     * @param string paymentAddress
     *
     * @return Check
     */
    public static createSell(id: string, userContact: string, taxSystem: number, paymentAddress: string): Check {
        return new Check(id, userContact, Check.INTENT_SELL, taxSystem, paymentAddress);
    }

    /**
     * @param string id
     * @param string userContact
     * @param int    taxSystem
     * @param string paymentAddress
     *
     * @return Check
     */
    public static createSellReturn(id: string, userContact: string, taxSystem: number, paymentAddress: string): Check {
        return new Check(id, userContact, Check.INTENT_SELL_RETURN, taxSystem,
            paymentAddress);
    }

    /**
     * @param string id
     * @param string userContact
     * @param int    taxSystem
     * @param string paymentAddress
     *
     * @return Check
     */
    public static createBuy(id: string, userContact: string, taxSystem: number, paymentAddress: string): Check {
        return new Check(id, userContact, Check.INTENT_BUY, taxSystem, paymentAddress);
    }

    /**
     * @param string id
     * @param string userContact
     * @param int    taxSystem
     * @param string paymentAddress
     *
     * @return Check
     */
    public static createBuyReturn(id: string, userContact: string, taxSystem: number, paymentAddress: string): Check {
        return new Check(id, userContact, Check.INTENT_BUY_RETURN, taxSystem,
            paymentAddress);
    }

    /**
     * @param bool value
     *
     * @return Check
     */
    public setShouldPrint(value: boolean): Check {
        this.shouldPrint = Boolean(value);

        return this;
    }

    /**
     * @param Payment payment
     *
     * @return Check
     */
    public addPayment(payment: Payment): Check {
        this.payments.push(payment);
        return this;
    }

    /**
     * @param Buyer buyer
     *
     * @return Check
     */
    public addBuyer(buyer: Buyer): Check {
        this.buyer = buyer;

        return this;
    }

    /**
     * @param Cashier cashier
     *
     * @return Check
     */
    public addCashier(cashier: Cashier): Check {
        this.cashier = cashier;

        return this;
    }

    /**
     * @param Position position
     *
     * @return Check
     */
    public addPosition(position: Position): Check {
        this.positions.push(position);

        return this;
    }

    /**
     * @return int|float
     */
    public getTotalPositionsSum(): number {
        let positionsTotal = 0;

        for (let i = 0; i < this.positions.length; i++) {
            positionsTotal += this.positions[i].getTotal();
        }

        return positionsTotal;
    }

    /**
     * @return array
     */
    public getPositions(): Position[] {
        return this.positions;
    }

    /**
     *
     * Применение к позициям единой общей скидки на чек (например скидочного купона)
     *
     * @param float checkDiscount
     *
     * @return Check
     */
    public applyDiscount(checkDiscount: number): Check {
        let curPositionDiscount: number;
        let positionsTotal = this.getTotalPositionsSum();
        let checkPositions = this.getPositions();

        let positionsCount = checkPositions.length;
        let accumulatedDiscount = 0;

        for (let index = 0; index < positionsCount; index++) {
            if (index < positionsCount - 1) {
                let positionPricePercent = this.positions[index].getTotal() / positionsTotal * 100;
                /* TODO: проверить тут округление */
                curPositionDiscount = Number((checkDiscount * positionPricePercent / 100).toFixed(2));
                accumulatedDiscount += curPositionDiscount;
            }
            else {
                curPositionDiscount = Number((checkDiscount - accumulatedDiscount).toFixed(2));
            }

            this.positions[index].setTotal(this.positions[index].getTotal() - curPositionDiscount);
        }

        return this;
    }

    /**
     * @return array
     */
    public asArray() {
        let result: {} = {
            'task_id': this.id,
            'user': this.userContact,
            'print': this.shouldPrint,
            'intent': this.intent,
            'sno': this.taxSystem,
            'payments': this.payments.map((payment: Payment, key) => {
                return payment.asArray();
            }),
            'positions': this.positions.map((position: Position, key) => {
                return position.asArray();
            }),
        };

        if (this.buyer !== null) {
            result['client'] = this.buyer.asArray();
        }

        if (this.cashier !== null) {
            result['cashier'] = this.cashier.asArray();
        }

        if (this.paymentAddress !== null) {
            result['payment_address'] = this.paymentAddress;
        }

        return result;
    }
}
