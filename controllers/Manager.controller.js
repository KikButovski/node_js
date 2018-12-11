const {Manager} = require('../models/Manager');
const {managerRepository} = require('../repositories/manager.repository')
 
class ManagerController {
    
    async findAll() {
        return await managerRepository.getAll();
    }

    async create({lvl}) {
        return await managerRepository.createOne(new Manager(lvl));
    }

    async deleteOne(lvl) {
        return await managerRepository.deleteOne(lvl);
    }
}

exports.managerController = new ManagerController();