import React from 'react';
import injectSheet from 'react-jss'
import { Link } from "react-router-dom";
import classNames from 'classnames';

const styleSheet = {
    root: {
        position: 'relative',
        backgroundColor: '#4CAF50',
        flex: '1 1 3em' 
    },
    link: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
    },
}

const MenuButton = (props) => {
    const { classes, linkUrl, name } = props;
    return <div className={classes.root}>{name}<Link className={classes.link} to={linkUrl}></Link></div>
};

export default injectSheet(styleSheet)(MenuButton);