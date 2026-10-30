// src/components/Skeleton.jsx
import React from 'react';
import styles from './Skeleton.module.css';

export default function Skeleton({ className = '', style, ...rest }) {
  return (
    <div
      className={`${styles.skeleton} ${className}`.trim()}
      style={style}
      aria-hidden="true"
      {...rest}
    />
  );
}