import Express from 'express';
import DeleteCatridgeController from '../contoller/deleteCatridge.controller.js';

const router = new Express();

router.delete('/', (req, res) => {
    try {
        const data = new DeleteCatridgeController().deleteCatridge(req, res);
        res.send(data)
    } catch(e) {
        res.send(`Не удалось удалить запись. Ошибка: ${e}`);
    }
})

router.delete('/printer', (req, res) => {
    try {
        const data = new DeleteCatridgeController().deleteValidPrinters(req, res);
        res.send(data)
    } catch(e) {
        res.send(`Не удалось удалить запись. Ошибка: ${e}`);
    }
})
export default router;