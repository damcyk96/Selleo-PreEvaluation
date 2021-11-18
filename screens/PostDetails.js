import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import axios from 'axios';

const PostDetails = ({route}) => {
  const {itemId} = route.params;

  const [post, setPost] = useState({});

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${itemId}`)
      .then(response => {
        setPost(response.data);
      });
  }, [itemId]);
  return (
    <SafeAreaView>
      <Text>{post.id}</Text>
      <Text>{post.title}</Text>
      <Text>{post.body}</Text>
    </SafeAreaView>
  );
};

export default PostDetails;

const styles = StyleSheet.create({});
