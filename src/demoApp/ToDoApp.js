import React,{Fragment,Component} from 'react';
import ToDoList from "./ToDoList";

class ToDoApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value:"",
            list:[],
            time: new Date()
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.timer = setTimeout(()=>this.tick(), 1000);
    }
    componentWillUnmount() {
        clearInterval(this.timer);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.state.list.push(this.state.value)
        this.setState({
            list: this.state.list
        });
    }

    handleChange(e) {
        this.setState({
            value:e.target.value
        });
    }

    tick() {
        this.setState({
            time:new Date()
        });
    }

    render() {
        return (
            <Fragment>
                <form onSubmit={this.handleSubmit}>
                    <label>[{this.state.time.toLocaleTimeString()}]</label>
                    <label htmlFor="todo-list">Make your Lists</label>
                    <input type="text" id="todo-list" name="todo-list"
                        onChange={this.handleChange}
                        value={this.state.value} />
                    <input type="submit" value="submit" />
                </form>
                <ToDoList data={this.state.list} time={this.state.time.toLocaleTimeString()}/>
            </Fragment>
        );
    }
}

export default ToDoApp;
