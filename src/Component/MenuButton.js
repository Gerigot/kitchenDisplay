import React from 'react';
import injectSheet from 'react-jss'
import { Link } from "react-router-dom";

const styleSheet = {
    root: {
        position: 'relative',
        backgroundColor: '#00bcd4',
        flexBasis: '3em',
        fontSize: '1.5em',
        padding: 5,
        borderLeft: '0px solid',
        borderRight: '1px solid',
        textAlign: 'center',
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