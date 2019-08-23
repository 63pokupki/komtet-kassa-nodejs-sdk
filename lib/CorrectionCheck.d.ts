import { Correction } from "./Correction";
import { Payment } from "./Payment";
import { Vat } from "./Vat";
import { AuthorisedPerson } from "./AuthorisedPerson";
import { Position } from "./Position";
export declare class CorrectionCheck {
    static INTENT_SELL: string;
    static INTENT_SELL_RETURN: string;
    private id;
    private intent;
    private printerNumber;
    private taxSystem;
    private correction;
    private payment;
    private position;
    private authorised_person;
    constructor(id: string, intent: string, printerNumber: string, taxSystem: number, correction: Correction);
    static createSell(id: string, printerNumber: string, taxSystem: number, correction: Correction): CorrectionCheck;
    static createSellReturn(id: string, printerNumber: string, taxSystem: number, correction: Correction): CorrectionCheck;
    setPayment(payment: Payment, vat: Vat): CorrectionCheck;
    setAuthorisedPerson(authorised_person: AuthorisedPerson): CorrectionCheck;
    asArray(): {
        'intent': string;
        'task_id': string;
        'printer_number': string;
        'sno': number;
        'payments': {
            'type': string;
            'sum': number;
        }[];
        'positions': Position[];
        'correction': {
            'type': string;
            'date': string;
            'document': string;
            'description': string;
        };
        'authorised_person': {
            'name': string;
            'inn': string;
        };
    };
}
