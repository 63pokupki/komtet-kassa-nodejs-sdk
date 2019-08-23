export declare class Buyer {
    private name;
    private inn;
    constructor(name?: string, inn?: string);
    setName(name: string): this;
    setINN(inn: string): this;
    asArray(): {
        [key: string]: any;
    };
}
