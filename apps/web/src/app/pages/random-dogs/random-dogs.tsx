import styles from './random-dogs.module.css';

/* eslint-disable-next-line */
export interface RandomDogsProps {}

export function RandomDogs(props: RandomDogsProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to RandomDogs!</h1>
    </div>
  );
}

export default RandomDogs;
