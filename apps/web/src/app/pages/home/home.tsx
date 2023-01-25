import { Link } from 'react-router-dom';
import Layout from '../../components/layout/layout';
import Clients from '../clients/clients';
import styles from './home.module.css';

/* eslint-disable-next-line */
export interface HomeProps {}

export function Home(props: HomeProps) {
  return (
    <>
      <Layout title="Home">
        <ul className="flex justify-evenly">
          <Link to="/random-users">Page1</Link>
          <Link to="/http-cats">Page2</Link>
          <Link to="/random-dogs">Page3</Link>
          <Link to="/clients">Page4</Link>
        </ul>
      </Layout>
    </>
  );
}

export default Home;
