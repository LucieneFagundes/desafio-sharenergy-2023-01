import Clients from '../clients/clients';
import styles from './home.module.css';

/* eslint-disable-next-line */
export interface HomeProps {}

export function Home(props: HomeProps) {
  return (
    <>
      <Clients />
    </>
  );
}

export default Home;
