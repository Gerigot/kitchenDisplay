exports.createFormattedArray = (data) => {
    var arr = [];
    const colorArr = ["red", "", "blue", "", "yellow", "", "green", "", "red", "", "blue", "", "yellow", "", "green", "", "red", "", "blue", "", "yellow", "", "green"]
    var object = {};
    let prova = data.split(',');
    console.log(prova);
    for(let i = 0; i < prova.length; i+=2 ){
        arr.push({title: prova[i], color: colorArr[i], value: parseInt(prova[i+1])})
    }
    // data.split(',').forEach((value, index) => {
    //     if (index % 2 === 0) {
    //         object['title'] = value;
    //         object['color'] = colorArr[index];
    //     } else if (index % 2 === 1) {
    //         object['value'] = parseInt(value);
    //         arr.push(Object.assign({}, object));
    //     }
    // })
    return arr;
}