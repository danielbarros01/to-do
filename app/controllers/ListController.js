const { List } = require('../database/db');

module.exports = {
    async all(req,res){
        let lists = await List.findAll();

        return lists;
    }
}


