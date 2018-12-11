const {ManagerModel} = require('../db/models/manager.model');

class ManagerRepository {
    async getAll() {
        return await ManagerModel.find();
    }
    
    async createOne(manager) {
        return await ManagerModel.create(manager);
    }

    async deleteOne(lvl) {
        return await ManagerModel.deleteOne({lvl});
    }
}

exports.managerRepository = new ManagerRepository();