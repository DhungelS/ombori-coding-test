import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity
} from 'react-native';

const UserItem = props => {
  return (
    <View>
    <TouchableOpacity>
      <View style={styles.userItem}>
        <Image
          resizeMode="cover"
          source={props.userImage}
          style={styles.userImage}
        />
        <Text style={{fontSize: 25}}>{props.userTitle}</Text>
      </View>
    </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  userItem: {
    width: '100%',
    marginBottom: 5,
    padding: 10,
    backgroundColor: '#eee',
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch',
  },
  userImage: {
    marginRight: 8,
    height: 90,
    width: 90,
    borderRadius: 5
  }
});

export default UserItem;