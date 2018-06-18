import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image
} from 'react-native';

const UserItem = props => {
  return (
    <TouchableOpacity>
      <View style={styles.userItem}>
        <Image
          resizeMode="cover"
          source={props.userImage}
          style={styles.userImage}
        />
        <Text>{props.userTitle}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  userItem: {
    width: '100%',
    marginBottom: 5,
    padding: 10,
    backgroundColor: '#eee',
    flexDirection: 'row',
    alignItems: 'center'
  },
  userImage: {
    marginRight: 8,
    height: 30,
    width: 30
  }
});

export default UserItem;