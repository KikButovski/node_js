const {developers} = require('../mocks/developers.mock');
const {Developer} = require('../models/Developer');
 
class DeveloperController {
    findOne(lvl) {
        return developers.find(
            ({lvl: level}) => level === lvl
        );
    }

    findAll() {
        return developers;
    }

    create(lvl) {
        const developer = new Developer(lvl);

        developers.push(developer);
    }

    updateOne(oldLvl, {lvl}) {
        this.deleteOne(oldLvl);
        this.create(lvl);
    }

    deleteOne(lvl) {
        const index = developers.findIndex(d =>(d.lvl === lvl));
        if (index >= 0) {
            developers.splice(index, 1);
        }
    }
}

exports.developerController = new DeveloperController();