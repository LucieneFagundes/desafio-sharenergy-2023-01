import { createClientRequest } from 'apps/web/src/services/clients/clients.service';
import ClientForm from '../../components/client-form/client-form';
import Layout from '../../components/layout/layout';

export interface NewClientProps {}

export function NewClient(props: NewClientProps) {
  async function handleCreate(client: any) {
    try {
      const response = await createClientRequest(client);
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <Layout title="Adicionar cliente">
      <ClientForm btnText="Salvar" handleSubmit={handleCreate} />
    </Layout>
  );
}

export default NewClient;
