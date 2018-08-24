import Chartjs from 'chart.js';
import React from 'react';
import ReactChartkick, { ColumnChart } from 'react-chartkick';
import injectSheet from 'react-jss';
import { formatDataForCharts } from '../Utils';
import ChartTypeTitle from './ChartTypeTitle';

ReactChartkick.addAdapter(Chartjs)

const styleSheet = {

    chart: {
        margin: '0px 5px'
    }

}

const Chart = (props) => {
    const { classes, match: { params: { type } }, list } = props;
    let formattedData = formatDataForCharts(list, type);
    console.log("formattedDate", formattedData);
    if (!formattedData) return null;
    return <div>
        <ChartTypeTitle label={type} />
        <ColumnChart className={classes.chart} data={[...formattedData]} />
    </div>
};

export default injectSheet(styleSheet)(Chart);