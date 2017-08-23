exports.createFormattedArray = (data) => {
    var arr = [];
    const colorArr = ["red", "", "blue", "", "yellow", "", "green", "", "red", "", "blue", "", "yellow", "", "green", "", "red", "", "blue", "", "yellow", "", "green"]
    var object = {};
    data.split(',').forEach((value, index) => {
        if (index % 2 === 0) {
            object['title'] = value;
            console.log(index);
            object['color'] = colorArr[index];
        } else if (index % 2 === 1) {
            object['value'] = value;
            arr.push(Object.assign({}, object));
        }
    })
    return arr;
}