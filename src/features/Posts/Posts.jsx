import React, {useState, useEffect} from "react";
import './Posts.scss';
import { useSelector, useDispatch } from "react-redux";
import {setPosts} from './postsSlice';
import { getPosts } from "../../API/placeholder";

export default function Posts(props) {
  const posts = useSelector(state => state.posts);
  const users = useSelector(state => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    const response = getPosts(users.selectedUserId);
    response.then(
      data => {
        return data.json();
      }
    ).then(
      dataJSON => {
        dispatch(setPosts(dataJSON));
      }
    ).catch(alert);
  }, [props.id]);

  return (
    <div className="posts">
      {
        posts.postsList.map(item => {
          return(
            <div className="post-item">
              <div className="title">{item.title}</div>
              <div className="body">{item.body}</div>
            </div>
          )
        })
      }
    </div>
  )
}