import { Cashier } from "./Cashier";
import { Buyer } from './Buyer';
import { Payment } from "./Payment";
import { Position } from './Position';
export declare class Check {
    static INTENT_SELL: string;
    static INTENT_SELL_RETURN: string;
    static INTENT_BUY: string;
    static INTENT_BUY_RETURN: string;
    private id;
    private userContact;
    private intent;
    private taxSystem;
    private paymentAddress;
    private shouldPrint;
    private payments;
    private positions;
    private buyer;
    private cashier;
    constructor(id: string, userContact: string, intent: string, taxSystem: number, paymentAddress: string);
    static createSell(id: string, userContact: string, taxSystem: number, paymentAddress: string): Check;
    static createSellReturn(id: string, userContact: string, taxSystem: number, paymentAddress: string): Check;
    static createBuy(id: string, userContact: string, taxSystem: number, paymentAddress: string): Check;
    static createBuyReturn(id: string, userContact: string, taxSystem: number, paymentAddress: string): Check;
    setShouldPrint(value: boolean): Check;
    addPayment(payment: Payment): Check;
    addBuyer(buyer: Buyer): Check;
    addCashier(cashier: Cashier): Check;
    addPosition(position: Position): Check;
    getTotalPositionsSum(): number;
    getPositions(): Position[];
    applyDiscount(checkDiscount: number): Check;
    asArray(): {
        [key: string]: any;
    };
}
