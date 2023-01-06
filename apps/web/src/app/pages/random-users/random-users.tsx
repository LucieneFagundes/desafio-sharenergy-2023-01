import { getRandomUser } from 'apps/web/src/services/random-user/random-user.service';
import { useEffect, useState } from 'react';
import Layout from '../../components/layout/layout';
import Pagination from '../../components/pagination/pagination';
import Table from '../../components/table/table';

export interface RandomUsersProps {}

export interface Info {
  seed: string;
  results: number;
  page: number;
  version: string;
}

export function RandomUsers(props: RandomUsersProps) {
  const [randomUser, setRandomUser] = useState(null);
  const [userInfo, setUserInfo] = useState<Info>();

  useEffect(() => {
    getRandomUser()
      .then((response) => {
        setRandomUser(response.results);
        setUserInfo(response.info);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [props]);

  function getRandomUserPagination(page: any) {
    getRandomUser(page).then((user) => {
      setRandomUser(user.results);
      setUserInfo(user.info);
    });
  }

  const columns = [
    { field: 'picture', header: 'Foto' },
    { field: 'name', header: 'Nome' },
    { field: 'email', header: 'E-mail' },
    { field: 'login', header: 'Username' },
    { field: 'dob', header: 'Idade' },
  ];

  return (
    <>
      <Layout title="Random User">
        <Table data={randomUser} columns={columns} />
        <Pagination
          page={userInfo?.page}
          onPageChange={(page) => getRandomUserPagination(page)}
        />
      </Layout>
    </>
  );
}

export default RandomUsers;
