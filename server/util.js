exports.createFormattedArray = (data) => {
    var arr = [];
    var object = {}; 
    data.split(',').forEach((value, index) => {
        if(index%3 === 0){
            object['color'] = value; 
        }else if(index%3 === 1){
            object['title'] = value;
        }else if(index%3 === 2){
            object['value'] = value;
            arr.push(Object.assign({},object));
            object = {}
        }
    })
    return arr;
}