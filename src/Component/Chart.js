import React from 'react';
import injectSheet from 'react-jss'
import classNames from 'classnames';

const styleSheet = {

    root: {}

}

const Chart  = (props) => {
    const { classes, match:{params:{type}}, list } = props;
    console.log(type, props)
    return <div>fdsafdsa</div>
};

export default injectSheet(styleSheet)(Chart);