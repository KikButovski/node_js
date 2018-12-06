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
        this.__router.get('/:lvl', (req, res) => {
            const {lvl} = req.params;

            res.json(
                developerController.findOne(lvl)
            );
        });

        this.__router.delete('/', (req, res) => {
            const {body} = req;
            console.log(body);
            developerController.deleteOne(body.lvl);
            res.status(200).end();
            
        });

        this.__router.post('/', (req, res) => {
            const {body} = req;

            developerController.create(body);

            res.status(201).end();
        });


        this.__router.put('/:lvl', (req, res) => {
            const {body, params: {lvl}} = req;
            console.log(lvl);
            developerController.updateOne(lvl, body);

            res.status(200).end();
        });

        this.__router.get('/', (req, res) => {
            res.json(developerController.findAll());
        });
    }
}

exports.developersRouter = new DevelopersRouter();
