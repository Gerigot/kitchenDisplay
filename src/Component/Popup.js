import React, { Component } from 'react'
import classNames from 'classnames';
import injectSheet from 'react-jss'


const styleSheet = {
    diff: {
        position: 'absolute',
        top: '0.2em',
        minWidth: '3ch',
        minHeight: '3ch',
        textAlign: 'center',
        right: '50%',
        transform: 'translateX(50%)',
        fontSize:'1rem',
        margin: 0,
        opacity: '0',
        padding: 5,
        borderRadius: '25px',
        color: '#ffffff',
        background: 'linear-gradient(45deg, rgba(0,0,255,1) 0%, rgba(0,0,255,.8) 50%, rgba(0,0,255,.6) 100%)',
        '&:before': {
            content: "'+'",
            verticalAlign: 'middle',
        },
    },
    diffMoveDisappear: {
        animation: 'moveAnimation 1s linear 0s 1, disappearAnimation 1s linear 0s 1'
    },
    span: {
        display: 'inline-block',
        verticalAlign: 'middle',
    },
    '@keyframes moveAnimation': {
        from: {
            top: '.5em',
        },
        to: {
            top: '-3em',
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
    constructor(props) {
        super(props);
        this.state = { diff: 0, isDiff: false }
    }

    componentWillReceiveProps(nextProps) {
        const diff = nextProps.value - this.props.value;
        if (diff > 0) {
            this.setState({ diff, isDiff: true })
        } else {
            this.setState({ diff: 0, isDiff: false })
        }
    }
    render() {
        const { props, state } = this;
        const { isDiff, diff } = state;
        const { value, classes } = props;
        return <p key={'keyPopup' + value} className={classNames(classes.diff, { [classes.diffMoveDisappear]: isDiff })}>
            <span className={classes.span}>{diff}</span>
        </p>
    }

}

export default injectSheet(styleSheet)(Popup);