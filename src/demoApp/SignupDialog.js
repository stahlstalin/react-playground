import React,{Component,Fragment} from 'react';


export const FancyDialog = (props) => (
    <div style={{border:`5px solid ${props.borderColor}`, padding: 10}}>
        {props.children}
    </div>
)

export const WelcomeDialog = props => (
    <Dialog title={`Welcome ${props.user}`}
        message="Thank you for visiting the spacecraft">
        <p>Always a pleasure to help</p>
    </Dialog>
)

export const Dialog = props => <FancyDialog borderColor="blue">
    <h3>{props.title}</h3>
    <p>{props.message}</p>
    {props.children}
</FancyDialog>

export const Contact = props => "Contacts";

export const Chat = props => "Chat";

export const SplitPan = props => (
    <div style={{display: 'flex', justifyContent: 'center',alignContent: 'center'}}>
        <div style={{order:1, flexGrow: 1, alignSelf: 'center', border:'1px solid red'}}>{props.left}</div>
        <div style={{order:1, flexGrow: 1, alignSelf: 'center', border:'1px solid green'}}>{props.right}</div>
    </div>
)

export default class SignupDialog extends Component {

    constructor(props){
        super(props);
        this.state = {
            userName:""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this,this.state);
    }

    handleChange(e) {
        // this.setState( (prevState, props) => ({
        //     userName: e.target.value
        // }));
        this.setState({
            userName:e.target.value
        });
    }

    handleClick(state) {
        console.log(state,this.state.userName);
        alert(`${state.userName} has signedup`)
    }

    render() {
        return (
            <Fragment>
                <Dialog title="Mars Exploration"
                    message="How should we refer it to you">
                    <input type="text" name="userName"
                        value={this.state.userName}
                        onChange={this.handleChange}/>
                    <button type="button" onClick={this.handleClick}>Singup</button>
                </Dialog>
                <SplitPan left={<Contact/>} right={<Chat/>} >Hello</SplitPan>
            </Fragment>
        );
    }
}
