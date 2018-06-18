import React,{Component} from 'react';
import * as actions from '../../actions';

class UserList extends Component {

    componentDidMount(){

    }

    render(){
        return(
            <View>
            <FlatList
              style={styles.listContainer}
              data={this.props.users}
              keyExtractor={(item, index) => index.toString()}
              renderItem={info => (
                <MovieItem
                  movieTitle={info.item.Title}
                  movieImage={{ uri: info.item.Poster }}
                  onItemPressed={() => this.itemSelectedHandler(info.item.imdbID)}
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
