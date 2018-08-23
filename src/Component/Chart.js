import Chartjs from 'chart.js';
import React from 'react';
import ReactChartkick, { ColumnChart } from 'react-chartkick';
import injectSheet from 'react-jss';
import { formatDataForCharts } from '../Utils';

ReactChartkick.addAdapter(Chartjs)

const styleSheet = {

    root: {}

}

const Chart = (props) => {
    const { classes, match: { params: { type } }, list } = props;
    let formattedData = formatDataForCharts(list, type);
    console.log("formattedDate", formattedData);
    if(!formattedData) return null;
    return <div>
        {type}
        <ColumnChart data={[formattedData]} />
    </div>
};

export default injectSheet(styleSheet)(Chart);