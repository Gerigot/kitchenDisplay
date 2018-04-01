import React, { Component } from 'react';
import classNames from 'classnames';
import Websocket from 'react-websocket';
import ElementFood from './Component/ElementFood';
import injectSheet from 'react-jss'
import Title from './Component/Title';

const styleSheet = {
  title: {
    fontSize: '3em',
    width: '100%',
    height: '25vh',
    textAlign: 'center',
  },
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

class App extends Component {
  constructor(props) {
    super(props);
    this.handleData = this.handleData.bind(this);
    this.getList = this.getList.bind(this)
    this.state = { list: [] };
  }
  handleData(data) {
    if (!data || data.size === 0) return;
    const message = JSON.parse(data);
    this.setState({ list: this.getList(message) });
  }
  getList(message){
    console.log(message)
    if(!message) return []; 
    return message.map(({title, value, color}, index)=>{
      if(this.state.list[index] && this.state.list[index].value !== value){
        return {title, color, value, diff: value - this.state.list[index].value}
      }else{
        return {title, color, value}
      }
    })
  }
  render() {
    const wsUrl = 'ws://' + window.location.hostname + ':8080/websocket';
    const { classes } = this.props;
    return (
      <div className="App" onClick={this.toggleVisible}>
        <Title className={classNames(classes.title)} />
        <div className={classNames(classes.container)}>{
          this.state.list.map(({ title, value, color, diff }) => (
            <ElementFood key={title} name={title} value={value} color={color} diff={diff} />
          ))
        }</div>
        <Websocket url={wsUrl}
          onMessage={this.handleData.bind(this)}
           />
      </div>
    );
  }
}

export default injectSheet(styleSheet)(App);
