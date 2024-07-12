import React, { FC } from 'react';
import placeholder from '../../../assets/png/placeholder.png';
import styles from '../../../styles/singleBlog.module.css';
import { timeConverter } from '../../../utils/time-converter';

interface SingleBlogProps {
  theme: {
    primary: string;
    secondary: string;
    tertiary: string;
    quaternary: string;
  };
  title: string;
  desc: string;
  date: string;
  image: string | undefined;
  url: string;
  id: string;
}

const SingleBlog: FC<SingleBlogProps> = ({
  theme,
  title,
  desc,
  date,
  image,
  url,
  id,
}) => {
  return (
    <a
      className={styles.singleBlog}
      key={id}
      href={url}
      target="_blank"
      rel="noreferrer"
      style={{ backgroundColor: theme.quaternary }}
    >
      <div
        className={styles.singleBlogImage}
        style={{ backgroundColor: theme.secondary }}
      >
      </div>
      <div className={styles.singleBlogBody}>
        <p style={{ color: theme.primary }}>{timeConverter(date)}</p>
        <h3 style={{ color: theme.tertiary }}>{title}</h3>
        <h6 style={{ color: theme.tertiary }}>{desc}</h6>
      </div>
    </a>
  );
};

export default SingleBlog;
