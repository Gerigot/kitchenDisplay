import isWithinRange from 'date-fns/is_within_range';
import getMinutes from 'date-fns/get_minutes'
import setMinutes from 'date-fns/set_minutes';
import getHours from 'date-fns/get_hours';
import { addMinutes, format, isFuture, setSeconds } from 'date-fns';

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

        return data.reduce((prev, cur, index) => {
            let thirtyplus = addMinutes(firstDate, 30);
            if (prev.length === 0) {
                return [getLabel(firstDate, thirtyplus), getNumByType(type, cur.data)]
            } else {
                let date = new Date(cur.date)
                if (isWithinRange(date, firstDate, thirtyplus)) {
                    let newarr = [...prev];
                    newarr[i + 1] += getNumByType(type, cur.data);
                    return newarr;
                } else {
                    let intermediate = addAndControl(date, firstDate, thirtyplus, cur, type);
                    firstDate = intermediate.firstDate;
                    i+=2;
                    return [...prev, ...intermediate.list]
                }
            }
        }, [])
    }

}

function addAndControl(date, firstDate, thirtyplus, cur, type) {
    firstDate = new Date(thirtyplus.getTime());
    thirtyplus = addMinutes(firstDate, 30);
    if (isWithinRange(date, firstDate, thirtyplus)) {
        //console.log(getLabel(firstDate, thirtyplus))
        return { firstDate, list: [getLabel(firstDate, thirtyplus), getNumByType(type, cur.data)] };
    } else {
        //console.log(format(firstDate, "HH:mm"))
        if (isFuture(firstDate)) return [];
        return addAndControl(date, firstDate, thirtyplus, cur, type)
    }
}


function getLabel(first, after) {
    return `${format(first, "H:mm")} - ${format(after, "H:mm")}`;
}
function getNumByType(type, list) {
    return list.find(curr => {
        return type === curr.title
    }).value
}