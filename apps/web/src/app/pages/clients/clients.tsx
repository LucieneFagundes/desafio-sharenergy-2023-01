import { TrashIcon } from '@heroicons/react/24/outline';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../components/layout/layout';
import {
  deleteClientRequest,
  getAllClientsRequest,
} from '../../services/clients/clients.service';

interface IClient {
  _id: string;
  name: string;
  email: string;
  phone: string;
  cpf: string;
  address: string;
}

export function Clients() {
  const [clients, setClients] = useState<IClient[]>([]);

  async function handleDelete(item: any, _id: any) {
    await deleteClientRequest(_id);

    let clients = await getAllClientsRequest();
    let json = clients;
    setClients(json);
  }

  useEffect(() => {
    const handleGetClients = async () => {
      const data = await getAllClientsRequest();

      const json = data;
      setClients(json);
    };

    handleGetClients().catch(console.error);
  }, []);

  const columns = [
    { field: 'name', header: 'Nome' },
    { field: 'email', header: 'E-mail' },
    { field: 'phone', header: 'Telefone' },
    { field: 'address', header: 'Endereço' },
    { field: 'cpf', header: 'CPF' },
    { field: 'actions', header: '' },
  ];

  return (
    <>
      <Layout title="Clientes">
        <div className="flex justify-end max-sm:justify-center">
          <Link
            to="/new-client"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Novo cliente
          </Link>
        </div>
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                {columns.map((col, index) => {
                  return (
                    <th key={index} scope="col" className="px-6 py-3">
                      {col.header}
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody>
              {clients.map((client) => {
                return (
                  <tr
                    key={client._id}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                  >
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {client.name}
                    </th>
                    <td className="px-6 py-4">{client.email}</td>
                    <td className="px-6 py-4">{client.phone}</td>
                    <td className="px-6 py-4">{client.address}</td>
                    <td className="px-6 py-4">{client.cpf}</td>
                    <td className="px-6 py-4 hidden">{client._id}</td>
                    <td className="px-6 py-4 flex justify-end">
                      <Link
                        to={`/clients/${client._id}`}
                        className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                      >
                        Detalhe
                      </Link>
                      <button
                        onClick={(e) => handleDelete(e, client._id)}
                        className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                      >
                        <TrashIcon className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </Layout>
    </>
  );
}

export default Clients;
