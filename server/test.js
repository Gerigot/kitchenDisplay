var interval;

var fakeInfo = [
    { title: "Costine", value: 0, color: 'blue' },
    { title: "Luganighetta", value: 0, color: 'red' },
    { title: "Filetto", value: 0, color: 'yellow' }
]

const getRandom = () => {
    return Math.ceil((Math.random() * 10 % 3));
}

exports.fakeInfo = fakeInfo

exports.startTest = (broadcastToAll) => {
    if (interval) clearInterval(interval);
    interval = setInterval(() => {
        let i = getRandom() - 1;
        fakeInfo[i].value = fakeInfo[i].value + getRandom();
        broadcastToAll();
    }, 2000);
}

exports.stopTest = () => {
    if (interval) clearInterval(interval);
}