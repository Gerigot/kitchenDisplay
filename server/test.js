var util = require('./util');

var interval;

var fakeInfo = [];

const getRandom = () => {
    return Math.ceil((Math.random() * 10 % 3));
}


var data = "Costine,0,Luganighetta,2,Filetto,3,Bue,5,patatine fritte,2";
exports.startTest = (broadcastToAll) => {
    if (interval) clearInterval(interval);
    fakeInfo = util.createFormattedArray(data);
    interval = setInterval(() => {
        let i = getRandom() - 1;
        fakeInfo[i].value = fakeInfo[i].value + getRandom();
        broadcastToAll(fakeInfo);
    }, 2000);
}

exports.stopTest = () => {
    if (interval) clearInterval(interval);
}