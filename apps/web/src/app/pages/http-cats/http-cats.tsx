import { InformationCircleIcon } from '@heroicons/react/24/outline';
import { getHttpCatRequest } from 'apps/web/src/services/http-cat/http-cat.service';
import { ChangeEventHandler, useState } from 'react';
import Layout from '../../components/layout/layout';

export interface HttpCatsProps {}

export function HttpCats(props: HttpCatsProps) {
  const [code, setCode] = useState(0);
  const [image, setImage] = useState('');

  function handleChange(event?: any) {
    event.target.value == '' ? setCode(0) : setCode(event.target.value);
  }

  async function handleSubmit() {
    const img = await getHttpCatRequest(code);
    setImage(img);
  }

  let infoCodes = `
  Códigos de status de respostas HTTP: 
  Respostas de informação (100-199), 
  Respostas de sucesso (200-299), 
  Redirecionamentos (300-399), 
  Erros do cliente (400-499),
  Erros do servidor (500-599). 
  `;

  return (
    <>
      <Layout title="HTTP Cat">
        <div className="flex justify-center items-center">
          <div className="flex flex-col mb-3 xl:w-8/12 md:w-10/12 max-sm:w-11/12">
            <div className="flex justify-between self-center xl:w-6/12 px-2 mb-2">
              <label className="form-label text-gray-700">
                Digite um código HTTP:
              </label>
              <div className="relative flex flex-col items-center group">
                <InformationCircleIcon className="h-5 w-5" />
                <div className="absolute bottom-0 flex-col items-center hidden mb-6 group-hover:flex">
                  <span className="relative w-56 z-10 p-2 text-xs leading-none text-white bg-gray-800 shadow-lg">
                    {infoCodes}
                  </span>
                  <div className="w-3 h-3 -mt-2 rotate-45 bg-black"></div>
                </div>
              </div>
            </div>
            <div className="flex flex-row self-center xl:w-6/12 mb-4 ">
              <input
                type="number"
                className="w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-l-xl transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="exampleFormControlInput1"
                placeholder="ex: 200"
                onChange={(event) => handleChange(event)}
              />
              <button
                type="button"
                className="px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-r-xl shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                onClick={handleSubmit}
              >
                Buscar
              </button>
            </div>
            <div className="flex justify-center items-center w-full">
              {image && <img src={image} alt="" />}
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default HttpCats;
