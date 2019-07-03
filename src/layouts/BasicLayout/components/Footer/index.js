import React, { PureComponent } from 'react';
import styles from './index.module.scss';

const getYear = () => {
  return new Date().getFullYear();
}

export default class Footer extends PureComponent {
  render() {
    return (
      <div className={styles.footerContainer}>
        <h2 className={styles.title}>
          L
        </h2>
        <div className={styles.copyright}>
          &copy; {getYear()}
        </div>
      </div>
    );
  }
}
