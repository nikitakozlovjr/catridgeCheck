import fs from 'node:fs';
import path from 'path';
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class CatridgeController {
    constructor() {
        this.pathToCatridgeData = path.join(__dirname, '..', 'db', 'catridgeData.json')
    };

    getAll(__req, __res) {
        const data = fs.readFileSync(this.pathToCatridgeData, 'utf-8');
        return data;
    };

    getCatridge(req, __res) {
        const { catridgeName } = req.params;
        const data = JSON.parse(fs.readFileSync(this.pathToCatridgeData, 'utf-8'));
        const catridgeInfo = data[catridgeName]
        return JSON.stringify(catridgeInfo);
    };

    getCatridgeByPrinter(req, __res) {
        const { printerName } = req.params;
        const data = JSON.parse(fs.readFileSync(this.pathToCatridgeData, 'utf-8'));
        const catridgesByPrinter = Object.keys(data).reduce((acc, catridgeName) => {
            const { printers } = data[catridgeName];
            if (printers.includes(printerName)) {
                acc[catridgeName] = data[catridgeName];
            };
            return acc;
        }, {})
        return catridgesByPrinter;
    }
};

export default CatridgeController;