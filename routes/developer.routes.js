const {Router} = require('express');
const {developerController} = require('../controllers/Developer.controller');

class DevelopersRouter {
    constructor() {
        this.__router = Router();

        this.__configure();
    }

    getRoutes() {
        return this.__router;
    }

    __configure() {

        this.__router.delete('/', async (req, res) => {
            const {body} = req;

            await developerController.deleteOne(body.lvl);
            res.status(200).end();
            
        });

        this.__router.post('/', async (req, res) => {
            const {body} = req;

            await developerController.create(body);

            res.status(201).end();
        });


        this.__router.put('/:lvl', async (req, res) => {
            const {body, params: {lvl}} = req;
            await developerController.updateOne(lvl, body);

            res.status(200).end();
        });

        this.__router.get('/', async (req, res) => {
            res.json(await developerController.findAll());
        });
    }
}

exports.developersRouter = new DevelopersRouter();
