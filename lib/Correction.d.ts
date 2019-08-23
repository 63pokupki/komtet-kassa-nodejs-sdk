export declare class Correction {
    static TYPE_SELF: string;
    static TYPE_FORCED: string;
    private type;
    private date;
    private document;
    private description;
    constructor(type: string, date: string, document: string, description: string);
    static createSelf(type: string, date: string, document: string, description: string): Correction;
    static createForced(type: string, date: string, document: string, description: string): Correction;
    asArray(): {
        'type': string;
        'date': string;
        'document': string;
        'description': string;
    };
}
