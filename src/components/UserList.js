import React, { Component } from 'react';
import * as actions from '../store/actions/getUsers';
import { connect } from 'react-redux';

import {
    View,
    StyleSheet,
    FlatList,
    Text
} from 'react-native';
import UserItem from './UserItem';
import Axios from 'axios';


class UserList extends Component {

    constructor(props){
        super(props)
        this.state = {
            usersData: [],
            currentPage: 1,
            pages: null,
            endMessage: null
        }
    }

    componentDidMount() {
    
        Axios({url: `https://reqres.in/api/users?page=${this.state.currentPage}`, method:'get'})
        .then(res => {
            this.setState({usersData: res.data.data, currentPage: res.data.page, pages: res.data.total_pages})
        })

    }

    endReached = () => {
        if(this.state.currentPage < this.state.pages){
        Axios({url: `https://reqres.in/api/users?page=${this.state.currentPage + 1}`, method:'get'})
        .then(res => {
            this.setState({usersData: [...this.state.usersData, ...res.data.data],  currentPage: res.data.page, pages: res.data.total_pages})
        })
    }
    else {
        return;
    }
    }

    render() {
        
        return (
            <View>
                <FlatList
                    style={styles.listContainer}
                    data={this.state.usersData}
                    onEndReached={ this.endReached()}
                    onEndReachedThreshold={0.7}
                    keyExtractor = {(item, index) => index.toString()}
                    renderItem={info => (
                        <UserItem
                            userTitle={`${info.item.first_name} ${info.item.last_name}`}
                            userImage={{ uri: info.item.avatar }}
                        />
                    )}

                />
            </View>
        )
    }
}

const mapStateToProps = state => {
    return {
        users: state.users.usersData,
        pageInfo: state.users.pageInfo
    }
};

const styles = StyleSheet.create({
    listContainer: {
        width: '100%',
    }
});

export default connect(mapStateToProps, actions)(UserList)
