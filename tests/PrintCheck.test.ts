declare var global: any;
import * as mocha from 'mocha';
import { assert } from 'chai';

import { ErrorSys } from "@a-a-game-studio/aa-components/aLib";
import { Client } from "../src/Client";
import { QueueManager } from "../src/QueueManager";
import { Check } from "../src/Check";
import { Vat } from "../src/Vat";
import { Position } from "../src/Position";
import { Payment } from "../src/Payment";
import { Buyer } from "../src/Buyer";
import { Cashier } from "../src/Cashier";
import { TaxSystem } from "../src/TaxSystem";

import { config } from "./TestConfig";

async function run() {
    mocha.it('Отправка чека на печать', async () => {

        let errorSys = new ErrorSys();

        let client = new Client(errorSys, config.key, config.secret);
        let manager = new QueueManager(client);
        manager.registerQueue(config.queryName, config.queryId);


        // уникальный ID, предоставляемый магазином
        let checkID = config.checkID;
        // E-Mail клиента, на который будет отправлен E-Mail с чеком.
        let clientEmail = config.clientEmail;

        let check = Check.createSell(checkID, clientEmail, TaxSystem.COMMON); // или Check::createSellReturn для оформления возврата
        // Говорим, что чек нужно распечатать
        check.setShouldPrint(true);

        let vat = new Vat(Vat.RATE_20);

        // Позиция в чеке: имя, цена, кол-во, общая стоимость, скидка, налог
        let position = new Position('name', 100, 1, 100, 0, vat);

        // Опционально можно установить:
        // Идентификатор позиции
        // position->setId('123');

        // Единицу измерения
        // position->setMeasureName('Кг.');

        // Cпособ рассчета
        // position->setCalculationMethod(CalculationMethod::FULL_PAYMENT);

        // Признак рассчета
        // position->setCalculationSubject(CalculationSubject::PRODUCT);

        // Агента по предмету расчета
        // agent = new Agent(Agent::COMMISSIONAIRE, "+77777777777", "ООО 'Лютик'", "12345678901");
        // position->setAgent(agent);

        check.addPosition(position);

        // Итоговая сумма расчёта
        let payment = new Payment(Payment.TYPE_CARD, 100);
        check.addPayment(payment);

        // Добавление данных покупателя (опционально)
        let buyer = new Buyer('Пупкин П.П.', '123412341234');
        check.addBuyer(buyer);

        // Добавление кассира (опционально)
        let cashier = new Cashier('Иваров И.П.', '1234567890123');
        check.addCashier(cashier);

        // Добавляем чек в очередь.
        try {
            manager.putCheck(check, config.queryName);
        } catch (e) {
            console.log(e);
        }


        assert.ok(true);
    }); //it ****
}


run();