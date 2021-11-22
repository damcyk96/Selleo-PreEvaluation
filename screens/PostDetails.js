import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native';
import {Card, Paragraph} from 'react-native-paper';
import {ActivityIndicator, Colors} from 'react-native-paper';

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
      {post ? (
        <Card>
          <Card.Title title={post.title} />
          <Card.Content>
            <Paragraph>{post.id}</Paragraph>
            <Paragraph>{post.body}</Paragraph>
          </Card.Content>
        </Card>
      ) : (
        <ActivityIndicator animating={true} color={Colors.red800} />
      )}
    </SafeAreaView>
  );
};

export default PostDetails;
