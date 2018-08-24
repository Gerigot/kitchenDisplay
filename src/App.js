import React, { Component } from 'react';
import classNames from 'classnames';
import injectSheet from 'react-jss'
import Title from './Component/Title';
import { HashRouter as Router, Route, Link } from "react-router-dom";
import InitialView from './InitialView';
import ChartButton from './Component/ChartButton';
import Charts from './Charts';


const styleSheet = {
  title: {
    fontSize: '3em',
    height: '20vh',
    textAlign: 'center',
  },
  rootTitle: {
    position: "relative",
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexGrow: 1,
  },
  titleDiv: {
    display: 'flex',
    alignItems: 'center',
  },
  link: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  }
}

class App extends Component {

  render() {
    const { classes } = this.props;
    return (
      <Router>
        <div className="App" >
          <div className={classes.titleDiv}>
            <Title rootClassName={classes.rootTitle} className={classNames(classes.title)}>
              <Link to="/" className={classes.link} />
            </Title>
            <ChartButton className={classes.chartButton}>
              <Link to="/charts" className={classes.link} />
            </ChartButton>
          </div>
          <Route exact path="/" component={InitialView} />
          <Route path="/charts" component={Charts} />
        </div>
      </Router>
    );
  }
}

export default injectSheet(styleSheet)(App);
