import Load from './Load';
import UserList from './UserList';

import React, { Component } from 'react';

class Main extends Component {

    constructor(props){
        super(props)
            this.state = {
                Component: <Load/>
            
        }
    }

    componentDidMount(){
        this.timeoutHandle = setTimeout(()=>{
            this.setState({ Component: <UserList/> })
       }, 3000);
    }

    componentWillUnmount(){
        clearTimeout(this.timeoutHandle);
    }

    render() {
        return (
           this.state.Component
    );
    }
}

export default Main;