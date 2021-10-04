import React, { memo } from 'react';
import { UserPosts as UserPostsProps } from '../../zustand/types';

export default memo(function UserPost({ title, body }: UserPostsProps) {
  return (
    <div
      style={{
        boxSizing: 'border-box',
        margin: 10,
        display: 'flex',
        flexDirection: 'column',
        border: '1px solid black',
        borderRadius: '10px',
        boxShadow: '1px 1px 10px black',
        padding: 10,
      }}
    >
      <h3>{title}</h3>
      <p>{body}</p>
    </div>
  );
});
