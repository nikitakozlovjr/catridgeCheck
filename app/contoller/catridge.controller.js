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
};

export default CatridgeController;