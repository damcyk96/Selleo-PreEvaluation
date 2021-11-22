import React, {useState, useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {List} from 'react-native-paper';
import axios from 'axios';
import {ActivityIndicator, Colors} from 'react-native-paper';
import {SafeAreaView} from 'react-native';

const Posts = ({navigation}) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts').then(response => {
      setPosts(response.data);
    });
    console.log('dupa');
  }, []);

  return (
    <SafeAreaView>
      {posts ? (
        posts.map(post => (
          <List.Item
            title={post.title}
            key={post.id}
            onPress={() => {
              navigation.push('PostDetails', {itemId: post.id});
            }}>
            {posts.body}
          </List.Item>
        ))
      ) : (
        <ActivityIndicator animating={true} color={Colors.red800} />
      )}
    </SafeAreaView>
  );
};

export default Posts;
