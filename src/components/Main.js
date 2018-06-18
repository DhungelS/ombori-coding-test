import Load from './Load';
import UserList from './UserList';

import React, { Component } from 'react';

class Main extends Component {

    constructor(props){
        super(props){
            this.state = {
                mainComponent: <UserList/>
            }
        }
    }

    componentDidMount(){
        this.timeoutHandle = setTimeout(()=>{
            // Add your logic for the transition
            this.setState({ component: <Load /> })
       }, 3000);
    }

    componentWillUnmount(){
        clearTimeout(this.timeoutHandle);
    }

    render() {
        return (
           this.state.mainComponent
    );
    }
}