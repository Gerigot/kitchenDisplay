import React, { Component } from 'react';
import injectSheet from 'react-jss'
import MenuButton from './Component/MenuButton';
import { Route } from "react-router-dom";
import Chart from './Component/Chart';

const styleSheet = {
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    }

}

class Charts extends Component {
    constructor(props) {
        super(props);
        this.state = { nameList: ["fdsa", "flkdsja", "lfkdjas", "fdkljsa", "flkdasj", "fdlksajlkjs", "fksdjaljf"], data: [] };
    }
    componentDidMount() {
        fetch("/getAll").then(result => result.json()).then(json => {
            if (json && json[0] && json[0].data) {
                let data = json[0].data;
                this.setState({
                    nameList: data.map(value => { return value.title }),
                    data:json
                })
            }
        }).catch(err=>{})
    }
    render() {
        const { classes } = this.props;
        return <div>
            <div className={classes.root}>
                {this.state.nameList.map(value => {
                    return <MenuButton key={value} name={value} linkUrl={`/charts/${value}`}></MenuButton>
                })}
            </div>
            <Route path={`/charts/:type`} render={(props) => <Chart {...props} list={this.state.data}/>}/>
        </div>
    }
};

export default injectSheet(styleSheet)(Charts);