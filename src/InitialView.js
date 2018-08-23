import React, { Component } from 'react';
import injectSheet from 'react-jss';
import Websocket from 'react-websocket';
import classNames from 'classnames';
import ElementFood from './Component/ElementFood';

const styleSheet = {
    '@global': {
        '*': {
            boxSizing: 'border-box',
        },
        body: {
            padding: '0px 4px',
        }
    },
    container: {
        maxWidth: '100%',
    },
    '@media screen and (min-width:680px)': {
        container: {
            flexWrap: 'wrap',
            display: 'flex',
        }
    }
}

class InitialView extends Component {
    constructor(props) {
        super(props);
        this.handleData = this.handleData.bind(this);
        this.getList = this.getList.bind(this)
        this.state = {
            list: [
                {
                    "title": "Costine",
                    "color": "red",
                    "value": 0
                },
                {
                    "title": "Luganighetta",
                    "color": "blue",
                    "value": 3
                },
                {
                    "title": "Filetto",
                    "color": "yellow",
                    "value": 3
                },
                {
                    "title": "Bue",
                    "color": "green",
                    "value": 5
                },
                {
                    "title": "patatine fritte",
                    "color": "red",
                    "value": 2
                }
            ]
        };
    }
    handleData(data) {
        if (!data || data.size === 0) return;
        const message = JSON.parse(data);
        this.setState({ list: this.getList(message) });
    }
    getList(message) {
        console.log(message)
        if (!message) return [];
        return message.map(({ title, value, color }, index) => {
            if (this.state.list[index] && this.state.list[index].value !== value) {
                return { title, color, value, diff: value - this.state.list[index].value }
            } else {
                return { title, color, value }
            }
        })
    }
    render(){
        const wsUrl = 'ws://' + window.location.host + '/websocket';
        const { classes } = this.props
        return <div>
            <div className={classNames(classes.container)}>{
                this.state.list.map(({ title, value, color, diff }) => (
                    <ElementFood key={title} name={title} value={value} color={color} diff={diff} />
                ))
            }</div>
            <Websocket url={wsUrl}
                onMessage={this.handleData.bind(this)}
            />
        </div>
    }
}


export default injectSheet(styleSheet)(InitialView);
