const {Developer} = require('../models/Developer');
const {developerRepository} = require('../repositories/developer.repository')
 
class DeveloperController {
    
    async findAll() {
        return await developerRepository.getAll();
    }

    async create({lvl}) {
        return await developerRepository.createOne(new Developer(lvl));
    }

    async updateOne(oldLvl, {lvl}) {
        return await developerRepository.updateOne(oldLvl, new Developer(lvl));
    }

    async deleteOne(lvl) {
        return await developerRepository.deleteOne(lvl);
    }
}

exports.developerController = new DeveloperController();