const MongoClient = require('mongodb').MongoClient;


class DaoData {
    constructor() {
        var url = 'mongodb://localhost:27017/example'
        MongoClient.connect(url)
            .then(function (db) { // <- db as first argument
                console.log(db)
                this.db = db;
            })
            .catch(function (err) { })
    }

    getData(){
        const collection = this.db.collection('documents');
        return collection.find({}).toArray();
    }
}

exports.default = new DaoData();