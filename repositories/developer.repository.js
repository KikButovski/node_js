const {DeveloperModel} = require('../db/models/developer.model');

class DeveloperRepository {
    async getAll() {
        return await DeveloperModel.find();
    }
    
    async createOne(developer) {
        return await DeveloperModel.create(developer);
    }

    async updateOne(lvl, developer) {
        console.log(lvl, developer);
        return await DeveloperModel.updateOne({lvl}, developer);
    }

    async deleteOne(lvl) {
        return await DeveloperModel.deleteOne({lvl});
    }
}

exports.developerRepository = new DeveloperRepository();