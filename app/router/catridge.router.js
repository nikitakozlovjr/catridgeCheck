import Express from 'express';
import CatridgeController from '../contoller/catridge.controller.js';

const router = new Express();

router.get('/info', (req, res) => {
    try {
        const data = new CatridgeController().getAll(req, res);
        res.send(data);
    } catch(e) {
        res.send(`Не удается прочитать файл. Ошибка: ${e}`);
    }
});

router.get('/:catridgeName', (req, res) => {
    try {
        const data = new CatridgeController().getCatridge(req, res);
        res.send(data);
    } catch(e) {
        res.send(`Не удается прочитать файл. Ошибка: ${e}`)
    }
})

export default router;