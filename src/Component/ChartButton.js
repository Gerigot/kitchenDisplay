import React from 'react';
import injectSheet from 'react-jss'
import classNames from 'classnames';

const styleSheet = {

    root: {
        width: '2em',
        height: '2em',
        position: 'relative',
    },
    icon: {
        width: '100%',
        height: '100%',
    },

}

const ChartButton = (props) => {
    const { classes, children , className} = props;
    return <div className={classNames(classes.root, className)}>
        <svg id='Capa_1' className={classes.icon} width='512' height='512'
            viewBox='0 0 512 512'>
            <path d='M512,480v32H32H0v-32V0h32v480H512z M448,0L322.031,20.594l30.281,37.031l-266.438,218l20.25,24.75l266.469-218l30.281,37 L448,0z M413.219,182.563L384,146.844V448h64V90.531L413.219,182.563z M192,271.469V448h64V219.125L192,271.469z M101.609,345.406 L96,338.531V448h64V297.625L101.609,345.406z M288,192.938V448h64V140.563L288,192.938z'
            />
        </svg>
        {children}
    </div>
};

export default injectSheet(styleSheet)(ChartButton);