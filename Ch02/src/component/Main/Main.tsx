import * as React from 'react';
import * as styles from './index.scss';

interface MainProps {
  text: string
}

const Main = (props: MainProps) => {
  const { text, } = props;
  return (
    <div className={styles.mainBlock}>
      {text}
    </div>
  );
};

export default Main;
