import React, { Component } from 'react'
import classNames from 'classnames';
import injectSheet from 'react-jss'


const styleSheet = {
    diff: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: '0',
        right: '20%',
        minWidth: '2em',
        minHeight: '2em',
        textAlign: 'center',
        fontSize: '1rem',
        margin: 0,
        opacity: '0',
        padding: 5,
        borderRadius: '25px',
        color: '#ffffff',
        background: 'linear-gradient(45deg, rgba(0,0,55,1) 0%, rgba(0,0,55,.8) 50%, rgba(0,0,55,.6) 100%)',
        '&:before': {
            content: "'+'",
            verticalAlign: 'middle',
        },
    },
    diffMoveDisappear: {
        animation: 'moveAnimation .5s linear 0s 1, disappearAnimation .5s linear 0s 1'
    },
    span: {
        display: 'inline-block',
        verticalAlign: 'middle',
    },
    '@keyframes moveAnimation': {
        from: {
            top: '0',
        },
        to: {
            top: '-4em',
        }
    },
    '@keyframes disappearAnimation': {
        from: {
            opacity: '1',
        },
        to: {
            opacity: '0'
        }
    }
}

class Popup extends Component {

    render() {
        const { props } = this;
        const { diff, classes } = props;
        return <p key={'keyPopup' + diff} className={classNames(classes.diff, { [classes.diffMoveDisappear]: diff })}>
            <span className={classes.span}>{diff}</span>
        </p>
    }

}

export default injectSheet(styleSheet)(Popup);