var util = require('./util');
var daoData = require('./mongodb/daoData').default

var interval;

var fakeInfo = [];

const getRandom = () => {
    return Math.ceil((Math.random() * 10 % 3));
}


var data = "Costine,0,Luganighetta,2,Filetto,3,Bue,5,patatine fritte,2";
exports.startTest = (broadcastToAll) => {
    daoData.getLast().then(value => {
        console.log(value, value.data);
        if (value && value.data && value.data.length > 0) {
            data = value.data;
        }
    })
    if (interval) clearInterval(interval);
    fakeInfo = util.createFormattedArray(data);
    interval = setInterval(() => {
        let i = getRandom() - 1;
        fakeInfo[i].value = fakeInfo[i].value + getRandom();
        broadcastToAll(fakeInfo);
    }, 6000);
}

exports.stopTest = () => {
    if (interval) clearInterval(interval);
}