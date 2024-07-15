import Express from 'express';
import PostCatridgeController from '../contoller/postCatridge.controller.js';

const router = new Express();

router.post('/', (req, res) => {
    try {
        new PostCatridgeController().addCatridge(req, res);
        res.send();
    }
});

export default router;