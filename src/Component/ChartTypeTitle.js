import React from 'react';
import injectSheet from 'react-jss'

const styleSheet = {

    root: {
        color: '#b30000',
        fontSize: '2.5em',
        textAlign: 'center',
        margin: '20px 0px',
        textShadow: '5px 5px 5px #8c8c8c'
    }

}

const ChartTypeTitle = (props) => {
    const { classes, label } = props;
    return <div className={classes.root}>{label}</div>
};

export default injectSheet(styleSheet)(ChartTypeTitle);