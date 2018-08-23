const MongoClient = require('mongodb').MongoClient;


class DaoData {
    constructor() {
        var url = 'mongodb://localhost:27017/example'
        const connect = (mongoclient) => {
            this.db = mongoclient.db("example");
            this.collection = this.db.collection("order");
        }
        MongoClient.connect(url)
            .then(connect)
            .catch(function (err) {
                console.log(err);
            })
    }

    inserisci(data) {
        if (this.collection) {
            return this.collection.insertOne({ data, date: Date.now() }).catch((err) => {
                console.log(err)
            });
        }
    }
    getLast(){
        if (this.collection) {
            return this.collection.findOne({}).catch((err) => {
                console.log(err)
            });
        }else{
            return new Promise();
        }
    }

    all() {
        if (this.collection) {
            return this.collection.find({}).sort("date", 1).toArray().catch((err) => {
                console.log(err)
            });
        }
    }
}

exports.default = new DaoData();