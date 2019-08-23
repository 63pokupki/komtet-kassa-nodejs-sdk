import { OrderPosition } from "./OrderPosition";
export declare class Order {
    private order_id;
    private state;
    private sno;
    private is_paid;
    private description;
    private items;
    private client_name;
    private client_address;
    private client_phone;
    private client_email;
    private date_start;
    private date_end;
    private callback_url;
    private courier_id;
    private payment_type;
    private prepayment;
    constructor(order_id: number, state: string, sno: string, is_paid: boolean, prepayment?: number, payment_type?: string);
    setClient(address: string, phone: string, email: string, name: string): void;
    setDeliveryTime(date_start: string, date_end: string): void;
    setDescription(description: string): void;
    addPosition(orderPosition: OrderPosition): void;
    setCallbackUrl(callback_url: string): void;
    setCourierId(courier_id: number): void;
    getPositions(): OrderPosition[];
    getTotalPositionsSum(): number;
    applyDiscount(checkDiscount: number): Order;
    asArray(): {
        [key: string]: any;
    };
}
