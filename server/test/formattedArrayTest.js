var util = require('../util');


var data1 = "Costine,0,Luganighetta,2,Filetto,3,Bue,5,patatine fritte,2";
var data2 = "Costine,0,Costine,0,Luganighetta,2,Filetto,3,Bue,5,patatine fritte,2,Costine,0,Costine,0,Luganighetta,2,Filetto,3,Bue,5,patatine fritte,2";
console.log(util.createFormattedArray(data1),util.createFormattedArray(data1).length);
console.log(util.createFormattedArray(data2),util.createFormattedArray(data2).length);
