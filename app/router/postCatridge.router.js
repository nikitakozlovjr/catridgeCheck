import Express from 'express';
import PostCatridgeController from '../contoller/postCatridge.controller.js';

const router = new Express();

router.post('/', (req, res) => {
    try {
        new PostCatridgeController().addCatridge(req, res);
        res.send("Изменения внесены успешно");
    } catch(e) {
        res.send(`Не удалось внести изменения ${e}`);
    }
});

router.post('/issue', (req, res) => {
    try {
        const data = new PostCatridgeController().reflectIssue(req, res);
        res.send(data)
    } catch(e) {
        res.send(`Не удалось внести изменения ${e}`);
    }
});

router.post('/receipt', (req, res) => {
    try {
        const data = new PostCatridgeController().reflectReceipt(req, res);
        res.send(data)
    } catch(e) {
        res.send(`Не удалось внести изменения ${e}`);
    }
});

router.post('/addprinter', (req, res) => {
    try {
        const data = new PostCatridgeController().addValidPrinter(req, res);
        res.send(data)
    } catch(e) {
        res.send(`Не удалось внести изменения ${e}`);
    }
});

router.post('/chalbalance', (req, res) => {
    try {
        const data = new PostCatridgeController().changeAllowedBalance(req, res);
        res.send(data)
    } catch(e) {
        res.send(`Не удалось внести изменения ${e}`);
    }
});

export default router;