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
    body:{
      padding: '0px 4px',
    }
  },
  container: {
    maxWidth: '100%',
  },
  '@media (min-width: 1024px)': {
    container: {
      display: 'flex',
      alignItems: 'center',
    }
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.handleData = this.handleData.bind(this);
    this.state = { list: [] };
  }
  handleData(data) {
    const message = JSON.parse(data);
    this.setState({ list: message });
  }
  render() {
    const wsUrl = 'ws://'+window.location.hostname+':8080/websocket';
    const { classes } = this.props;
    return (
      <div className="App" onClick={this.toggleVisible}>
        <Title className={classes.title}/>
        <div className={classes.container}>{
          this.state.list.map(({ title, value, color }) => (
            <ElementFood key={title} name={title} value={value} color={color} />
          ))
        }</div>
        <Websocket url={wsUrl}
          onMessage={this.handleData.bind(this)} />
      </div>
    );
  }
}

export default injectSheet(styleSheet)(App);
