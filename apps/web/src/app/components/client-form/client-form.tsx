import { Field, FieldAttributes, Form, Formik } from 'formik';
import { HTMLAttributes, useState } from 'react';

export interface ClientFormProps {
  data?: IClient;
  btnText: string;
  handleSubmit: (e: any) => void;
  isDisabled?: boolean;
}

interface IClient {
  _id: string;
  name: string;
  email: string;
  phone: string;
  cpf: string;
  address: string;
}

export function ClientForm({
  data,
  btnText,
  handleSubmit,
  isDisabled = false,
}: ClientFormProps) {
  const initialValues = {
    name: data?.name || '',
    email: data?.email || '',
    phone: data?.phone || '',
    address: data?.address || '',
    cpf: data?.cpf || '',
  };

  return (
    <>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className="mx-2">
          <label
            htmlFor="name"
            className="block mt-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Nome
          </label>
          <Field
            type="text"
            id="name"
            name="name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Ex.: Maria Jose da Silva"
            disabled={isDisabled}
            required
          />
          <label
            htmlFor="email"
            className="block mt-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            E-mail
          </label>
          <Field
            type="email"
            id="email"
            name="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Ex.: mariajose@example.com"
            disabled={isDisabled}
            required
          />
          <label
            htmlFor="phone"
            className="block mt-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Telefone
          </label>
          <Field
            type="number"
            id="phone"
            name="phone"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Ex.: (00) 00000-0000"
            disabled={isDisabled}
          />
          <label
            htmlFor="address"
            className="block mt-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Endereço
          </label>
          <Field
            type="text"
            id="address"
            name="address"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 max-sm:p-4"
            placeholder="Ex.: Rua A, 10 - Bairro - Cidade/UF - CEP: 00000-000"
            disabled={isDisabled}
            required
          />
          <label
            htmlFor="cpf"
            className="block mt-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            CPF
          </label>
          <Field
            type="text"
            id="cpf"
            name="cpf"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Ex.:  000.000.000-00"
            disabled={isDisabled}
            required
          />

          {!isDisabled ? (
            <div className="flex my-2 justify-end max-sm:justify-center">
              <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                {btnText}
              </button>
            </div>
          ) : (
            ''
          )}
        </Form>
      </Formik>
    </>
  );
}

export default ClientForm;
