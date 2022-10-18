import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSubreddits, selectSubreddits } from "./SubredditsSlice"

import styles from './Subreddits.module.css';

export const Subreddits = () => {
  const dispatch = useDispatch();
  const subreddits = useSelector(selectSubreddits);

  useEffect(() => {
    dispatch(getSubreddits());
  }, [dispatch]);

  return (
    <ul className={styles.subUl}>
        {
          subreddits.slice(0, 14).map((subreddit) => (
            <li key={subreddit.id} className={styles.subLi}>
              test
            </li>
          ))
        }
    </ul>
  )
}