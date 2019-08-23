"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Vat {
    constructor(rate) {
        if ((typeof rate == 'number') && rate < 1 && rate != 0.0) {
            rate = Number(rate.toFixed(2));
        }
        rate = String(rate);
        rate = rate.replace('0.', '');
        rate = rate.replace('%', '');
        switch (rate) {
            case '10/110':
                rate = Vat.RATE_110;
                break;
            case '18':
                rate = Vat.RATE_20;
                break;
            case '118':
                rate = Vat.RATE_120;
                break;
            case '18/118':
                rate = Vat.RATE_120;
                break;
            case '20/120':
                rate = Vat.RATE_120;
                break;
            default:
                if ([
                    Vat.RATE_NO,
                    Vat.RATE_0,
                    Vat.RATE_10,
                    Vat.RATE_20,
                    Vat.RATE_110,
                    Vat.RATE_120,
                ].includes(rate)) {
                    throw `Unknown VAT rate: ${rate}`;
                }
        }
        this.rate = rate;
    }
    getRate() {
        return this.rate;
    }
}
Vat.RATE_NO = 'no';
Vat.RATE_0 = '0';
Vat.RATE_10 = '10';
Vat.RATE_20 = '20';
Vat.RATE_110 = '110';
Vat.RATE_120 = '120';
exports.Vat = Vat;
//# sourceMappingURL=Vat.js.map