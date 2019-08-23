export declare class OrderPosition {
    private oid;
    private name;
    private price;
    private quantity;
    private total;
    private vat;
    private type;
    private measure_name;
    constructor(args: {
        vat: string;
        total: number;
        measure_name: string;
        type: string;
        quantity: number;
        oid: string;
        name: string;
        price: number;
    });
    getTotal(): number;
    setTotal(total: number): OrderPosition;
    asArray(): {
        [key: string]: any;
    };
}
