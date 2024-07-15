import fs from 'node:fs';
import path from 'path';
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class PostCatridgeController {
    constructor() {
        this.pathToCatridgeData = path.join(__dirname, '..', 'db', 'catridgeData.json')
    }

    addCatridge(req, res) {
        const data = JSON.parse(fs.readFileSync(this.pathToCatridgeData, 'utf-8'));
        const { catridgeName, count, brand, printers, allowbalanse, color } = req.body;
        data[catridgeName] = { count, brand, printers, allowbalanse, color };
        const newData = JSON.stringify(data);
        const result = fs.writeFileSync(this.pathToCatridgeData, newData);
        return result;
    }
};

export default PostCatridgeController;