exports.createFormattedArray = (data) => {
    const colorArr = ["red", "blue",  "yellow", "green"]
    var object = {};
    let dataArr = data.split(',');
    
    let corr = dataArr.reduce((prev, current, index) => {
        if(index % 2 === 0){
            return [...prev, [current]];
        }else{
            return [...prev.slice(0, prev.length-1), [...prev[prev.length -1], current]]
        }
    }, [])

    const createObject = arr => arr.reduce((prev, current, index)=>{
        return [...prev, {title: current[0], color: colorArr[index%4], value: parseInt(current[1])}]
    }, []);
    return createObject(corr)
}