import React from 'react'
import injectSheet from 'react-jss'
import classNames from 'classnames';
import Popup from './Popup';

const styleSheet = {
    container: {
        position: 'relative',
        display: 'flex',
        justifyContent: 'space-between',
        padding: '.3em 1em',
        margin: '0px 5px 10px 5px',
        border: '1px solid black',
        background: props => 'linear-gradient(45deg, ' + props.color + ' 0%, #ffffff 100%)',
        alignItems: 'baseline',
        maxWidth: '100%',
        borderRadius: '25px',
        flexGrow: 1,
    },
    font: {
        fontSize: '2em',
    },
    name: {
        minWidth: '13ch',
        width: '100%',
        borderRight: '1px solid'
    },
    value: {
        minWidth: '5ch',
        width: '100%',
        textAlign: 'center',
        position: 'relative',
    },
    '@media screen and (min-width:1024px)': {
        container: {
            maxWidth: '32%',
            width: '32%',
        }
    },
    '@media screen and (min-width:680px) and (max-width:1023px)': {
        container: {
            maxWidth: '48%',
            width: '48%',
        }
    }
}

const ElementFood = (props) => {
    const { classes } = props;
    let nameProdotto = "Esempio";
    const { value, name } = props;
    nameProdotto = name || nameProdotto;
    return <div className={classes.container}>
        <div className={classNames(classes.font, classes.name)}>{nameProdotto}</div>
        <div className={classNames(classes.font, classes.value)}>{value}
            <Popup value={value} />
        </div>
    </div>
}

export default injectSheet(styleSheet)(ElementFood);