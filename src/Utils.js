import isWithinInterval from 'date-fns/isWithinInterval';
import getMinutes from 'date-fns/getMinutes'
import setMinutes from 'date-fns/setMinutes';
import { addMinutes, format, setSeconds } from 'date-fns';

export const formatDataForCharts = (data, type) => {
    if (data && data.length > 1) {
        let firstDate = new Date(data[0].date);
        firstDate = setSeconds(firstDate, 0);
        let firstMinutes = getMinutes(firstDate);
        if (firstMinutes > 30) {
            firstDate = setMinutes(firstDate, 30);
        } else {
            firstDate = setMinutes(firstDate, 0);
        }
        var i = 0;
        var res = []
        var prec = [];
        data.sort((a, b) => a.date - b.date).forEach(element => {
            let thirtyplus = addMinutes(firstDate, 30);
            let num = getNumByType(type, element.data)
            if(num === undefined)return
            console.log(element);
            if (!isWithinInterval(new Date(element.date), firstDate, thirtyplus)) {
                firstDate = new Date(thirtyplus.getTime());
                i++;
            }
            prec[i] = num;
            console.log("num", num, prec);
            if (i > 0) {
                num = num - prec[i - 1]
            }
            res[i] = [getLabel(firstDate, thirtyplus), num]
        });
        return res
    }

}




function getLabel(first, after) {
    return `${format(first, "H:mm")} - ${format(after, "H:mm")}`;
}
function getNumByType(type, list) {
    if (!Array.isArray(list)) return undefined
    return list.find(curr => {
        return type === curr.title
    }).value
}