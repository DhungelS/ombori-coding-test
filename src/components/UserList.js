import React,{Component} from 'react';
import * as actions from '../store/actions/getUsers';
import { connect } from 'react-redux';

import {
    View,
    StyleSheet,
    FlatList 
  } from 'react-native';
  import UserItem from './UserItem';
  

class UserList extends Component {

    componentDidMount(){
        this.props.fetchUsers();
    }

    render(){
        console.log(this.props.users);
        return(
            <View>
            <FlatList
              style={styles.listContainer}
              data={this.props.users}
              renderItem={info => (
                <UserItem
                  key={info.id}
                  userTitle={`${info.first_name} ${info.last_name}`}
                 userImage={{ uri: info.item.Poster }}
                />
              )}
            />
            </View>
        )
    }
}

const mapStateToProps = state => ({
users: state.user.usersData
});

const styles = StyleSheet.create({
    listContainer: {
      width: '100%'
    }
  });

export default connect(mapStateToProps, actions)(UserList)
