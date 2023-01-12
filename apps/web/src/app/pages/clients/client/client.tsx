import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ClientForm from '../../../components/client-form/client-form';
import Layout from '../../../components/layout/layout';
import {
  getClientRequest,
  updateClientRequest,
} from '../../../services/clients/clients.service';

export interface ClientProps {}

interface IClient {
  _id: string;
  name: string;
  email: string;
  phone: string;
  cpf: string;
  address: string;
}

export function Client(props: ClientProps) {
  let { id } = useParams();
  const [client, setClient] = useState<IClient>();
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const handleGetClient = async () => {
      let data = await getClientRequest(id!);
      setClient(data);
    };

    handleGetClient().catch(console.error);
  }, []);

  function toggleShowForm() {
    setShowForm(!showForm);
  }

  async function handleUpdateClient(data: any) {
    await updateClientRequest(id!, data).catch(console.error);
    const client = await getClientRequest(id!);
    setClient(client);
    setShowForm(!showForm);
  }

  function noSubmit() {}

  return (
    <>
      <Layout title={client?.name ? client?.name : 'Cliente'}>
        <div className="flex justify-end">
          <button
            onClick={toggleShowForm}
            className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
          >
            {!showForm ? 'Editar cliente' : 'Fechar'}
          </button>
        </div>

        {client?.name ? (
          <div>
            {showForm ? (
              <div>
                <ClientForm
                  btnText="Atualizar"
                  data={client}
                  handleSubmit={handleUpdateClient}
                />
              </div>
            ) : (
              <div>
                <ClientForm
                  btnText="noButton"
                  handleSubmit={noSubmit}
                  data={client}
                  isDisabled={true}
                />
              </div>
            )}
          </div>
        ) : (
          <div>Loading ...</div>
        )}
      </Layout>
    </>
  );
}

export default Client;
