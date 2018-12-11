const {Router} = require('express');
const {managerController} = require('../controllers/Manager.controller');

class ManagersRouter {
    constructor() {
        this.__router = Router();

        this.__configure();
    }

    getRoutes() {
        return this.__router;
    }

    __configure() {

        this.__router.delete('/', async (req, res) => {
            const {lvl} = req.body;
            await managerController.deleteOne(lvl);
            res.status(200).end();
    
        });

        this.__router.post('/', async (req, res) => {
            const {body} = req;

            await managerController.create(body);

            res.status(201).end();
        });

        this.__router.get('/', async (req, res) => {
            res.json(await managerController.findAll());
        });
    }
}

exports.managersRouter = new ManagersRouter();
