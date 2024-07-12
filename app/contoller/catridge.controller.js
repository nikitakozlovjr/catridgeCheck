import fs from 'node:fs';

class CatridgeController {
    // constructor() {
    //     this.pathToCatridgeData = '../db/catridgeData.json';
    // };

    async getAll(__req, __res) {
        const data = fs.readFileSync('./catridgeData.json', 'utf-8');
        return data;
    };
};

export default CatridgeController;