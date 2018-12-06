const {managers} = require('../mocks/managers.mock');
const {Manager} = require('../models/Manager');
 
class ManagerController {
    findOne(lvl) {
        return managers.find(
            ({lvl: level}) => level === lvl
        );
    }

    findAll() {
        return managers;
    }

    create({lvl}) {
        const manager = new Manager(lvl);

        managers.push(manager);
    }

    deleteOne(lvl) {
        const index = managers.findIndex(m =>(m.lvl === lvl));
        managers.splice(index, 1);

    }
}

exports.managerController = new ManagerController();