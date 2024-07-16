import _ from 'lodash';
import fs from 'node:fs';
import path from 'path';
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class PutCatridgeController {
    constructor() {
        this.pathToCatridgeData = path.join(__dirname, '..', 'db', 'catridgeData.json');
        this.messageInvalidRemainder = "Недостаточно остатка на складе"
        this.messageSuccesfull = "Изменения внесены успешно";
    }

    reflectIssue(req, __res) {
        const data = JSON.parse(fs.readFileSync(this.pathToCatridgeData, 'utf-8'));
        const { catridgeName, countIssued } = req.body;
        if(data[catridgeName].count < countIssued) {
            return this.messageInvalidRemainder;
        }
        const newCountStore = data[catridgeName].count - countIssued;
        data[catridgeName].count = newCountStore;
        const newData = JSON.stringify(data, null, 2);
        fs.writeFileSync(this.pathToCatridgeData, newData);
        return this.messageSuccesfull;
    }

    reflectReceipt(req, __res) {
        const data = JSON.parse(fs.readFileSync(this.pathToCatridgeData, 'utf-8'));
        const { catridgeName, countIssued } = req.body;
        const newCountStore = data[catridgeName].count + countIssued;
        data[catridgeName].count = newCountStore;
        const newData = JSON.stringify(data, null, 2);
        fs.writeFileSync(this.pathToCatridgeData, newData);
        return this.messageSuccesfull;
    }

    addValidPrinter(req, __res) {
        const data = JSON.parse(fs.readFileSync(this.pathToCatridgeData, 'utf-8'));
        const { catridgeName, newValidPrinters } = req.body;
        const newPrinters = _.uniq(data[catridgeName].printers.concat(newValidPrinters));
        data[catridgeName].printers = newPrinters;
        const newData = JSON.stringify(data, null, 2);
        fs.writeFileSync(this.pathToCatridgeData, newData);
        return this.messageSuccesfull;
    }

    changeAllowedBalance(req, __res) {
        const data = JSON.parse(fs.readFileSync(this.pathToCatridgeData, 'utf-8'));
        const { catridgeName, newAllowedBalance } = req.body;
        data[catridgeName].allowbalanse = newAllowedBalance;
        const newData = JSON.stringify(data, null, 2);
        fs.writeFileSync(this.pathToCatridgeData, newData);
        return this.messageSuccesfull;
    }
};

export default PutCatridgeController;