import React, { useState, useEffect } from 'react';
import moment from 'moment';
import Link from 'next/link';
import { getRecentPosts } from '../services';

const PostWidget = ({ category, slug }) => {
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    if (slug) {
      getSimilarPosts(category, slug).then((result) => setRelatedPosts(result));
    } else {
      getRecentPosts().then((result) => setRelatedPosts(result));
    }
  });
  return <div>Post Widgets</div>;
};

export default PostWidget;
