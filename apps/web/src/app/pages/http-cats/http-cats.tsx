import styles from './http-cats.module.css';

/* eslint-disable-next-line */
export interface HttpCatsProps {}

export function HttpCats(props: HttpCatsProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to HttpCats!</h1>
    </div>
  );
}

export default HttpCats;
