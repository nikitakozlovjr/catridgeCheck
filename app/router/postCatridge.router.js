import Express from 'express';
import PostCatridgeController from '../contoller/postCatridge.controller.js';

const router = new Express();

router.post('/', (req, res) => {
    console.log(req.body);
    try {
        new PostCatridgeController().addCatridge(req, res);
        res.send("Изменения внесены успешно");
    } catch(e) {
        res.send(`Не удалось внести изменения ${e}`);
    }
});

export default router;