import React, { useState, useEffect } from 'react';
import moment from 'moment';
import Link from 'next/link';
import { getRecentPosts, getSimilarPosts } from '../services';

const PostWidget = ({ categories, slug }) => {
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug).then((result) =>
        setRelatedPosts(result)
      );
    } else {
      getRecentPosts().then((result) => setRelatedPosts(result));
    }
  });
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 mb-4">
      <h3 className="text-violet-500 text-xl mb-8 font-semibold border-b pb-4">
        {slug ? 'Related Post' : 'Recent Posts'}
      </h3>
      {relatedPosts.map((post) => (
        <div key={post.title} className="flex items-center w-full mb-4">
          <div className="flex-grow m-4 bg-gray-100 p-2 rounded-lg">
            <p>{moment(post.createdAt).format('MMM DD, YYYY')}</p>
            <Link className="text" href={`/post/${post.slug}`}>
              {post.title}
            </Link>
          </div>
          <div className="w-16 flex-none">
            <img
              alt={post.title}
              height="60px"
              width="60pc"
              className="align-middle rounded-full"
              src={post.featuredImage.url}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostWidget;
