import { useState } from 'react';
import Layout from '../../components/layout/layout';
import { getRandomDogRequest } from '../../services/random-dog/random-dog.service';

export interface RandomDogsProps {}

export function RandomDogs(props: RandomDogsProps) {
  const [dog, setDog] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  async function handleRefresh() {
    setLoading(true);
    let dog = await getRandomDogRequest();
    setDog(dog);
    setLoading(false);
  }

  return (
    <>
      <Layout title="Random Dog">
        <div className="flex flex-col items-center justify-center">
          <button
            className="text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800"
            onClick={handleRefresh}
          >
            Refresh
          </button>
          {dog ? (
            <div>
              {loading ? (
                <div>Loading...</div>
              ) : (
                <div className="flex justify-center m-2 ">
                  <img src={dog} className="flex object-fill rounded-lg" />
                </div>
              )}
            </div>
          ) : (
            <div>Clique no botão</div>
          )}
        </div>
      </Layout>
    </>
  );
}

export default RandomDogs;
