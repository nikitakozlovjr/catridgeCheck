import fs from 'node:fs';
import path from 'path';
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class DeleteCatridgeController {
    constructor() {
        this.pathToCatridgeData = path.join(__dirname, '..', 'db', 'catridgeData.json');
        this.messageSuccesfull = "Изменения внесены успешно";
    }

    deleteCatridge(req, __res) {
        const { catridgeName } = req.body;
        const data = JSON.parse(fs.readFileSync(this.pathToCatridgeData, 'utf-8'));
        delete data[catridgeName];
        const newData = JSON.stringify(data, null, 2);
        fs.writeFileSync(this.pathToCatridgeData, newData);
        return this.messageSuccesfull;
    }

    deleteValidPrinters(req, __res) {
        const { catridgeName, printerName } = req.body;
        const data = JSON.parse(fs.readFileSync(this.pathToCatridgeData, 'utf-8'));
        const newPrinters = data[catridgeName].printers.filter((printer) => printer !== printerName);
        data[catridgeName].printers = newPrinters;
        const newData = JSON.stringify(data, null, 2);
        fs.writeFileSync(this.pathToCatridgeData, newData);
        return this.messageSuccesfull;
    }
}

export default DeleteCatridgeController;