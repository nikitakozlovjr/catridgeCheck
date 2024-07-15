import Express from 'express';
import GetCatridgeController from '../contoller/getCatridge.controller.js';

const router = new Express();

router.get('/badinfo', (req, res) => {
    try {
        const data = new GetCatridgeController().getDrawBack(req, res);
        res.send(data);
    } catch (e) {
        res.send(`Не удается прочитать файл. Ошибка: ${e}`);
    }
});

router.get('/', (req, res) => {
    try {
        const data = new GetCatridgeController().getAll(req, res);
        res.send(data);
    } catch (e) {
        res.send(`Не удается прочитать файл. Ошибка: ${e}`);
    }
});

router.get('/:catridgeName', (req, res) => {
    try {
        const data = new GetCatridgeController().getCatridge(req, res);
        res.send(data);
    } catch (e) {
        res.send(`Не удается прочитать файл. Ошибка: ${e}`)
    }
});

router.get('/byprinter/:printerName', (req, res) => {
    try {
        const data = new GetCatridgeController().getCatridgeByPrinter(req, res);
        res.send(data);
    } catch (e) {
        res.send(`Не удается прочитать файл. Ошибка: ${e}`);
    }
});



export default router;