import styles from './random-users.module.css';

/* eslint-disable-next-line */
export interface RandomUsersProps {}

export function RandomUsers(props: RandomUsersProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to RandomUsers!</h1>
    </div>
  );
}

export default RandomUsers;
