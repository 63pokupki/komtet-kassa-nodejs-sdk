import { Vat } from './Vat';
import { Agent } from './Agent';
import { Nomenclature } from './Nomenclature';


/**
 * This file is part of the komtet/kassa-sdk library
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */



export class Position {
    /**
     * @var string
     */
    private id: string = null;

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
     * @var int|float
     */
    private discount: number;

    /**
     * @var Vat
     */
    private vat: Vat;

    /**
     * @var string|null
     */
    private measureName: string = null;

    /**
     * @var string
     */
    private calcMethod: string = null;

    /**
     * @var string
     */
    private calcSubject: string = null;

    /**
     * @var int|float
     */
    private excise: number = null;

    /**
     * @var string
     */
    private countryCode: string = null;

    /**
     * @var string
     */
    private declarationNumber: string = null;

    /**
     * @var Agent
     */
    private agent: Agent = null;

    /**
     * @var Nomenclature
     */
    private nomenclature: Nomenclature = null;

    /**
     * @param string name Item name
     * @param int|float price Item price
     * @param int|float quantity Item quanitity
     * @param int|float total Total cost
     * @param int|float discount Discount size in RUB
     * @param Vat vat VAT
     *
     * @return Position
     */
    constructor(name: string, price: number, quantity: number, total: number, discount: number, vat: Vat) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
        this.total = total;
        this.discount = discount;
        this.vat = vat;
    }

    /**
     * @param string|null value
     *
     * @return Position
     */
    public setId(value: string): Position {
        this.id = value;

        return this;
    }

    /**
     * @param string|null value
     *
     * @return Position
     */
    public setMeasureName(value: string): Position {
        this.measureName = value;

        return this;
    }

    /**
     * @param string calc_method
     *
     * @return Position
     */
    public setCalculationMethod(calc_method: string): Position {
        this.calcMethod = calc_method;

        return this;
    }

    /**
     * @param string calc_subject
     *
     * @return Position
     */
    public setCalculationSubject(calc_subject: string): Position {
        this.calcSubject = calc_subject;

        return this;
    }

    /**
     * @param int|float value
     *
     * @return Position
     */
    public setExcise(value: number): Position {
        this.excise = value;

        return this;
    }

    /**
     * @param string value
     *
     * @return Position
     */
    public setCountryCode(value: string): Position {
        this.countryCode = value;

        return this;
    }

    /**
     * @param string value
     *
     * @return Position
     */
    public setDeclarationNumber(value: string): Position {
        this.declarationNumber = value;

        return this;
    }

    /**
     * @param Agent agent
     *
     * @return Position
     */
    public setAgent(agent: Agent): Position {
        this.agent = agent;

        return this;
    }

    /**
     * @param Nomenclature nomenclature
     *
     * @return Position
     */
    public setNomenclature(nomenclature: Nomenclature): Position {
        this.nomenclature = nomenclature;

        return this;
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
     * @return Position
     */
    public setTotal(total): Position {
        this.total = total;

        return this;
    }

    /**
     * @return array
     */
    public asArray(): {} {
        let result = {
            'name': this.name,
            'price': this.price,
            'quantity': this.quantity,
            'total': this.total,
            'discount': this.discount,
            'vat': this.vat.getRate()
        };

        if (this.id !== null) {
            result['id'] = this.id;
        }

        if (this.measureName !== null) {
            result['measure_name'] = this.measureName;
        }

        if (this.calcMethod !== null) {
            result['calculation_method'] = this.calcMethod;
        }

        if (this.calcSubject !== null) {
            result['calculation_subject'] = this.calcSubject;
        }

        if (this.excise !== null) {
            result['excise'] = this.excise;
        }

        if (this.countryCode !== null) {
            result['country_code'] = this.countryCode;
        }

        if (this.declarationNumber !== null) {
            result['declaration_number'] = this.declarationNumber;
        }

        if (this.agent !== null) {
            result['agent_info'] = this.agent.asArray();

            try {
                if (result['agent_info']['supplier_info']) {
                    result['supplier_info'] = result['agent_info']['supplier_info'];
                    delete result['agent_info']['supplier_info'];
                }
            } catch (e) {

            }

        }

        if (this.nomenclature !== null) {
            result['nomenclature_code'] = this.nomenclature.asArray();
        }

        return result;
    }
}
