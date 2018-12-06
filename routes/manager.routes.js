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
        this.__router.get('/:lvl', (req, res) => {
            const {lvl} = req.params;

            res.json(
                managerController.findOne(lvl)
            );
        });

        this.__router.delete('/', (req, res) => {
            const {lvl} = req.body;
                managerController.deleteOne(lvl);
                res.status(200).end();
    
        });

        this.__router.post('/', (req, res) => {
            const {body} = req;

            managerController.create(body);

            res.status(201).end();
        });

        this.__router.get('/', (req, res) => {
            res.json(managerController.findAll());
        });
    }
}

exports.managersRouter = new ManagersRouter();
