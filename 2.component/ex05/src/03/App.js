import React, {Component} from 'react';
import './assets/scss/App.scss'
import Clock from './Clock';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time: new Date()
        }
    }

    componentDidMount() {
        this.timeID = setInterval(() => this.setState({time: new Date()}), 1000)
    }
    
    componentWillUnmount() {
        clearInterval(this.timeID)
    }

    render() {
        return (
            <div className='clock-display'>
                <h2 onClick={this.test}>ex05 - Component LifeCycle Practice</h2>
                <Clock
                    hours={('0' + (
                        this.state.time.getHours() > 12
                            ? this.state.time.getHours() - 12
                            : this.state.time.getHours()
                    )).slice(-2)}
                    minutes={('0' + this.state.time.getMinutes()).slice(-2)}
                    seconds={('0' + this.state.time.getSeconds()).slice(-2)}
                    session={parseInt(this.state.time.getHours()) > 12 ? 'pm' : 'am'}/>
            </div>
        );
    }
}