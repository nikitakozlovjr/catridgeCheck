import Express from 'express';
import PutCatridgeController from '../contoller/putCatridge.controller.js';

const router = new Express();

router.put('/issue', (req, res) => {
    try {
        const data = new PutCatridgeController().reflectIssue(req, res);
        res.send(data)
    } catch(e) {
        res.send(`Не удалось внести изменения ${e}`);
    }
});

router.put('/receipt', (req, res) => {
    try {
        const data = new PutCatridgeController().reflectReceipt(req, res);
        res.send(data)
    } catch(e) {
        res.send(`Не удалось внести изменения ${e}`);
    }
});

router.put('/addprinter', (req, res) => {
    try {
        const data = new PutCatridgeController().addValidPrinter(req, res);
        res.send(data)
    } catch(e) {
        res.send(`Не удалось внести изменения ${e}`);
    }
});

router.put('/chalbalance', (req, res) => {
    try {
        const data = new PutCatridgeController().changeAllowedBalance(req, res);
        res.send(data)
    } catch(e) {
        res.send(`Не удалось внести изменения ${e}`);
    }
});

export default router;