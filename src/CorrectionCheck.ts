import { Correction } from "./Correction";
import { Payment } from "./Payment";
import { Vat } from "./Vat";
import { AuthorisedPerson } from "./AuthorisedPerson";
import { Position } from "./Position";

/**
 * This file is part of the komtet/kassa-sdk library
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */



export class CorrectionCheck {
    public static INTENT_SELL = 'sellCorrection';
    public static INTENT_SELL_RETURN = 'sellReturnCorrection';

    /**
     * @var string
     */
    private id: string;

    /**
     * @var string
     */
    private intent: string;

    /**
     * @var string
     */
    private printerNumber: string;

    /**
     * @var int
     */
    private taxSystem: number;

    /**
     * @var Correction
     */
    private correction: Correction;

    /**
     * @var Payment
     */
    private payment: Payment;

    /**
     * @var Position
     */
    private position: Position;

    /**
     * @var AuthorisedPerson
     */
    private authorised_person: AuthorisedPerson;

    /**
     * @param string id An unique ID provided by an online store
     * @param string intent One of CorrectionCheck::INTENT_* constants
     * @param string printerNumber Printer's serial number
     * @param int taxSystem One of TaxSystem::* constants
     * @param correction: Correction Correction data
     *
     * @return CorrectionCheck
     */
    constructor(id: string, intent: string, printerNumber: string, taxSystem: number, correction: Correction) {
        this.id = id;
        this.intent = intent;
        this.printerNumber = printerNumber;
        this.taxSystem = taxSystem;
        this.correction = correction;
    }

    /**
     * @param string id An unique ID provided by an online store
     * @param string printerNumber Printer's serial number
     * @param int taxSystem One of TaxSystem::* constants
     * @param correction: Correction Correction data
     *
     * @return CorrectionCheck
     */
    public static createSell(id: string, printerNumber: string, taxSystem: number, correction: Correction) {
        return new CorrectionCheck(id, CorrectionCheck.INTENT_SELL, printerNumber, taxSystem, correction);
    }

    /**
     * @param string id An unique ID provided by an online store
     * @param string printerNumber Printer's serial number
     * @param int taxSystem One of TaxSystem::* constants
     * @param correction: Correction Correction data
     *
     * @return CorrectionCheck
     */
    public static createSellReturn(id: string, printerNumber: string, taxSystem: number, correction: Correction) {
        return new CorrectionCheck(id, CorrectionCheck.INTENT_SELL_RETURN, printerNumber, taxSystem, correction);
    }

    /**
     * @param Payment payment
     * @param Vat vat
     *
     * @return CorrectionCheck
     */
    public setPayment(payment: Payment, vat: Vat): CorrectionCheck {
        let sum = payment.getSum();
        this.payment = payment;
        this.position = new Position(
            this.intent == CorrectionCheck.INTENT_SELL
                ? 'Коррекция прихода'
                : 'Коррекция расхода', //name
            sum, // price
            1, // quantity
            sum, // total
            vat.getRate(), // discount
            vat
        );

        return this;
    }

    /**
     * @param AuthorisedPerson authorised_person
     *
     * @return CorrectionCheck
     */
    public setAuthorisedPerson(authorised_person: AuthorisedPerson): CorrectionCheck {
        this.authorised_person = authorised_person;

        return this;
    }

    /**
     * @return array
     */
    public asArray() {
        return {
            'intent': this.intent,
            'task_id': this.id,
            'printer_number': this.printerNumber,
            'sno': this.taxSystem,
            'payments': [this.payment.asArray()],
            'positions': [this.position],
            'correction': this.correction.asArray(),
            'authorised_person': this.authorised_person.asArray()
        };
    }
}
