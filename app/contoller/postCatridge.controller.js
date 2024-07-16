import fs from 'node:fs';
import path from 'path';
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class PostCatridgeController {
    constructor() {
        this.pathToCatridgeData = path.join(__dirname, '..', 'db', 'catridgeData.json');
        this.messageInvalidRemainder = "Недостаточно остатка на складе"
        this.messageSuccesfull = "Изменения внесены успешно";
    }

    addCatridge(req, __res) {
        const data = JSON.parse(fs.readFileSync(this.pathToCatridgeData, 'utf-8'));
        const { catridgeName, count, brand, printers, allowbalanse, color } = req.body;
        data[catridgeName] = { count, brand, printers, allowbalanse, color };
        const newData = JSON.stringify(data, null, 2);
        const result = fs.writeFileSync(this.pathToCatridgeData, newData);
        return result;
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


};

export default PostCatridgeController;