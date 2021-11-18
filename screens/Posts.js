import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, FlatList, Button} from 'react-native';
import axios from 'axios';

const Posts = ({navigation}) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts').then(response => {
      setPosts(response.data);
    });
  }, []);

  return (
    <View>
      {posts ? (
        <FlatList
          data={posts}
          renderItem={({item}) => (
            <Button
              title={item.title}
              onPress={() => {
                navigation.push('PostDetails', {itemId: item.id});
              }}
            />
          )}
        />
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
  );
};

export default Posts;

const styles = StyleSheet.create({});
