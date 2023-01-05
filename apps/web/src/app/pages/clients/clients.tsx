import styles from './clients.module.css';

/* eslint-disable-next-line */
export interface ClientsProps {}

export function Clients(props: ClientsProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Clients!</h1>
    </div>
  );
}

export default Clients;
