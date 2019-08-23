export declare class AuthorisedPerson {
    private name;
    private inn;
    constructor(name: string, inn: string);
    asArray(): {
        'name': string;
        'inn': string;
    };
}
